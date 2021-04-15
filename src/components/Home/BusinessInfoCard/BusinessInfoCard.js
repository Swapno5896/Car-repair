import React from 'react';

const BusinessInfoCard = ({data}) => {
    // console.log(data);
    return (
        <div className='col-md-4'>
            <div className='d-flex align-items-center'>
                <div className='mr-3'>
                  <img style={{height:'50px'}} src={data.img} alt=""/>
                </div>
        
                <div className='p-4'>
                    <p>{data.title}</p>
                    <small>{data.description}</small>
                </div>
            </div>
        </div>
    );
};

export default BusinessInfoCard;