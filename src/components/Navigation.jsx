import { NavLink, useLocation } from "react-router-dom";
import Styles from './Navigation.module.css';

const Navigation = () => {

    return (
        <header className={Styles.Header}>
            <nav className={Styles.Navbar}>
                <NavigationItem title="Home" to="/" />
                <NavigationItem title="Movies" to="/movies" />
            </nav>
        </header>
    )
};


const NavigationItem = ({ title, to }) => {
    const { pathname } = useLocation();

    return (
        <NavLink
            to={to}
            className={
                (pathname === to
                    ?
                    `${Styles.Link} ${Styles.Active}`
                    :
                    `${Styles.Link}`
                )
            }>
            {title}
        </NavLink>
    )
}

export default Navigation;