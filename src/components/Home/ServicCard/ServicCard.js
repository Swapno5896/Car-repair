import React from 'react';

const ServicCard = (props) => {
    // console.log(props);
    return (
        // <div>
        //     <p>{props.data.title}</p>
        // </div>
        <div className='col-md-4'>
        <div className='d-flex align-items-center'>
            <div className='mr-3'>
              <img style={{height:'50px'}} src={props.data.imgUrl} alt=""/>
            </div>
    
            <div className='p-4'>
                <p>{props.data.title}</p>
                <small>{props.data.discription}</small>
            </div>
        </div>
    </div>
    );
};

export default ServicCard;