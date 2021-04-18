import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import GetPament from '../GetPament/GetPament';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Sidebar from '../../Admin/Sidebar/Sidebar';
import SimpleCardFrom from '../SimpleCardFrom/SimpleCardFrom';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


 import ProcessPament from '../a/ProcessPament.js'
const CheckOut = () => {
    const [loggedInUser, setLoggedInUser] =useContext(UserContext)
    const [service, setService] = useState({title:'',price:'',discription:'',imgUrl:'',status:'Pending',userEmail:'',serviceBuingDate:new Date()})
//
useEffect(()=>{
  fetch(`http://localhost:9000/checkOut/${_id}`)
  .then(res=>res.json())
  .then(result=>{
    console.log(result[0].title);
      const {title,price,status,discription,imgUrl} = result[0]
      // console.log(title,discription,imgUrl);
  // console.log(title,discription,imgUrl);
  // let newservice ={...service}
  // newservice.title =title
  // newservice.price =result[0].price  
  // newservice.status =result[0].status
  //  newservice.imgUrl =result[0].imgUrl
  //  newservice.discription =result[0].discription
  //  newservice.serviceBuingDate =new Date()
  //  newservice.userEmail =loggedInUser.email 
  //  setService(newservice)
  let email = loggedInUser.email
    let newservice ={...result[0], email}
  handelUpload(newservice)
  })
},[])
const handelUpload = (result) =>{
  fetch('http://localhost:9000/bookedService',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(result)
  })
}
    //
    // const newservice ={...service}
    // newservice.title =props.data.title
    // newservice.title =props.data.discription  

    //  newservice.price =props.data.price 
    //  newservice.serviceBuingDate =new Date()
    //  newservice.userEmail =loggedInUser.email 
    // setService(newservice)
  
    // console.log(props.data._id);
// send data to derver  bookedService
// fetch('http://localhost:9000/bookedService',{
//     method:'POST',
//     headers:{'Content-Type':'application/json'},
//     body:JSON.stringify(service)
//   })

  // privious
    // const [addedProduct, setAddedProduct] = useState({title:"", discription:"",imgUrl:"",BuingDate:new Date()})
  const {_id} = useParams();
// console.log(_id,loggedInUser);
// load data by id

// useEffect(()=>{
//     fetch(`http://localhost:9000/checkOut/${_id}`)
//     .then(res=>res.json())
//     .then(result=>{
//         const {title,discription,imgUrl} = result[0]
//         // console.log(title,discription,imgUrl);
//     console.log(title,discription,imgUrl);
//   let newService = {...addedProduct}
//   newService.title = title 
//    newService.discription = discription  
//    newService.imgUrl = imgUrl
//    setAddedProduct(newService)

//     })
// },[])
// console.log(addedProduct);
    return (
        <div class="row g-3">
        <Sidebar></Sidebar>
            <div style={{border:'2px solid red', margin:'20px 50px'}} class="col-md-8 col-md-6">
              <div>
                <h2>{loggedInUser.name}</h2>
                <h3>{service.title}</h3> 
              </div>
              {/* price dhakaita hoeb */}
              <div>

              </div>
                 {/* <GetPament></GetPament> */}
                 {/* <SimpleCardFrom></SimpleCardFrom> */}
                 <ProcessPament></ProcessPament>
            </div>
      </div>
    );
};

export default CheckOut;