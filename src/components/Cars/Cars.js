import { Car } from "../Car/Car";
import './carsStyle.css';

const Cars = ({ setCar, cars, setUpdateCar }) => {

    return (
        <div className={'cars-list'}>
            <h1>Cars:</h1>
            {cars.map(value => <Car key={value.id} car={value} setUpdateCar={setUpdateCar} setCar={setCar}/>)}
        </div>
    );
};

export { Cars };