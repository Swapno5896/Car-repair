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
            <div class="col-sm-6 col-md-4">
                <Link  class="nav-link" to="/addService">addService</Link>
                <Link  class="nav-link" to="/addReview">addReview</Link>   
                <Link  class="nav-link" to="/ChangeState">ChangeState</Link>
                <Link  class="nav-link" to="/deleatService">deleatService</Link>
            </div>
            <div style={{border:'2px solid red'}} class="col-md-8 col-md-6">
                 <GetPament></GetPament>
            </div>
      </div>
    );
};

export default CheckOut;