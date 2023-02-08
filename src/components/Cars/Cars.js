import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { Car } from "../Car/Car";
import { carActions } from "../../redux/slices";

const Cars = () => {
    const { cars } = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carActions.getAll())
    }, [dispatch])

    return (
        <div>
            {cars.map(value => <Car key={value.id} car={value}/>)}
        </div>
    );
};

export { Cars };