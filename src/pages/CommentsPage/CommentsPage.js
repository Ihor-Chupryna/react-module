import { Outlet } from "react-router-dom";

import { Comments } from "../../components";

const CommentsPage = () => {

    return (
        <div>
            <h2 style={{ margin: '10px', textAlign: 'center' }}>Comments</h2>
            <Comments/>
            <hr/>
            <Outlet/>
        </div>
    );
};


export { CommentsPage };