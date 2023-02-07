import { Car } from "../Car/Car";

const Cars = ({ cars, setCarForUpdate }) => {

    return (
        <div>
            {cars.map(value => <Car key={value.id} car={value} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export { Cars };