const Character = ({character}) => {
    console.log(character)
    const {name, gender, species, status, image} = character;
    return (
        <div>
            <h2>{name}</h2>
            <p>gender: {gender}</p>
            <p>species: {species}</p>
            <p>status: {status}</p>
            <img src={image} alt="character photo"/>
        </div>
    );
};

export {Character};