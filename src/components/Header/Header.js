import { NavLink } from "react-router-dom";

import style from './Header.module.css';

const Header = () => {
    return (
        <div className={style.header}>
            <NavLink to={'Albums'}>Albums</NavLink>
            <NavLink to={'Comments'}>Comments</NavLink>
            <NavLink to={'Todos'}>Todos</NavLink>
        </div>
    );
};

export { Header };