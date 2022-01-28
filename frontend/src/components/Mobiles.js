import React,{Component} from "react";

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
        // {console.log(mobs);}
        return(
            
            <div>
               <div className="featured container no-gutter">
                  <div className="row posts">
                      {mobs.map(mob=>
                      <div id="1" className="item new col-md-4">
                        <a href="single-product.html">
                          <div className="featured-item">
                            <img src='assets/mobile_image/+{mob.image_name)' alt="" />
                            <h4>{mob.company_name}</h4>
                            <h6>Rs{mob.price}</h6>
                          </div>
                        </a>
                      </div>
                      )}
                  </div>
              </div>
            </div>
        )
    }
}