import React from 'react';
import topBanner from '../../../images/top-banner.jpg'
const MainHeader = () => {
    return (
        <div class="container">
             <div style={{height:"600px"}} class="row d-flex align-items-center">
            <div class="col-md-3 offset-md-2">
                <h2>We Are Always <br/>There For You</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis molestiae nam amet nemo quasi?</p>
                <button>Jump  now</button>
            </div>
            <div class="col-md-3 offset-md-3">
                <img style={{width:'400px'}} src={topBanner} alt=""/>
            </div>
             </div>
        </div>
    );
};

export default MainHeader;