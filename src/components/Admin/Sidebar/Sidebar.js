import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { useHistory } from "react-router-dom";
const Sidebar = () => {
    let history = useHistory();
    const handeladdService =()=>{
        history.push("/admin/addService");
    }
    return (
    <div style={{height:'8oopx'}}>
         <nav class="nav flex-column">
           
   
           
             <Link to="/addService"> Add service</Link>

       
        </nav>
    </div>
    );
};

export default Sidebar;