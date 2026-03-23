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
                        Главная
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? 'site-header__link active' : 'site-header__link'
                        }
                    >
                        О нас
                    </NavLink>

                    <NavLink
                        to="/services"
                        className={({ isActive }) =>
                            isActive ? 'site-header__link active' : 'site-header__link'
                        }
                    >
                        Услуги
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? 'site-header__link active' : 'site-header__link'
                        }
                    >
                        Контакты
                    </NavLink>

                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            isActive ? 'site-header__link active' : 'site-header__link'
                        }
                    >
                        Вход
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;