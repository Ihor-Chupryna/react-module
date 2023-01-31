const Albums = ({ albums = [] }) => {

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
        }}>
            {albums.map(value => {
                const { id, userId, title } = value
                return (
                    <div key={id} style={{ background: 'lightgrey' }}>
                        <div>id: {id}</div>
                        <div>userId: {userId}</div>
                        <div>title: {title}</div>
                    </div>
                )
            })}

        </div>
    );
};

export { Albums };

