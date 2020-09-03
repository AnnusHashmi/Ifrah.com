import React, { Component } from 'react';
import './aboutUs.css'
import P1 from './Assets/baby-clothes.png'
import P2 from './Assets/medal.png';
import P3 from './Assets/customer-satisfaction.png'

const AboutUs = () => {
    return(
        <div>
            <div className='container aboutUs'>
                <h1 className="display-4">About Our Brand</h1>

                <p style={{fontSize : 22}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                <div className="card-group">
                    <div className="card">
                        <img src={P1} className="card-img-top" className='img-width' alt="..." />
                        <div className="card-body">
                        <h3 className="card-title">Great range of products</h3>
                        </div>
                    </div>
                    <div className="card">
                        <img src={P2} className="card-img-top" className='img-width' alt="..." />
                        <div className="card-body">
                        <h3 className="card-title">Quality Assurance</h3>
                        </div>
                    </div>
                    <div className="card">
                        <img src={P3} className="card-img-top" className='img-width' alt="..." />
                        <div className="card-body">
                        <h3 className="card-title">Welcoming feedback</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;