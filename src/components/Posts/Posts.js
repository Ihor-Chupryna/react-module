import {useEffect, useState} from "react";

import {postsService} from "../../services";
import {Post} from "../Post/Post";

const Posts = ({userId}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postsService.getByUserId(userId).then(value => value.data).then(value => setPosts([...value]))
    }, [userId])

    return (
        <div>
            {posts && posts.map(value => <Post key={value.id} post={value}/>)}
        </div>
    );
};

export {Posts};