import { Navigate, Route, Routes } from "react-router-dom";

import { AuthRequireLayout, MainLayout } from "./Layouts";
import { CarPage, LoginPage, RegisterPage } from "./pages";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'cars'}/>}/>

                <Route element={<AuthRequireLayout/>}>
                    <Route path={'cars'} element={<CarPage/>}/>
                </Route>

                <Route path={'login'} element={<LoginPage/>}/>
                <Route path={'register'} element={<RegisterPage/>}/>
            </Route>
        </Routes>
    );
};

export { App };