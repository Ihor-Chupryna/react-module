import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

import { carValidator } from "../../validators";
import { carService } from "../../services";
import { useEffect } from "react";

const CarForm = ({ setCar, updateCar }) => {

    const { register, formState: { errors, isValid }, handleSubmit, reset, setValue } = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    useEffect(() => {
        if (updateCar) {
            setValue('brand', updateCar.brand)
            setValue('price', updateCar.price)
            setValue('year', updateCar.year)
        }
    }, [updateCar])

    const submit = async (car) => {
        try {
            if (updateCar) {
                const { data } = await carService.updateById(updateCar.id, car);
                setCar(data)
            } else {
                const { data } = await carService.create(car);
                setCar(data)
            }
        } catch (e) {
            console.log(e)
        }

        reset()
    }


    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}
            <input type="text" placeholder={'price'} {...register('price')}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'} {...register('year')}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>{updateCar ? 'update' : 'create'}</button>
        </form>
    );
};

export { CarForm };