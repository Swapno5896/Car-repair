import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Sidebar = () => {
    return (
        <div>
        <Link  class="nav-link" to="/addService">addService</Link>
      <Link  class="nav-link" to="/addReview">addReview</Link>
      <Link  class="nav-link" to="/ChangeState">ChangeState</Link>
      <Link  class="nav-link" to="/deleatService">deleatService</Link>
       <Link  class="nav-link" to="/addAdmin">deleatService</Link>
        </div>
    

     
    );
};

export default Sidebar;