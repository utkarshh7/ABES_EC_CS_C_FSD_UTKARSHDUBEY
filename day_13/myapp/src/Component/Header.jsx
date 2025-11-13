import {Link} from 'react-router-dom'
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="nav-container">
                <div className="logo">
                    <img src="/logo.svg" alt="logo" />
                    <span className="brand">MyShop</span>
                </div>
                <nav className="nav-items">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/products">Products</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header