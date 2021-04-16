
import React from "react";
import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import AddReview from "./components/Admin/AddReview/AddReview";

import AddService from "./components/Admin/AddService/AddService";
import ChangeServiceState from "./components/Admin/ChangeServiceState/ChangeServiceState";
import DeletService from "./components/Admin/DeletService/DeletService";
// import AdminDashBord from "./components/Admin/AdminDashBord/AdminDashBord";

import Home from './components/Home/Home/Home';
import Login from "./components/Home/Login/Login/Login";
import NavBar from "./components/Home/NavBar/NavBar";
import Services from "./components/Home/Services/Services";
// import LogIn from './components/Home/Login/Login/Login'
const App = () => {
  const UserContext = createContext()
  const [loggedInUser, setLoggedInUser] = useState({});
console.log(loggedInUser);
  return (
    <div>

      {/* hear we implementing routeing */}
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
            <Switch>
              <Route exact path='/'>
                  <Home></Home>
              </Route> 
              <Route path='/home'>
                  <Home></Home>
              </Route> 
              <Route path='/addService'>
                  <NavBar></NavBar>
                  <AddService></AddService>
              </Route>
              <Route path='/addReview'>
                  <NavBar></NavBar>
                  <AddReview></AddReview>
              </Route>
              <Route path='/ChangeState'>
                  <NavBar></NavBar>
                 <ChangeServiceState></ChangeServiceState>
              </Route>   
              <Route path='/deleatService'>
                  <NavBar></NavBar>
                  <DeletService></DeletService>
              </Route>
              <Route path='/logIn'>
                  <NavBar></NavBar>
                  <Login></Login>
              </Route> 
            </Switch>
          </Router>
      </UserContext.Provider>
    </div>
  );
};

export default App;