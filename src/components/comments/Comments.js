import { useNavigate } from "react-router-dom";

const Comments = ({ comments = [] }) => {
    const navigate = useNavigate();

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            height: 500,
            overflowY: 'scroll'
        }}>
            {comments.map(value => {
                const { id, postId, name } = value;
                return (
                    <div key={id}
                         style={{ background: 'lightgrey' }}>
                        <div>id: {id}</div>
                        <div>postId: {postId}</div>
                        <div>name: {name}</div>
                        <button onClick={() => navigate(postId.toString())}>Show post</button>
                    </div>
                )
            })}
        </div>
    );
};

export { Comments };