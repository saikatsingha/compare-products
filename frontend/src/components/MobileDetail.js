import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const MobileDetail = (props) => {
    const [mobile, setMobile] = useState({});

    useEffect(() => {
        const slug = props.match.params.id;

        const fetchData = async () => {
            try {
                const res = await axios.get(`http://127.0.0.1:8000/mobiles/1`);
                setMobile(res.data);
                {console.log(res)}
            }
            catch (err) {

            }
        };

        fetchData();
    }, [props.match.params.id]);

    return (
        <div className='container mt-3'>
            <h1 className='display-2'>{mobile.title}</h1>
            <h4>{mobile.month} {mobile.day}</h4>
            <hr />
            <p className='lead mb-5'><Link to='/mobile' className='font-weight-bold'>Back to mobiles</Link></p>
        </div>
    );
    
};

export default MobileDetail;