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
              <section id="portfolio" class="portfolio">
                <div class="container">
                    <div class="section-title">
                        <h2>Mobiles</h2>
                    </div>
                    <div class="row portfolio-container">

                        {mobs.map(mob=>

                        <div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
                            <div class="portfolio-wrap">
                            <figure>
                                <img src={`mobile_image/${mob.photo}`} class="img-fluid" alt=""/>
                            </figure>
                            <div class="portfolio-info">
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