import React, { useState } from 'react';

const AddAdmin = () => {
    const [admin ,setAdmin] =useState('')
    const handelBlur =(event)=>{
        setAdmin(event.target.value)
    }
   const  handelSubmit =()=>{
       console.log(admin);
   }
    return (
        <div class="form-floating mb-3">
  <input onBlur={handelBlur} type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
  <input onClick={handelSubmit} type="submit"  value="submit"/>
  
</div>
    );
};

export default AddAdmin;