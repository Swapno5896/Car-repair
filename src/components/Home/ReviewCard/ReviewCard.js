import React from 'react';

const ReviewCard = (props) => {
    // console.log(props);
    return (
        <div className='col-md-4'>
            <div className='d-flex align-items-center'>
                <div className=''>
                    <img style={{height:'50px'}} src={props.data.imgUrl} alt=""/>
                </div>
                <div className='p-4'>
                    {
                        props.data.userImg || <h6> User Id :{props.data._id}</h6>
                    }
                    <p>{props.data.review}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;