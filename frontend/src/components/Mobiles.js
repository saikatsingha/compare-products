import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container } from "reactstrap";
import { Outlet } from "react-router-dom";
import MobileDetail from "./MobileDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";



const Mobiles = () => {

    const [mobiles, setMobiles] = useState([]);

    //let{path, url} = useRouteMatch()


    useEffect(() => {
        const fetchMobiles = async () => {
            try {
                const res = await axios.get(`http://127.0.0.1:8000/mobiles`);
                setMobiles(res.data);
            }
            catch (err) {

            }
        }

        fetchMobiles();
    }, []);

    const capitalizeFirstLetter = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        return '';
    };

    const getMobiles = () => {
        let list = [];
        let result = [];
        
        mobiles.map(mobilesPost => {
          
            return list.push(
                
                <a href={`/mobiles/${mobilesPost.id}`}>
                            <div class="img-box">
                                <img src={`mobile_image/${mobilesPost.photo}`} alt="" />
                            </div>
                            <div class="detail-box">
                                <h6>
                                {mobilesPost.company_name.split(" ")[0]}
                                </h6>
                                <h6>
                                    Price:
                                    <span>
                                    {mobilesPost.price}.00
                                    </span>
                                </h6>
                               
                            </div>
                            <h6>
                                {mobilesPost.company_name}
                            </h6>                            
                        </a>
            );
        });

        for (let i = 0; i < list.length; i += 2) {
            result.push(
                
                <div class="col-sm-6 col-xl-3">
                    <div class="box">
                        {list[i]}
                    </div>
                    <div class="box">
                        {list[i+1] ? list[i+1] : null}
                    </div>
                </div>
            )
        }
        return result;
    };

    return (
        <section class="shop_section layout_padding">
            <div class="container">
                <div class="heading_container heading_center">
                    <h2>
                        Latest Watches
                    </h2>
                </div>
                <div class="row">
                    {getMobiles()}

                </div>
            </div>
        </section>
    );
};

export default Mobiles;