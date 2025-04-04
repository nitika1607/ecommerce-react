import "../App.css";
import "../styles/header.css";
import Logo from "../assets/logo-retina.png";

const Header = () => {
    return (

            <div className="navbar-container">
                <div className="container d-flex align-items-center justify-content-between">
                    {/* Left Section: Search, Login, Cart */}
                    <nav className="navbar navbar-expand-lg">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">BUY T-SHIRT</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">WOMEN</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">MEN</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">ABOUT</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">CONTACT</a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    {/* Center Section: Logo */}
                    <a className="navbar-brand mx-auto" href="#">
                        <img src={Logo} alt="Logo" className="logo-image" />
                    </a>

                    {/* Right Section: Navigation Menu */}
                    <div className="d-flex align-items-center gap-3">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search..." />
                            <button className="btn btn-outline-secondary" type="button">
                                <i className="bi bi-search"></i>
                            </button>
                        </div>
                        <button className="btn btn-outline-dark">
                            <i className="bi bi-person"></i>
                        </button>
                        <button className="btn btn-outline-dark position-relative">
                            <i className="bi bi-cart"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                3
                            </span>
                        </button>
                    </div>
                </div>
            </div>

    );
};

export default Header;
