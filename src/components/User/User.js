import './userStyle.css';

const User = ({user, setUserId}) => {
    const {id, name} = user;

    return (
        <div className={'user-wrapper'}>
            <h1>{id}) {name}</h1>
            <button onClick={() => setUserId(id)}>user posts</button>
        </div>
    );
};

export {User};