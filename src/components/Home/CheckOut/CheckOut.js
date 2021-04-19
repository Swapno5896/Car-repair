import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Admin/Sidebar/Sidebar';
 import ProcessPament from '../a/ProcessPament.js'
const CheckOut = () => {
    const [loggedInUser, setLoggedInUser] =useContext(UserContext)

    const [service, setService] =useState({title:'',price:'',discription:'',imgUrl:'',status:'Pending',userEmail:'',serviceBuingDate:new Date()})
useEffect(()=>{
  fetch(`http://localhost:9000/checkOut/${_id}`)
  .then(res=>res.json())
  .then(result=>{
    // console.log(result[0]);
      const {title,price,status,discription,imgUrl} = result[0]
      console.log(title,price,status,discription,imgUrl);
   console.log(title,discription,imgUrl);
  let newservice ={...service}
  newservice.title = title
  newservice.price =price  
  newservice.status = status
   newservice.imgUrl =imgUrl
   newservice.discription =discription
   newservice.serviceBuingDate =new Date()
   newservice.userEmail =loggedInUser.email 

   fetch('http://localhost:9000/aadBookedService',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(newservice)
  })

  })
},[])

  const {_id} = useParams();

    return (
        <div class="row g-3">
        <Sidebar></Sidebar>
            <div class=" col-md-6">
              <div>
                <h2>{loggedInUser.name}</h2>
                <h3>{service.title}</h3> 
              </div>
          
              <div  className='pament'>
                <ProcessPament></ProcessPament>
              </div>
          </div>
      </div>
    );
};

export default CheckOut;