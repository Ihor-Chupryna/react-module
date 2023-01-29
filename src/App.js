import { Route, Routes } from "react-router-dom";

import { AlbumsPage, CommentsPage, HomePage, TodosPage } from "./pages";
import { Comments, PostByComment } from "./components";
import { MainLayout } from "./layouts/MainLayout";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'Albums'} element={<AlbumsPage/>}/>
                    <Route path={'Comments'} element={<CommentsPage/>}>
                        <Route path={':postId'} element={<PostByComment/>}/>
                    </Route>
                    <Route path={'Todos'} element={<TodosPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export { App };