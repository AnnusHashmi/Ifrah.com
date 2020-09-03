import React from 'react';
import AboutUs from '../AboutUs/aboutUs'
import Directory from '../../components/directory/directory.component';
import Carousal from '../../components/carousal/carousal'

import './homepage.styles.scss';

const HomePage = () => {
  return(
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">IFRAH'S COLLECTIONS</h1>
          <p className="lead">PREMIMIUM COLLECTION OF FROKS FOR MOTHER AND HER DAUGHTER</p>
        </div>
      </div>
      <Directory />
      <Carousal />
      <AboutUs />
    </div>
    
  )
  };

export default HomePage;


