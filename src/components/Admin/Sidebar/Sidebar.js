import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { useContext ,useState} from 'react';
import { UserContext } from '../../../App';

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] =useContext(UserContext)
  const [isAdmin, setAdmin] = useState(false);
  // console.log(loggedInUser,isAdmin);
useEffect(()=>{
  fetch(`http://localhost:9000/checkAdmin`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
      
        body: JSON.stringify({email:loggedInUser.email})
      })
        .then(res=>res.json())
        .then(data=>{
          // console.log('data  from backend ',data);
          setAdmin(data)})
},[loggedInUser])
// console.log(isAdmin);
    return (
    
            <li class="offset-md-2 col-sm-6 col-md-2 list-group-item  align-items-center">
           
            {
              isAdmin &&       <div>
              <Link class="nav-link list-group-item" to="/addService">addService</Link>
              <Link  class="nav-link list-group-item" to="/ChangeState">ChangeState</Link>
              <Link  class="nav-link list-group-item" to="/deleatService">deleatService</Link>
              <Link  class="nav-link list-group-item" to="/addAdmin">addAdmin</Link>
          
            </div>
            
               

            } 
           
{
              isAdmin || <div>
                <Link  class="nav-link list-group-item" to="/addReview">addReview</Link>
                <Link  class="nav-link list-group-item" to="/CheckOut">Book</Link>
                <Link  class="nav-link list-group-item" to="/bookingList">BookingList</Link>
              </div> 
            

}
                
              
            </li>

     
    );
};

export default Sidebar;