import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { NavLink } from "react-router-dom";

const Navbar = () =>(
    <>
        <div className=" container-fluid">
            <div className=" row ">
                <div className=" col-lg-10 mx-auto ">
                    <nav className="navbar navbar-expand-lg bg-body">
                        <div className="container-fluid">
                            <NavLink exact activeClassName="nav" className="navbar-brand text-primary fw-semibold" to="/">Greensoftech</NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                      <li className="nav-item">
                                        <NavLink exact activeClassName="nav" className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact activeClassName="nav" className="nav-link" to="/service">Services</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact  activeClassName="nav" className="nav-link" to="/about">About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                       <NavLink exact activeClassName="nav" className="nav-link" to="/contact">Contact</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </>
)

export default Navbar;