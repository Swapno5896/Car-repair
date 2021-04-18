import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Sidebar from '../Sidebar/Sidebar';
const AddReview = () => {
    const [review,setReview] = useState({userName:'',userImg:'',review:'',feedBack:''})
    const handelInputData = (event) =>{
        const newReview = {...review}
        newReview[event.target.name] = event.target.value
        setReview(newReview)
    }
    const handelSubmit = (event) =>{
        // console.log(review);
        // uploading to database
        fetch(`http://localhost:9000/addReview`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(review)
         
          
        })
        event.preventDefault();
    }
    return (
      <div class="row g-3">
        <Sidebar></Sidebar>
               {/* <div class="col-sm-6 col-md-4">
      <Link  class="nav-link" to="/addService">addService</Link>
      <Link  class="nav-link" to="/addReview">add Review</Link>
      <Link  class="nav-link" to="/ChangeState">ChangeState</Link>
      <Link  class="nav-link" to="/deleatService/a">deleatService</Link>
      <Link  class="nav-link" to="/addAdmin">addAdmin</Link>
      </div> */}
      <div class="offset-md-1 col-md-6">
                 {/*  content */}
                 <div>
           <p class="text-center">Please add review for our product(admin)</p>
           <form className='row'>
      <div class='col-md-6'>
        <label for="exampleInputEmail1" class="form-label"> Service Review</label>
        <input onBlur={handelInputData} name='review' type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      </div>
      {/* <div class="col-md-6 ">
          <input type="file" onChange={handelImgUploads}/>

      </div> */}
      <div class='col-md-6'>
        <label for="exampleInputEmail1" class="form-label">Service feedback</label>
        <input onBlur={handelInputData} name='feedBack'  type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      </div>
      {/* <div class="col-md-6">
        <label for="exampleInputPassword1" class="form-label">Description</label>
        <input type="file" class="form-control" id="exampleInputPassword1"/>
      </div> */}
  
      <div class="d-flex justify-content-center">
      <button onClick={handelSubmit} type="submit" class="btn btn-primary">Submit</button>

      </div>
    </form>
      </div>

      </div>
    </div>
    );
};

export default AddReview;