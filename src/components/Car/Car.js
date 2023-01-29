import { carService } from "../../services";

const Car = ({ setCar, car, setUpdateCar }) => {
    const { id, brand, price, year } = car;

    const deleteCar = async () => {
        await carService.delete(id);
        setCar({})
    }

    return (
        <div>
            <div>id:{id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => setUpdateCar(car)}>Update</button>
            <button onClick={() => deleteCar()}>Delete</button>
            <hr/>
        </div>
    );
};

export { Car };