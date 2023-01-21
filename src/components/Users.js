const Users = ({ users, onSelectUser }) => {
    return (
        <div>
            {users.map(value => {
                const { id: userId, name } = value;
                return (
                    <div key={`${userId}-item`}>
                        <h2>{userId} {name}</h2>
                        <button onClick={() => onSelectUser(userId)}>Select user</button>
                    </div>
                )
            })}
        </div>
    );
};

export { Users };