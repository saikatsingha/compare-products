import React, {Component} from "react";
import {NavLink} from "react-router-dom";

const navigation = () => (

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <div className="container">
                <a className="navbar-brand" href="#"><img src="assets/images/header-logo.png" alt=""/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <a className="nav-link" href="/">Home
                        {/* <span className="sr-only">(current)</span> */}
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/Mobiles">Mobiles</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="about.html">About Us</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="contact.html">Contact Us</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        );
export default navigation;
    