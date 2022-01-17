import React,{Component} from "react";


export class MobilesDetails extends Component{

    constructor(props){
        super(props);
        this.state={mobs:[]}
    }

    refreshList(){
        fetch('http://127.0.0.1:8000/mobiles/${id}')
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
                              {console.log(mobs)}

                <div class="single-product">
                <div class="container">
                    <div class="row">
                    <div class="col-md-12">
                        <div class="section-heading">
                        <div class="line-dec"></div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <img src='../assets/images/big-01.jpg' />
                    </div>
                    <div class="col-md-6">
                        <div class="right-content">
                        <h4>Single Product Name</h4>
                        <h6>$55.00</h6>
                        <p>Proin commodo, diam a ultricies sagittis, erat odio rhoncus metus, eu feugiat lorem lacus aliquet arcu. Curabitur in gravida nisi, non placerat nibh. Praesent sit amet diam ultrices, commodo turpis id, dignissim leo. Suspendisse mauris massa, porttitor non fermentum vel, ullamcorper scelerisque velit. </p>
                        <span>7 left on stock</span>
                        {/* <form action="" method="get">
                            <label for="quantity">Quantity:</label>
                            <input name="quantity" type="quantity" class="quantity-text" id="quantity" 
                                onfocus="if(this.value == '1') { this.value = ''; }" 
                                onBlur="if(this.value == '') { this.value = '1';}"
                                value="1">
                            <input type="submit" class="button" value="Order Now!">
                        </form> */}
                        <div class="down-content">
                            <div class="categories">
                            <h6>Category: <span><a href="#">Pants</a>,<a href="#">Women</a>,<a href="#">Lifestyle</a></span></h6>
                            </div>
                            <div class="share">
                            <h6>Share: <span><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-linkedin"></i></a><a href="#"><i class="fa fa-twitter"></i></a></span></h6>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                
                

           </div>
        )
    }
}