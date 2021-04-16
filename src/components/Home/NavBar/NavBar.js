import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import logo from '../../../images/car-logo.png'
const NavBar = () => {
    return (
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">CarCare</a>
    <img class="navbar-brand" style={{width:'40px', marginRight:'auto'}}  src={logo} alt=""/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <ul class="nav justify-content-end">
  <li class="nav-item">
  <Link class="nav-link"  to="/home">Home</Link>
  </li>
  <li class="nav-item">
  <Link  class="nav-link" to="/addService">Admin</Link>
  </li>
  <li class="nav-item">
  <Link  class="nav-link" to="/logIn">Log In</Link>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>
  </div>
</nav>
    );
};

export default NavBar;