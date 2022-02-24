import React,{Component} from "react";

import { Link } from 'react-router-dom';

const Home = () => (

<>
    <section className="slider_section ">
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container-fluid ">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1>
                      Smart Watches
                    </h1>
                    <p>
                      Aenean scelerisque felis ut orci condimentum laoreet. Integer nisi nisl, convallis et augue sit amet, lobortis semper quam.
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn1">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="images/slider-img.png" alt="" /> 
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="container-fluid ">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1>
                      Smart Watches
                    </h1>
                    <p>
                      Aenean scelerisque felis ut orci condimentum laoreet. Integer nisi nisl, convallis et augue sit amet, lobortis semper quam.
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn1">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="images/slider-img.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="container-fluid ">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1>
                      Smart Watches
                    </h1>
                    <p>
                      Aenean scelerisque felis ut orci condimentum laoreet. Integer nisi nisl, convallis et augue sit amet, lobortis semper quam.
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn1">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="images/slider-img.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ol className="carousel-indicators">
          <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
          <li data-target="#customCarousel1" data-slide-to="1"></li>
          <li data-target="#customCarousel1" data-slide-to="2"></li>
        </ol>
      </div>

    </section>

    <section className="feature_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          Features Of Our Watches
        </h2>
        <p>
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-3">
          <div className="box">
            <div className="img-box">
              <img src="images/f1.png" alt="" />
            </div>
            <div className="detail-box">
              <h5>
                Mobiles
              </h5>
              <p>
                List of Mobiles from different websites like Amazon, Flipkart
              </p>
              <a href="/mobiles">
                <span>
                  Read More
                </span>
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="box">
            <div className="img-box">
              <img src="images/f2.png" alt="" />
            </div>
            <div className="detail-box">
              <h5>
                Alerts & Notifications
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </p>
              <a href="">
                <span>
                  Read More
                </span>
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="box">
            <div className="img-box">
              <img src="images/f3.png" alt="" />
            </div>
            <div className="detail-box">
              <h5>
                Messages
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </p>
              <a href="">
                <span>
                  Read More
                </span>
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="box">
            <div className="img-box">
              <img src="images/f4.png" alt="" />
            </div>
            <div className="detail-box">
              <h5>
                Bluetooth
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </p>
              <a href="">
                <span>
                  Read More
                </span>
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-box">
        <a href="">
          View More
        </a>
      </div>
    </div>
  </section>

</>





  
            
);

export default Home;


//https://getbootstrap.com/docs/4.1/components/carousel/
