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


// <section class="shop_section layout_padding">
//   <div class="container">
//     <div class="heading_container heading_center">
//       <h2>
//         Latest Watches
//       </h2>
//     </div>
//     <div class="row">
//       <div class="col-md-6 ">
//         <div class="box">
//           <a href="">
//             <div class="img-box">
//               <img src="images/w1.png" alt="" />
//             </div>
//             <div class="detail-box">
//               <h6>
//                 Smartwatch
//               </h6>
//               <h6>
//                 Price:
//                 <span>
//                   $300
//                 </span>
//               </h6>
//             </div>
//             <div class="new">
//               <span>
//                 Featured
//               </span>
//             </div>
//           </a>
//         </div>
//       </div>
//       <div class="col-sm-6 col-xl-3">
//         <div class="box">
//           <a href="">
//             <div class="img-box">
//               <img src="images/w2.png" alt="" />
//             </div>
//             <div class="detail-box">
//               <h6>
//                 Smartwatch
//               </h6>
//               <h6>
//                 Price:
//                 <span>
//                   $125
//                 </span>
//               </h6>
//             </div>
//             <div class="new">
//               <span>
//                 New
//               </span>
//             </div>
//           </a>
//         </div>
//       </div>
//       <div class="col-sm-6 col-xl-3">
//         <div class="box">
//           <a href="">
//             <div class="img-box">
//               <img src="images/w3.png" alt="" />
//             </div>
//             <div class="detail-box">
//               <h6>
//                 Smartwatch
//               </h6>
//               <h6>
//                 Price:
//                 <span>
//                   $110
//                 </span>
//               </h6>
//             </div>
//             <div class="new">
//               <span>
//                 New
//               </span>
//             </div>
//           </a>
//         </div>
//       </div>
//       <div class="col-sm-6 col-xl-3">
//         <div class="box">
//           <a href="">
//             <div class="img-box">
//               <img src="images/w4.png" alt="" />
//             </div>
//             <div class="detail-box">
//               <h6>
//                 Smartwatch
//               </h6>
//               <h6>
//                 Price:
//                 <span>
//                   $145
//                 </span>
//               </h6>
//             </div>
//             <div class="new">
//               <span>
//                 New
//               </span>
//             </div>
//           </a>
//         </div>
//       </div>
//       <div class="col-sm-6 col-xl-3">
//         <div class="box">
//           <a href="">
//             <div class="img-box">
//               <img src="images/w5.png" alt="" />
//             </div>
//             <div class="detail-box">
//               <h6>
//                 Smartwatch
//               </h6>
//               <h6>
//                 Price:
//                 <span>
//                   $195
//                 </span>
//               </h6>
//             </div>
//             <div class="new">
//               <span>
//                 New
//               </span>
//             </div>
//           </a>
//         </div>
//       </div>
//       <div class="col-sm-6  col-xl-3">
//         <div class="box">
//           <a href="">
//             <div class="img-box">
//               <img src="images/w6.png" alt="" />  
//             </div>
//             <div class="detail-box">
//               <h6>
//                 Smartwatch
//               </h6>
//               <h6>
//                 Price:
//                 <span>
//                   $170
//                 </span>
//               </h6>
//             </div>
//             <div class="new">
//               <span>
//                 New
//               </span>
//             </div>
//           </a>
//         </div>
//       </div>
//       <div class="col-sm-6 col-xl-3">
//         <div class="box">
//           <a href="">
//             <div class="img-box">
//               <img src="images/w1.png" alt="" />
//             </div>
//             <div class="detail-box">
//               <h6>
//                 Smartwatch
//               </h6>
//               <h6>
//                 Price:
//                 <span>
//                   $230
//                 </span>
//               </h6>
//             </div>
//             <div class="new">
//               <span>
//                 New
//               </span>
//             </div>
//           </a>
//         </div>
//       </div>
//     </div>
//     <div class="btn-box">
//       <a href="">
//         View All
//       </a>
//     </div>
//   </div>
// </section>
