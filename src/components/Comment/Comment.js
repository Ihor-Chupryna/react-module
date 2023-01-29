import { useNavigate } from "react-router-dom";

import style from './Comment.module.css';

const Comment = ({ comment }) => {
    const { id, postId, name, email, body } = comment;
    const navigate = useNavigate();

    return (
        <div className={style.comment}>
            <div>ID: {id}</div>
            <div>postID: {postId}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            <button onClick={() => navigate(postId.toString())}>Show post</button>
        </div>
    );
};

export { Comment };