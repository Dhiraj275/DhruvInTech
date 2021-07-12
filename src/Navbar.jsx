import React from 'react';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <div className="container-fluid bg-light">
                <div className="row">
                    <div className="col-lg-10 col-12 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand text-bold" to="/">Hira Pvt. Ltd.</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto mr-0 mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink exact activeClassName="active-link" className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName="active-link" className="nav-link" to="/services">Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName="active-link" className="nav-link" to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName="active-link" className="nav-link" to="/contact">Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>

                    </div>
                </div>
            </div>
        </>
    );
};
export default Navbar;