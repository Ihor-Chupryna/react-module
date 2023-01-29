import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { postService } from "../../services";

const PostByComment = () => {
    const { postId } = useParams();
    const navigate = useNavigate();

    const [post, setPost] = useState(null);

    useEffect(() => {
        postService.postByComment(postId).then(({ data }) => setPost({ ...data }))

    }, [postId])

    return (
        <div style={{marginLeft:'10px'}}>
            <h3 style={{ margin: '0' }}>Post:</h3>
            {post && <div>
                <div>title: {post.title}</div>
                <div>body: {post.body}</div>
                <button onClick={()=> navigate('/comments')}>Close</button>
            </div>}

        </div>
    );
};

export { PostByComment };