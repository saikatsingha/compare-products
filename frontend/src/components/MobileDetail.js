import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const MobileDetail = (props) => {
        let params = useParams();        
        const [mobile, setMobile] = useState({});
        useEffect(() => {      
                const fetchData = async () => {
                    try {
                        const res = await axios.get(`http://127.0.0.1:8000/mobiles/${params.id}`);
                        setMobile(res.data);
                    }
                    catch (err) {        
                    }
                };
        
                fetchData();

            }, []);
    
    return(
            <>
            <section class="about_section layout_padding">
              <div class="container  ">
                <div class="row">
                  <div class="col-md-6 col-lg-5 ">
                    <div class="img-box1">
                      <img src={process.env.PUBLIC_URL + `/mobile_image/${mobile.photo}`} alt=""/>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-7">
                    <div class="detail-box">
                      <div class="heading_container">
                        <h2>
                        <b>{mobile.company_name}</b>
                        </h2>
                      </div>
                      <p>Price: Rs <b>{mobile.price}.00 </b></p>
                      <p>RAM: <b>{mobile.ram} GB </b></p>
                      <p>Internal Storage: <b>{mobile.internal_storage} GB</b></p>
                      <p>Expandable up to : <b>{mobile.expandable} GB</b></p>
                      <p>Display Size: <b>{mobile.display} </b></p>
                      <p>Camera: <b>{mobile.camera} </b></p>
                      <p>Battery Capacity: <b>{mobile.battery} Mah </b></p>
                      <p>Processor: <b>{mobile.processor} </b></p>
                      <p><b>{mobile.link} </b></p>
                      <p>Warranty: <b>{mobile.warranty} </b></p>
                      <p>Star :<b>{mobile.star} </b></p>
                      <p>Rating and Reviews: <b>{mobile.rating_review} </b></p>
                      <p>In the box you will find: <b>{mobile.in_the_box} </b></p>
                      <p>Warranty: <b>{mobile.warranty} </b>  </p>
                      
                      Flipkart link to <a href={mobile.link}> Buy </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            </>
    );
    
  };

export default MobileDetail;
