
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddService from "./components/Admin/AddService/AddService";
import AdminDashBord from "./components/Admin/AdminDashBord/AdminDashBord";

import Home from './components/Home/Home/Home';

const App = () => {
  return (
    <div>
    
      {/* hear we implementing routeing */}
      <Router>
        <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route> 
         <Route path='/home'>
          <Home></Home>
        </Route> 
        <Route path='/admin'>
            <AdminDashBord></AdminDashBord>
        </Route> 
        {/* <Route path='/admin/addService'>
                        <AddService></AddService>
           </Route>    */}
        </Switch>
      </Router>
    </div>
  );
};

export default App;