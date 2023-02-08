import { useDispatch } from "react-redux";

import { carActions } from "../../redux/slices";

const Car = ({ car }) => {
    const { id, brand, price, year } = car;
    const dispatch = useDispatch();

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=> dispatch(carActions.setCarForUpdate(car))}>update</button>
            <button onClick={()=> dispatch(carActions.deleteById({id}))}>delete</button>
            <br/>
        </div>
    );
};

export { Car };