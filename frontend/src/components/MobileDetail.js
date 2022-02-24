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
        
            // <div className='container mt-3'>
            //     {console.log(mobile.company_name)}
                
            // </div>
            <>
            <section class="about_section layout_padding">
    <div class="container  ">
      <div class="row">
        <div class="col-md-6 col-lg-5 ">
          <div class="img-box">
            <img src={process.env.PUBLIC_URL + `/mobile_image/${mobile.photo}`} alt="" />
          </div>
        </div>
        <div class="col-md-6 col-lg-7">
          <div class="detail-box">
            <div class="heading_container">
              <h2>
              {mobile.company_name.split(" ")[0]}
              </h2>
            </div>
            <p>
            {mobile.company_name}
            </p>
            <a href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
            </>
    );
    
  };

export default MobileDetail;
