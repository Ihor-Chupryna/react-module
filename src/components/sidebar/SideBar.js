import { NavLink } from "react-router-dom";

import "./SideBarStyle.css";

const SideBar = () => {
    return (
        <div className={'side-bar'}>
            <NavLink to={''}>Home</NavLink>
            <NavLink to={'albums'}>Albums</NavLink>
            <NavLink to={'todos'}>Todos</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
        </div>
    );
};

export { SideBar };