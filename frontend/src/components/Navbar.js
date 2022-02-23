import React, { Component } from "react";
import { Link, NavLink } from 'react-router-dom';

const navbar = () => (

<header class="header_section">
<div class="container-fluid">
  <nav class="navbar navbar-expand-lg custom_nav-container ">
    <a class="navbar-brand" href="index.html">
      <span>
        Timups
      </span>
    </a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class=""> </span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/mobiles"> Mobiles </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/televisions"> Televisions </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact.html">Contact Us</a>
        </li>
      </ul>
      <div class="user_option-box">
        <a href="">
          <i class="fa fa-user" aria-hidden="true"></i>
        </a>
        <a href="">
          <i class="fa fa-cart-plus" aria-hidden="true"></i>
        </a>
        <a href="">
          <i class="fa fa-search" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </nav>
</div>
</header>

);

  
export default navbar;
