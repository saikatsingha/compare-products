import React,{Component} from "react";
// import Axios from 'axios';

export class MobileDetail extends Component{
    
    constructor(props){
        super(props);
        this.state={ mobs: [] }
    }
    
    refreshList(){
        fetch('http://127.0.0.1:8000/mobiles/4')
        .then(response=>response.json())
        .then(data=>{this.setState({ mobs: data });        
        });
    }
    componentDidMount(){
        this.refreshList();
    }    
    render(){
        const {mobs}=this.state;
        {console.log(mobs);}
        return(
            
            <div>
              <section id="portfolio" className="portfolio">
                <div className="container">
                    <div className="section-title">
                        <h2>Mobiles</h2>
                    </div>
                    <div className="row portfolio-container">

                        {mobs.map(mob=>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
                            <div className="portfolio-wrap">
                            <figure>
                                <img src={`assets/mobile_image/${mob.photo}`} className="img-fluid" alt=""/>
                            </figure>
                            <div className="portfolio-info">
                                <h4><a href={`/mobile/${mob.id}`}>{mob.company_name.split(' ')[0]}</a></h4>
                                <p>{mob.company_name}</p>
                            </div>
                            </div>
                        </div>

                        )}
                        
                    </div>                    
                </div>
                </section>
            </div>
        )
    }
}