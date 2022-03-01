import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container } from "reactstrap";
import { Outlet } from "react-router-dom";
import MobileDetail from "./MobileDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Pagination from "./Pagination";
import ReactPaginate from "react-paginate";



const Mobiles = () => {

    const [mobiles, setMobiles] = useState([]);

    // const [users, setUsers] = useState(JsonData.slice(0, 50));
    const [pageNumber, setPageNumber] = useState(0);

    const usersPerPage = 10;
    const pagesVisited = pageNumber * usersPerPage;

    const displayMobiles = mobiles
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map((Post) => {
        return (


            <div class="col-md-3 ">
            <div class="box">
                <a href={`/mobiles/${Post.id}`}>
                <div className="img-box">
                    <img src={`mobile_image/${Post.photo}`} alt="" />
                </div>
                <div className="detail-box">
                    <h6>
                    {Post.company_name.split(" ")[0]}
                    </h6>
                    <h6>
                        Price:
                        <span>
                        {Post.price}.00
                        </span>
                    </h6>
                
                </div>
                <h6>
                    {Post.company_name}
                </h6>                            
            </a>
        </div>
        </div>

       );
        });

    const pageCount = Math.ceil(mobiles.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };


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


    return (
        <>
        <section className="shop_section layout_padding">
             <div className="container">
                 <div className="heading_container heading_center">
                     <h2>
                         Latest Mobiles
                     </h2>
                 </div>
                 <div className="row">
                    {displayMobiles}
                </div> 
                <div className="d-flex justify-content-center">

                                <ReactPaginate
                                    previousLabel={"Previous"} nextLabel={"Next"} 
                                    pageCount={pageCount}
                                    onPageChange={changePage}
                                    containerClassName={"paginationBttn"}
                                    previousLinkClassName={"previousBttn"}
                                    nextLinkClassName={"nextBttn"}
                                    disabledClassName={"paginationDisabled"}
                                    activeClassName={"paginationActive"}
                                />
                            
                </div>
            </div> 
        </section>
          
        </>
      );
};

export default Mobiles;