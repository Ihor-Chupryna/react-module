import css from './Header.module.css';
import { NavLink } from "react-router-dom";

const Header = () => {

    return (
        <div className={css.header}>
         <NavLink to={'/register'}>Register</NavLink>
         <NavLink to={'/login'}>Login</NavLink>
        </div>
    );
};

export { Header };