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
  
    const [addedProduct, setAddedProduct] = useState({title:"", discription:"",imgUrl:"",BuingDate:new Date()})
  const {_id} = useParams();
// console.log(_id,loggedInUser);
// load data by id

useEffect(()=>{
    fetch(`http://localhost:9000/checkOut/${_id}`)
    .then(res=>res.json())
    .then(result=>{
        const {title,discription,imgUrl} = result[0]
        // console.log(title,discription,imgUrl);
    console.log(title,discription,imgUrl);
  let newService = {...addedProduct}
  newService.title = title 
   newService.discription = discription  
   newService.imgUrl = imgUrl
   setAddedProduct(newService)

    })
},[])
console.log(addedProduct);
    return (
        <div class="row g-3">
        <Sidebar></Sidebar>
            <div style={{border:'2px solid red', margin:'20px 50px'}} class="col-md-8 col-md-6">
              <div>
                <h2>{loggedInUser.name}</h2>
                <h3>{addedProduct.title}</h3> 
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