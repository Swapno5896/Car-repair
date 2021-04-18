import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddAdmin = () => {
    const [adminEmail ,setAdminEmail] =useState({email:''})
    const handelBlur =(event)=>{
      const newAdminEmail = {...adminEmail}
      newAdminEmail.email = event.target.value
       setAdminEmail(newAdminEmail)
    }
   const  handelSubmit =()=>{
      //  console.log(adminEmail);
       fetch(`http://localhost:9000/addAdmin`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(adminEmail)
     
      
    })
   }
    return (
        <div class="row g-3">
            <Sidebar></Sidebar>
        {/* <div class="col-sm-6 col-md-4">
        <Link  class="nav-link" to="/addService">addService</Link>
      <Link  class="nav-link" to="/addReview">addReview</Link>   
       <Link  class="nav-link" to="/ChangeState">ChangeState</Link>
      <Link  class="nav-link" to="/deleatService">deleatService</Link>
        </div> */}
        <div class="col-6 col-md-6 offset-md-1 ">
                   {/*  content */}
                   <div class="form-floating mb-3">
  <input onBlur={handelBlur} type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
  <input onClick={handelSubmit} type="submit"  value="submit"/>
  
</div>
        </div>
      </div>
    );
};

export default AddAdmin;