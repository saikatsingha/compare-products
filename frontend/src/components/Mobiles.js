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
               {/* <div className="featured container no-gutter">
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
              </div> */}
              <section id="portfolio" class="portfolio">
                <div class="container">

                    <div class="section-title">
                    <h2>Mobiles</h2>
                    <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit</p>
                    </div>

                    <div class="row">
                    <div class="col-lg-12">
                        <ul id="portfolio-flters">
                        <li data-filter="*" class="filter-active">All</li>
                        <li data-filter=".filter-app">App</li>
                        <li data-filter=".filter-card">Card</li>
                        <li data-filter=".filter-web">Web</li>
                        </ul>
                    </div>
                    </div>

                    <div class="row portfolio-container">

                    {mobs.map(mob=>

                    <div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
                        <div class="portfolio-wrap">
                        <figure>
                            
                                {/* <img src={`${image_path}${mob.photo}`} class="img-fluid" alt=""/> */}
                                
                                <img src={`assets/mobile_image/${mob.photo}`} class="img-fluid" alt=""/>
                            {/* <p><a href="portfolio-details.html">{mob.company_name }</a></p>
                            <p><a href="portfolio-details.html">{mob.company_name.split(' ')[0]}</a></p>
                            Price: Rs {mob.price }
                            RAM: {mob.ram} GB
                            Internal Storage: {mob.internal_storage} GB */}
                            

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