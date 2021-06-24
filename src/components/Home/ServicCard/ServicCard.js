import React, { useEffect, useState } from 'react'
import { useContext } from 'react';


import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import './ServiceCard.css'

const ServicCard = (props) => {
    const history = useHistory()

    // const [loggedInUser, setLoggedInUser] = useContext(UserContext)


    // const [service, setService] = useState({title:'',price:'',discription:'',imgUrl:'',isBtnDisable:false,status:'Pending',userEmail:''})





const handleOrder = () =>{
//     const newservice ={...service}
//     newservice.title =props.data.title
//     newservice.title =props.data.discription  

//      newservice.price =props.data.price 
//      newservice.userEmail =loggedInUser.email 
//     setService(newservice)
  
//     // console.log(props.data._id);
// // send data to derver  bookedService
// fetch('https://dry-coast-93619.herokuapp.com/bookedService',{
//     method:'POST',
//     headers:{'Content-Type':'application/json'},
//     body:JSON.stringify(service)
//   })
  history.push(`/checkOut/${props.data._id}`);
}


    return (
        // <div>
        //     <p>{props.data.title}</p>
        // </div>
        <div className='col-md-4'>
        <div className='d-flex align-items-center button hvr-grow'>
            <div className='mr-3'>
              <img style={{height:'50px'}} src={props.data.imgUrl} alt=""/>
            </div>
    
            <div className='p-4 '>
                <p>{props.data.title}</p>
                <small>{props.data.discription}</small>
                <button className="hvr-grow" onClick={handleOrder}>Order now</button>
            </div>
        </div>
    </div>
    );
};

export default ServicCard;