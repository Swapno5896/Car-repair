import React, { useEffect, useState,useContext } from 'react';
import { UserContext } from '../../../App';

import Sidebar from '../../Admin/Sidebar/Sidebar';
import BookingListCard from '../BookingListCard/BookingListCard';

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
const [bookingService, setBookingService] = useState([])
const email = {email:'swapnom73@gmail.com'}
useEffect(()=>{
    fetch(`http://localhost:9000/BookingService`,{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify(email)
})
.then(res=>res.json())
.then(data=>{setBookingService(data)})
},[])
    return (
        <div class="row g-3">
        {/* <Sidebar></Sidebar> */}
            <div  class="col-md-8 col-md-6">
            <ul class="list-group">
            {
                 bookingService.map(book=><BookingListCard book={book}></BookingListCard>)
             }
            </ul>
           
            </div>
      </div>
    );
};

export default BookingList;