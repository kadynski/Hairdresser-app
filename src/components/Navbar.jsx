import React from "react";

const Navbar =()=> {
    return (
        <div>
            <div>
            <h1>Zaklad Fryzjerski Bozena</h1>
            </div>
            <nav className="navbar  navbar-expand-lg navbar-light">
                <button type="button" className="btn btn-success" href="tel:+48602104565">Zadzwon <i className="fas fa-phone"></i>
                </button>
                <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto text-right">
                    <li className="nav-item">
                    <a className="nav-link" href="#contact">Kontakt</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#price-div">Cennik</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Galeria</a>
                    </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
};

export default Navbar;