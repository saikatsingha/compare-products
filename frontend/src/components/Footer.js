import React, { Component } from "react";
import { Link, NavLink } from 'react-router-dom';

const footer = () => (

<footer className="footer_section">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3 footer-col">
          <div className="footer_detail">
            <h4>
              About
            </h4>
            <p>
              Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with
            </p>
            <div className="footer_social">
              <a href="">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 footer-col">
          <div className="footer_contact">
            <h4>
              Reach at..
            </h4>
            <div className="contact_link_box">
              <a href="">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <span>
                  Location
                </span>
              </a>
              <a href="">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <span>
                  Call +01 1234567890
                </span>
              </a>
              <a href="">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <span>
                  demo@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 footer-col">
          <div className="footer_contact">
            <h4>
              Subscribe
            </h4>
            <form action="#">
              <input type="text" placeholder="Enter email" />
              <button type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 footer-col">
          <div className="map_container">
            <div className="map">
              <div id="googleMap"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-info">
        <p>
          &copy; <span id="displayYear"></span> All Rights Reserved By
          <a href="https://html.design/">Free Html Templates</a>
        </p>
      </div>
    </div>
  </footer>

);

  
export default footer;
