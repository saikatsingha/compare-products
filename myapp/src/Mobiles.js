import React,{Component} from "react";
import {Table} from "react-bootstrap";
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";

export class Mobiles extends Component{

    constructor(props){
        super(props);
        this.state={mobs:[]}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'mobiles').then(response=>response.json()).then(data=>{
            this.setState({mobs:data})
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
                            <th>ID</th>
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
                            <tr key={mob.MobilesID}>
                                <td>{mob.MobilesID}</td>
                                <td>{mob.company_name}</td>
                                <td>{mob.price}</td>

                            </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}