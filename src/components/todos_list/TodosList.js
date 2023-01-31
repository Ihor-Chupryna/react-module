const TodosList = ({ todos = [] }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10
        }}>
            {todos.map(value => {
                const { id, userId, title, completed } = value;
                return (
                    <div key={id} style={{ background: 'lightgrey' }}>
                        <div>id: {id}</div>
                        <div>userId: {userId}</div>
                        <div>title: {title}</div>
                        <div>completed: {completed ? 'completed' : 'Not done yet'}</div>
                    </div>
                )
            })}
        </div>
    );
};

export { TodosList };