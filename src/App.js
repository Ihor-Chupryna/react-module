import { useEffect, useState } from "react";

import { CarForm, Cars } from "./components";
import { carService } from "./services";

const App = () => {
    const [car, setCar] = useState(null);
    const [cars, setCars] = useState([]);
    const [updateCar, setUpdateCar] = useState(null);

    useEffect(() => {
        carService.getAll().then(({ data }) => setCars([...data]))
    }, [car])

    return (
        <div>
            <CarForm setCar={setCar} updateCar={updateCar}/>
            <Cars cars={cars} setUpdateCar={setUpdateCar} setCar={setCar}/>
        </div>
    );
};


export { App };