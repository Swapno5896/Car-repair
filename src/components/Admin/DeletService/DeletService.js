import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
import AdminDeleteCard from '../AdminDeleteCard/AdminDeleteCard';
const DeletService = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:9000/service')
        .then(res=>res.json())
        .then(data=>{
            setServices(data)
        })
    },[])
console.log(services);
    return (
        <div class="row g-3">
        <div class="col-sm-6 col-md-4">
        <Link  class="nav-link" to="/addService">addService</Link>
      <Link  class="nav-link" to="/addReview">addReview</Link>   
       <Link  class="nav-link" to="/ChangeState">ChangeState</Link>
      <Link  class="nav-link" to="/deleatService">deleatService</Link>
        </div>
        <div class="col-6 col-md-6">
                   {/*  content */}
                   <ul class="list-group">
       {
            services.map(data=><AdminDeleteCard data={data}></AdminDeleteCard>)
       }
      
      </ul>
  
        </div>
      </div>
    );
};

export default DeletService;