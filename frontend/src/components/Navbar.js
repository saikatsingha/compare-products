import React, { Component } from "react";
import { Link, NavLink } from 'react-router-dom';

const navbar = () => (

<header className="header_section">
<div className="container-fluid">
  <nav className="navbar navbar-expand-lg custom_nav-container ">
    <a className="navbar-brand" href="/">
      <span>
      Crawled Products
      </span>
    </a>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className=""> </span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/mobiles"> Mobiles </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/televisions"> Televisions </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="contact.html">Contact Us</a>
        </li>
      </ul>
      <div className="user_option-box">
        <a href="">
          <i className="fa fa-user" aria-hidden="true"></i>
        </a>
        <a href="">
          <i className="fa fa-cart-plus" aria-hidden="true"></i>
        </a>
        <a href="">
          <i className="fa fa-search" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </nav>
</div>
</header>

);

  
export default navbar;
