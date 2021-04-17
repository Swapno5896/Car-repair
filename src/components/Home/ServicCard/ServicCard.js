import React from 'react';
import { useHistory } from 'react-router-dom';

const ServicCard = (props) => {
    const history = useHistory()

    // console.log(props);







const handleOrder = () =>{
    history.push(`/checkOut/${props.data._id}`);
    // console.log(props.data._id);

}


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
                <button onClick={handleOrder}>Order now</button>
            </div>
        </div>
    </div>
    );
};

export default ServicCard;