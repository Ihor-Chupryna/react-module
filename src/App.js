import { Route, Routes } from "react-router-dom";

import './AppStyle.css';
import { routerEndpoints } from "./routes/routes";
import { MainLayouts } from "./layouts/MainLayouts/MainLayouts";
import { HomePage } from "./pages/HomePage/HomePage";
import { AlbumsPage } from "./pages/AlbumsPage/AlbumsPage";
import { CommentsPage } from "./pages/CommentsPage/CommentsPage";
import { TodosPage } from "./pages/TodosPage/TodosPage";
import { PostByCommentPage } from "./pages/PostByCommentPage/PostByCommentPage";

const App = () => {
    return (
        <div className={'App'}>
            <Routes>
                <Route path={routerEndpoints.index} element={<MainLayouts/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={routerEndpoints.albums} element={<AlbumsPage/>}/>
                    <Route path={routerEndpoints.comments} element={<CommentsPage/>}>
                        <Route path={routerEndpoints.postId} element={<PostByCommentPage/>}/>
                    </Route>
                    <Route path={routerEndpoints.todos} element={<TodosPage/>}/>

                </Route>

            </Routes>
        </div>
    );
};

export { App };