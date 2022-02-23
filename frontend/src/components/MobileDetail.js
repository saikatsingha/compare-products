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
        
            <div classNameName='container mt-3'>
                {console.log(mobile.company_name)}
                {/* <h1 classNameName='display-2'>{mobile.title}</h1>
                <h4>{mobile.month} {mobile.day}</h4>
                <hr />
                <p classNameName='lead mb-5'><Link to='/mobile' classNameName='font-weight-bold'>Back to mobiles</Link></p> */}
            </div>
    );
    
  };

export default MobileDetail;
