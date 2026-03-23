import { Link, NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="site-header">
            <div className="site-header__inner">
                <Link to="/" className="site-header__logo">
                    Insurance Agent
                </Link>

                <nav className="site-header__nav">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? 'site-header__link active' : 'site-header__link'
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? 'site-header__link active' : 'site-header__link'
                        }
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/services"
                        className={({ isActive }) =>
                            isActive ? 'site-header__link active' : 'site-header__link'
                        }
                    >
                        Services
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? 'site-header__link active' : 'site-header__link'
                        }
                    >
                        Contact
                    </NavLink>

                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            isActive ? 'site-header__link active' : 'site-header__link'
                        }
                    >
                        Login
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;