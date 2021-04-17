import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ServiceStateCard from '../ServiceStateCard/ServiceStateCard';
import Sidebar from '../Sidebar/Sidebar';
const ChangeServiceState = () => {
    const [service, setservice] = useState([])
    useEffect(()=>{
        fetch('http://localhost:9000/service')
        .then(res=>res.json())
        .then(data=>{
            // console.log('service',data);
            setservice(data)
        })
    })
    return (
      <div class="row g-3">
        <Sidebar></Sidebar>
      {/* <div class="col-sm-6 col-md-4">
      <Link  class="nav-link" to="/addService">addService</Link>
    <Link  class="nav-link" to="/addReview">addReview</Link>   
     <Link  class="nav-link" to="/ChangeState">ChangeState</Link>
    <Link  class="nav-link" to="/deleatService/a">deleatService</Link>
    <Link  class="nav-link" to="/addAdmin">addAdmin</Link>
      </div> */}
      <div class="offset-md-1 col-md-6">
                 {/*  content */}
                 <div style={{margin:'50px'}}>
           <ul class="list-group">
     {
          service.map(data=><ServiceStateCard data={data}></ServiceStateCard>)
     }
    
    </ul>
    </div>

      </div>
    </div>

 
    );
};

export default ChangeServiceState;