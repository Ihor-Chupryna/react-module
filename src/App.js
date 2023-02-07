import { useEffect, useState } from "react";

import { carService } from "./services";
import { CarForm, Cars } from "./components";

const App = () => {
    const [cars, setCars] = useState([]);
    const [carForUpdate, setCarForUpdate] = useState(null);

    useEffect(() => {
        carService.getAll().then(({ data }) => setCars([...data]))
    }, [])
    return (
        <div>
            <CarForm setCars={setCars} carForUpdate={carForUpdate}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
};

export { App };