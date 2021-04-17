import React, { useEffect, useState,useContext } from 'react';

import Sidebar from '../../Admin/Sidebar/Sidebar';

const BookingList = () => {
const [order, setOrder] = useState([])
    fetch('https://gamenig.herokuapp.com/showProduct/'+loggedInUser.email)
        .then(res=>res.json())
        .then(data=>{
            setOrder(data)
            
        })
    return (
        <div class="row g-3">
        <Sidebar></Sidebar>
            <div  class="col-md-8 col-md-6">
             
            </div>
      </div>
    );
};

export default BookingList;