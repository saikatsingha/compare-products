import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";

export class Navigation extends Component{
    render(){
        return(
            // <Navbar bg="dark" expand="lg">
            //     <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            //     <Navbar.Collapse id="basic-navbar-nav" >
            //         <Nav>
            //         <NavLink className="d-inline p-2 bg-dark text-white" to="/">
            //                 Home
            //             </NavLink>
            //             <NavLink className="d-inline p-2 bg-dark text-white" to="/Mobiles">
            //                 Mobiles
            //             </NavLink>

            //         </Nav>
            //     </Navbar.Collapse>
                
            // </Navbar>

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <div class="container">
                <a class="navbar-brand" href="#"><img src="assets/images/header-logo.png" alt=""/></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                    <a class="nav-link" href="/">Home
                        {/* <span class="sr-only">(current)</span> */}
                    </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/Mobiles">Mobiles</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="about.html">About Us</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="contact.html">Contact Us</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        )
    }
}