import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <h1 className="heading-primary">Elysian</h1>
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
