import React,{Component} from "react";
import {Table} from "react-bootstrap";
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";

export class Mobiles extends Component{

    constructor(props){
        super(props);
        this.state={mobs:[]}
    }

    refreshList(){
        fetch('http://127.0.0.1:8000/mobiles')
        .then(response=>response.json())
        .then(data=>{this.setState({mobs:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }
    
    render(){
        const {mobs}=this.state;
        return(
            <div>
                <Table className="mt-4" striped bordered hover size='sm'>
                    <thead>
                        <tr>
                            <th>company_name</th>
                            <th>price</th>
                            <th>ram</th>
                            <th>internal_storage</th>
                            <th>expandable</th>
                            <th>display</th>
                            <th>camera</th>
                            <th>battery</th>
                            <th>processor</th>
                            <th>link</th>
                            <th>warranty</th>
                            <th>star</th>
                            <th>rating_review</th>
                            <th>in_the_box</th>

                                      
                        </tr>
                    </thead>
                    <tbody>
                        {mobs.map(mob=>
                            <tr key={mob.ID}>
                                <td>{mob.company_name}</td>
                                <td>{mob.price}</td>
                                <td>{mob.ram}</td>
                                <td>{mob.internal_storage}</td>
                                <td>{mob.expandable}</td>
                                <td>{mob.display}</td>
                                <td>{mob.camera}</td>
                                <td>{mob.battery}</td>
                                <td>{mob.processor}</td>
                                <td>{mob.link}</td>
                                <td>{mob.warranty}</td>
                                <td>{mob.star}</td>
                                <td>{mob.rating_review}</td>
                                <td>{mob.in_the_box}</td>
                            </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}