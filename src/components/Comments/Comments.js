import { useEffect, useState } from "react";

import { Comment } from "../Comment/Comment";
import { commentService } from "../../services";
import style from './Comments.module.css';

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getAll().then(({ data }) => setComments(data))
    }, [])

    return (
        <div className={style.comments}>
            {comments.map(value => <Comment key={value.id} comment={value}/>)}
        </div>
    );
};

export { Comments };