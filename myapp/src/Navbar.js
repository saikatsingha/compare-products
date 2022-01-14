import React, {Component} from "react";
import {NavLink, Link} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";

const navbar = () => (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <div class="container">
                <a class="navbar-brand" href="#"><img src="assets/images/header-logo.png" alt=""/></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                    <Link class="nav-link" to="/">Home
                        {/* <span class="sr-only">(current)</span> */}
                    </Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/Mobiles">Mobiles</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>

);

export default navbar;