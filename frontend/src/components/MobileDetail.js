import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const MobileDetail = (props) => {
    let params = useParams();
    //console.log(params);
    // const [mobile, setMobile] = useState({});

    
            const res = axios.get(`http://127.0.0.1:8000/mobiles/${params.id}`);
            
    
    return(
        
            <div classNameName='container mt-3'>
                {console.log(res.catch.)}
                {/* <h1 classNameName='display-2'>{mobile.title}</h1>
                <h4>{mobile.month} {mobile.day}</h4>
                <hr />
                <p classNameName='lead mb-5'><Link to='/mobile' classNameName='font-weight-bold'>Back to mobiles</Link></p> */}
            </div>
    );
    
  };

export default MobileDetail;
