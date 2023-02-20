import { useSelector } from "react-redux";

import { CarForm, Cars } from "../../components";

const CarPage = () => {
    const { loading } = useSelector(state => state.cars);

    return (
        <div>
            <div>
                <CarForm/>
                <hr/>
                {loading && <h1>Loading......</h1>}
                <Cars/>
            </div>

        </div>
    );
};

export { CarPage };