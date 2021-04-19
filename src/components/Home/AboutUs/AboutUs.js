import React from 'react';
const AboutUs = () => {
    return (
        <div style={{backgroundColor:"gray",padding:'40px'}} className='d-flex justify-content-center'>
            <div className="row w-75 ">
                <div className="col-md-4 offset-md-1">
                    <img src='https://i.ibb.co/MDKGC0R/about-us.jpg'  class="img-fluid" alt="..."/>
                </div>
                <div className="col-md-6">
                    <h2 className='text-center'>About Us</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, optio tempore. Sint tenetur id soluta iure magni voluptatibus dolor eveniet odio consectetur eligendi ea facilis officia, saepe, dolorum, nulla dignissimos?</p>
                </div>
            </div>
        </div>
      
    );
};

export default AboutUs;