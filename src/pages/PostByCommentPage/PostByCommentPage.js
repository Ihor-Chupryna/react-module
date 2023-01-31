import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { postsRequest } from "../../api/request/postsRequaest";

const PostByCommentPage = () => {
    const { postId } = useParams();
    const navigate = useNavigate();

    const [post, setPost] = useState(null);
    useEffect(() => {
        if (postId) {
            postsRequest.getById(postId).then(({ data }) => setPost({ ...data }))
        }
    }, [postId])

    if (!post) return null
    return (
        <div style={{ width: '100%', margin: '0 auto' }}>
            <div>PostId: {postId}</div>
            <div>Title: {post.title}</div>
            <div>Body: {post.body}</div>
            <button onClick={() => navigate()}>Back</button>
        </div>
    );
};

export { PostByCommentPage };