import React from 'react';
import Aboutus from '../../../images/about us.jpg'
const AboutUs = () => {
    return (
        <div className='d-flex justify-content-center'>
<div className="row w-75 ">
        <div className="col-md-4 offset-md-2">
            <img src={Aboutus} class="img-fluid" alt="..."/>
        </div>
        <div className="col-md-6">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, optio tempore. Sint tenetur id soluta iure magni voluptatibus dolor eveniet odio consectetur eligendi ea facilis officia, saepe, dolorum, nulla dignissimos?</p>
        </div>
      </div>
        </div>
      
    );
};

export default AboutUs;