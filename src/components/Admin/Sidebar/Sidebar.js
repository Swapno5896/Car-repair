import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Sidebar = () => {
    return (
    
            <li class="offset-md-2 col-sm-6 col-md-2 list-group-item  align-items-center">
              <Link class="nav-link list-group-item" to="/addService">addService</Link>
              <Link  class="nav-link list-group-item" to="/addReview">addReview</Link>
              <Link  class="nav-link list-group-item" to="/ChangeState">ChangeState</Link>
              <Link  class="nav-link list-group-item" to="/deleatService">deleatService</Link>
              <Link  class="nav-link list-group-item" to="/deleatService">deleatService</Link>
            </li>

     
    );
};

export default Sidebar;