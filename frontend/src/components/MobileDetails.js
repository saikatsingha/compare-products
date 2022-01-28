import React, { useState, useEffect, Component } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export class MobileDetails extends Component{

    constructor(props){
        super(props);
        this.state={mobs:[]}
    }
    
    refreshList(){

        fetch('http://127.0.0.1:8000/mobiles/1')
        .then(response=>response.json())
        .then(data=>{this.setState({mobs:data});    
        console.log(mobs);
        });
    }
    componentDidMount(){
        this.refreshList();
    
    }
    render(){
        // const {mobs}=this.state;

        return (
            <div className='container mt-3'>
                
                
            </div>
        );
        }

}


