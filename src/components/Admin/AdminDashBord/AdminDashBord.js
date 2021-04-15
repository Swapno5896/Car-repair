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
import Sidebar from '../Sidebar/Sidebar';

const AdminDashBord = () => {
    return (
        <div class="row g-3">
        <div class="col-sm-6 col-md-4">
            <h1>admin things</h1>
            <Sidebar></Sidebar>
        </div>
        <div class="col-6 col-md-6">

            <Router>
                <Switch>
                <Route path='/admin/addService'>
                        <AddService></AddService>
                    </Route>
                    <Route path='/admin/addReview'>
                    <AddReview></AddReview>
                    </Route>
                </Switch>
            </Router>
            
            {/*  */}           


        </div>
      </div>
    );
};

export default AdminDashBord;