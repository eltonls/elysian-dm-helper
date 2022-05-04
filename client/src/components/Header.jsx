import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav__menu">
                    <li className="nav__item"><a className="nav__link" href="#">Home</a></li>
                    <li className="nav__item"><a className="nav__link" href="#">Config</a></li>
                    <li className="nav__item"><a className="nav__link" href="#">About</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
