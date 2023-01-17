import './SimpsonStyle.css';

const Simpson = ({simpson}) => {
    const {name, surname, description, image} = simpson;
    return (
        <div className={'simpson-wrapper'}>
            <h2>{name} {surname}</h2>
            <div className={'simpson-content'}>
                <img src={image} alt="simpsons-photo"/>
                <p>{description}</p>
            </div>
        </div>
    );
};

export {Simpson};