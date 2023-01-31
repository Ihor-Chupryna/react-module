import { Outlet } from "react-router-dom";

import { SideBar } from "../../components/sidebar/SideBar";
import './MainLayoutsStyle.css';

const MainLayouts = () => {
    return (
        <div className={'main-container'}>
            <SideBar/>
            <Outlet/>
        </div>
    );
};

export { MainLayouts };