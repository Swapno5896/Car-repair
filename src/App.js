
import React from "react";
import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import AddAdmin from "./components/Admin/AddAdmin/AddAdmin";
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
import PrivetRoute from './components/Home/Login/PrivateRoute/PrivateRoute'
import CheckOut from "./components/Home/CheckOut/CheckOut";


export const UserContext = createContext()


const App = () => {

  const [loggedInUser, setLoggedInUser] = useState({name:'',email:''});
// console.log(loggedInUser);
  return (


  
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
            <Switch>
              <Route exact path='/'>
                  <Home></Home>
              </Route> 
              <Route path='/home'>
                  <Home></Home>
              </Route> 
              <PrivetRoute path='/CheckOut/:_id'>
              <NavBar></NavBar>
                  <CheckOut></CheckOut>
              </PrivetRoute> 
              
              <PrivetRoute path='/addService'>
                  <NavBar></NavBar>
                  <AddService></AddService>
              </PrivetRoute>
              <Route path='/addReview'>
                  <NavBar></NavBar>
                  <AddReview></AddReview>
              </Route>
              <Route path='/ChangeState'>
                  <NavBar></NavBar>
                  <ChangeServiceState></ChangeServiceState>
              </Route>  
              <PrivetRoute path='/addAdmin'>
                  <NavBar></NavBar>
               <AddAdmin></AddAdmin>
              </PrivetRoute>  
              <PrivetRoute path='/deleatService/:id'>
                  <NavBar></NavBar>
                  <DeletService></DeletService>
              </PrivetRoute>
              <PrivetRoute path='/deleatService/'>
                  <NavBar></NavBar>
                  <DeletService></DeletService>
              </PrivetRoute>
              <Route path='/logIn'>
                  <NavBar></NavBar>
                  <Login></Login>
              </Route> 
            </Switch>
          </Router>
      </UserContext.Provider>

  );
};

export default App;