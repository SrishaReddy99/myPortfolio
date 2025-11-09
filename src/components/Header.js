import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="site-header flex-container">
            <nav className="nav">
                <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>About</NavLink>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Contact</NavLink>
            </nav>
        </header>
    );
};

export default Header;