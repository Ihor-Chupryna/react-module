import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { commentsRequest } from "../../api/request/commentsRequest";
import { Comments } from "../../components/comments/Comments";

const CommentsPage = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsRequest.getAll().then(({ data }) => setComments(data))
    }, [])

    return (
        <div style={{ width: '100%', margin: '0 auto'}}>
            <h2>Comments</h2>
            <hr/>
            <Comments comments={comments}/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export { CommentsPage };