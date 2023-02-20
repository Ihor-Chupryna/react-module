import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { Car } from "../Car/Car";
import { carActions } from "../../redux/slices";
import { useSearchParams } from "react-router-dom";

const Cars = () => {
    const { cars, prev, next } = useSelector(state => state.cars);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({ page: '1' });

    useEffect(() => {
        dispatch(carActions.getAll({ page: query.get('page') }))
    }, [dispatch, query])

    return (
        <div>
            <button disabled={!prev} onClick={() => setQuery(value => ({ page: + value.get('page') - 1 }))}>prev
            </button>
            <button disabled={!next} onClick={() => setQuery(value => ({ page: + value.get('page') + 1 }))}>next
            </button>
            {cars.map(value => <Car key={value.id} car={value}/>)}
        </div>
    );
};

export { Cars };