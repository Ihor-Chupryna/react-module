const Post = ({post}) => {
    const {id, title, body} = post;

    return (
        <div>
            <h2>postId: {id}</h2>
            <p>title: {title} </p>
            <p>body: {body}</p>
        </div>
    );
};

export {Post};