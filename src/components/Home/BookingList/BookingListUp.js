import React, { useEffect, useState,useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Admin/Sidebar/Sidebar';
import BookingListCard from '../BookingListCard/BookingListCard'
const BookingListUp = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [bookingService, setBookingService] = useState([])

    // const email = loggedInUser.email
useEffect(()=>{
    fetch(`http://localhost:9000/BookingService`,{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify(loggedInUser)
})
.then(res=>res.json())
.then(data=>{setBookingService(data)})
},[])
// console.log(bookingService);
    return (
        <div class="row g-3">
            <Sidebar></Sidebar>
            <ul class="list-group col-md-6 offset-md-1">
                {
                    bookingService.map(book=><BookingListCard book={book}></BookingListCard>)
                }
            </ul>
       </div>
    );
};

export default BookingListUp;