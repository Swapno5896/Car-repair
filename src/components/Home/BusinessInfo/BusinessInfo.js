import React from 'react';
import clock from '../../../images/clock.png'
import location from '../../../images/location.png'
import phone from '../../../images/phone-call.png'
import BusinessInfoCard from '../BusinessInfoCard/BusinessInfoCard';
const Fakedata =[
    {title:'find  us on s',img: clock, description:"this is very good thing. you may love it"},
    {title:'find  us on s',img: clock, description:"this is very good thing. you may love it"},
    {title:'find  us on s',img: clock, description:"this is very good thing. you may love it"}
]
const BusinessInfo = () => {
    return (
            <div>
                    <p class="text-center">This is BusinessInfo.</p>
                    <div class="d-flex justify-content-center">
               
               <div className="row w-75">
                   {
                       Fakedata.map(data=><BusinessInfoCard data={data}></BusinessInfoCard>)
                   }
               </div>
           </div>
            </div>
      
    );
};

export default BusinessInfo;