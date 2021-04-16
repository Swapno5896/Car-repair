import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import AddReview from '../AddReview/AddReview';
import AddService from '../AddService/AddService';
import DeletService from "../DeletService/DeletService";
import Sidebar from '../Sidebar/Sidebar';

const AdminDashBord = () => {
    return (
        <div class="row g-3">
        <div class="col-sm-6 col-md-4">
        <Link  class="nav-link" to="/addService">addService</Link>
      <Link  class="nav-link" to="/addReview">addService</Link>
        </div>
        <div class="col-6 col-md-6">
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

export default AdminDashBord;