import React, { Component } from 'react';
import './carousel.css';

class Carousal extends Component{


    render(){
        return(
            <div className='container textCenter' style={{paddingTop : "5%"}}>
                <div className='row'>
                    <div className='col-sm-8 textCenter'> 
                        <div style={{paddingTop : "30%"}}>
                            <h1 className='textCenter'>Meet our satisfied CUSTOMERS</h1>

                            <h4 style={{paddingTop : "7%"}} className='textCenter'>We have been delivering quality Forcks at the most afordable cost that are not just beautiful from the outside but comfortable from inside too.</h4>
                        </div>
                         
                    </div>

                    <div className='col-sm-4 onMobileCarousel' style={{width : "50%"}}>
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={require('./Images/pic1.jpeg')} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                            <img src={require('./Images/pic2.jpeg')} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                            <img src={require('./Images/pic3.jpeg')} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Carousal;