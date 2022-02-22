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
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    
                    <div className="col p-4 d-flex flex-column position-static">
                        <div className="d-inline-block mb-2 text-primary">{mobilesPost.company_name}</div>
                        <h3 className="mb-0">{mobilesPost.company_name.split(" ")[0]}</h3>
                        <img src={`mobile_image/${mobilesPost.photo}`} width="40" height="70" alt="" />
                        <div className="mb-1 text-muted">{mobilesPost.month} {mobilesPost.day}</div>
                        <p className="card-text mb-auto">{mobilesPost.excerpt}</p>
                        <Link to={`/mobiles/${mobilesPost.id}`} className="stretched-link">Continue reading</Link>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                    </div>
                </div>
            );
        });

        for (let i = 0; i < list.length; i += 2) {
            result.push(
                <div key={i} className='row mb-2'>
                    <div className='col-md-6'>
                        {list[i]}
                    </div>
                    <div className='col-md-6'>
                        {list[i+1] ? list[i+1] : null}
                    </div>
                </div>
            )
        }

        return result;
    };

    return (
        <div className='container mt-3'>
  
            {getMobiles()}
        </div>
    );
};

export default Mobiles;

