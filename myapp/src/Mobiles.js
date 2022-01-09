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
                {/* <Table className="mt-4" striped bordered hover size='sm'>
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
                </Table> */}

 

    {/* <!-- Page Content -->
    <!-- Items Starts Here --> */}
    <div class="featured-page">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-sm-12">
            <div class="section-heading">
              <div class="line-dec"></div>
              <h1>Featured Items</h1>
            </div>
          </div>
          <div class="col-md-8 col-sm-12">
            <div id="filters" class="button-group">
              <button class="btn btn-primary" data-filter="*">All Products</button>
              <button class="btn btn-primary" data-filter=".new">Newest</button>
              <button class="btn btn-primary" data-filter=".low">Low Price</button>
              <button class="btn btn-primary" data-filter=".high">Hight Price</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div class="featured container no-gutter">

        <div class="row posts">
            {mobs.map(mob=>
            <div id="1" class="item new col-md-2">
              <a href={`/Mobiles/${mob.id}`}>
                <div class="featured-item">
                  {/* <img src="assets/mobile_images/realme_Narzo_50A_(Oxygen_Blue_64_GB)_(4_GB_RAM).jpg"  alt="" /> */}
                  <img src={`assets/mobile_images/${mob.photo}`}  alt="" />
                  {/* <img src={`../img/${img.code}.jpg`}></img> */}
                  <h6>{mob.company_name}</h6>
                  <h6>Rs: {mob.price}</h6>
                  {/* <button class="btn btn-primary">DETAILS</button> */}

                </div>
                
              </a>
            </div>
            
            )}
            
            

            {/* <div id="2" class="item high col-md-4">
              <a href="single-product.html">
                <div class="featured-item">
                  <img src="assets/images/product-02.jpg" alt="" />
                  <h4>Erat odio rhoncus</h4>
                  <h6>$25.00</h6>
                </div>
              </a>
            </div>
            <div id="3" class="item low col-md-4">
              <a href="single-product.html">
                <div class="featured-item">
                  <img src="assets/images/product-03.jpg" alt="" />
                  <h4>Integer vel turpis</h4>
                  <h6>$35.00</h6>
                </div>
              </a>
            </div>
            <div id="4" class="item low col-md-4">
              <a href="single-product.html">
                <div class="featured-item">
                  <img src="assets/images/product-04.jpg" alt="" />
                  <h4>Sed purus quam</h4>
                  <h6>$45.00</h6>
                </div>
              </a>
            </div>
            <div id="5" class="item new high col-md-4">
              <a href="single-product.html">
                <div class="featured-item">
                  <img src="assets/images/product-05.jpg" alt="" />
                  <h4>Morbi aliquet</h4>
                  <h6>$55.00</h6>
                </div>
              </a>
            </div>
            <div id="6" class="item new col-md-4">
              <a href="single-product.html">
                <div class="featured-item">
                  <img src="assets/images/product-06.jpg" alt="" />
                  <h4>Urna ac diam</h4>
                  <h6>$65.00</h6>
                </div>
              </a>
            </div>
            <div id="7" class="item new high col-md-4">
              <a href="single-product.html">
                <div class="featured-item">
                  <img src="assets/images/product-03.jpg" alt="" />
                  <h4>Proin eget imperdiet</h4>
                  <h6>$75.00</h6>
                </div>
              </a>
            </div>
            <div id="8" class="item low new col-md-4">
              <a href="single-product.html">
                <div class="featured-item">
                  <img src="assets/images/product-02.jpg" alt="" />
                  <h4>Nullam risus nisl</h4>
                  <h6>$85.00</h6>
                </div>
              </a>
            </div>
            <div id="9" class="item new col-md-4">
              <a href="single-product.html">
                <div class="featured-item">
                  <img src="assets/images/product-01.jpg" alt="" />
                  <h4>Cras tempus</h4>
                  <h6>$95.00</h6>
                </div>
              </a>
            </div> */}
        </div>
    </div>

    <div class="page-navigation">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <ul>
              <li class="current-page"><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#"><i class="fa fa-angle-right"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Featred Page Ends Here -->


    <!-- Subscribe Form Starts Here --> */}
    <div class="subscribe-form">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-heading">
              <div class="line-dec"></div>
              <h1>Subscribe on PIXIE now!</h1>
            </div>
          </div>
          <div class="col-md-8 offset-md-2">
            <div class="main-content">
              <p>Godard four dollar toast prism, authentic heirloom raw denim messenger bag gochujang put a bird on it celiac readymade vice.</p>
              <div class="container">
                <form id="subscribe" action="" method="get">
                  <div class="row">
                    <div class="col-md-7">
                      <fieldset>
                        <input name="email" type="text" class="form-control" id="email" 
                        onfocus="if(this.value == 'Your Email...') { this.value = ''; }" 
                    	onBlur="if(this.value == '') { this.value = 'Your Email...';}"
                    	value="Your Email..." required="" />
                      </fieldset>
                    </div>
                    <div class="col-md-5">
                      <fieldset>
                        <button type="submit" id="form-submit" class="button">Subscribe Now!</button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Subscribe Form Ends Here --> */}


    
    {/* <!-- Footer Starts Here --> */}
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="logo">
              <img src="assets/images/header-logo.png" alt=""/>
            </div>
          </div>
          <div class="col-md-12">
            <div class="footer-menu">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">How It Works ?</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-12">
            <div class="social-icons">
              <ul>
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                <li><a href="#"><i class="fa fa-rss"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Footer Ends Here -->
 */}

    {/* <!-- Sub Footer Starts Here --> */}
    <div class="sub-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="copyright-text">
              <p>Copyright &copy; 2019 Company Name 
                
                - Design: <a rel="nofollow" href="https://www.facebook.com/tooplate">Tooplate</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Sub Footer Ends Here --> */}


    {/* <!-- Bootstrap core JavaScript --> */}
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>


    {/* <!-- Additional Scripts --> */}
    <script src="assets/js/custom.js"></script>
    <script src="assets/js/owl.js"></script>
    <script src="assets/js/isotope.js"></script>


    {/* {<script language = "text/Javascript"> 
      cleared[0] = cleared[1] = cleared[2] = 0; //set a cleared flag for each field
      function clearField(t){                   //declaring the array outside of the
      if(! cleared[t.id]){                      // function makes it static and global
          cleared[t.id] = 1;  // you could use true and false, but that's more typing
          t.value='';         // with more chance of typos
          t.style.color='#fff';
          }
      }
    </script> } */}


            </div>
        )
    }
}