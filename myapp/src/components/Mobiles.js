import React from 'react';
import { Link } from 'react-router-dom';

const mobiles = () => (
    <main id="main">

        <section id="portfolio" class="portfolio">
        <div class="container">

            <div class="section-title">
            <h2>Portfolio</h2>
            <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit</p>
            </div>

            <div class="row">
            <div class="col-lg-12">
                <ul id="portfolio-flters">
                <li data-filter="*" class="filter-active">All</li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web">Web</li>
                </ul>
            </div>
            </div>

            <div class="row portfolio-container">

            
            <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
                <div class="portfolio-wrap">
                <figure>
                    <img src="assets/img/portfolio/portfolio-2.jpg" class="img-fluid" alt=""/>
                    <a href="assets/img/portfolio/portfolio-2.jpg" class="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Preview"><i class="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" class="link-details" title="More Details"><i class="bx bx-link"></i></a>
                </figure>

                <div class="portfolio-info">
                    <h4><a href="portfolio-details.html">Web 3</a></h4>
                    <p>Web</p>
                </div>
                <div class="col-md-6">
                    <h4><a href="#">Lorem Ipsum</a></h4>
                    <p>Price: Rs 9999.00</p>
                </div>
                </div>
            </div>



            </div>

        </div>
        </section>
     </main>
);

export default mobiles;