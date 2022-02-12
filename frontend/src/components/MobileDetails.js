import React, { useState, useEffect, Component } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

export class MobileDetails extends React.Component{

    // constructor(props){
    //     super(props);
    //     this.state={mobs:[]}
    // }
    
    // refreshList(){

    //     let queryParams = new URLSearchParams(window.location.search);
    //     // let {id} = this.props.match.params;
    //     // console.log(id);
    //     fetch('http://127.0.0.1:8000/mobiles/4')
    //     .then(response=>response.json())
    //     .then(data=>{this.setState({mobs:data});    
    //     });
    // }
    // componentDidMount(){        
    //     this.refreshList();    
    // }
    
    render() {
        let id = this.props.match.params.id;
        {console.log(id);}
        return <div />
      }
// render(){
    //     const {mobs}=this.state;
    //     // {console.log(mobs);}
    //     // {console.log(id);}
    //     // const { id } = this.props.match.params;
    //     let someVar = this.props.location.pathname.split('/').pop()
    //     console.log('router val ', someVar);
    //     // return (
    //     //     <div className='container mt-3'>
                
    //     //     </div>
    //     // );
        
    //     }
}