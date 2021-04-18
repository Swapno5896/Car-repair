import React, { useEffect, useState } from 'react';
// import BookingList from '../BookingList/BookingList';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review = () => {
    const [review, setReview] = useState([])
    useEffect(()=>{
        fetch('http://localhost:9000/review')
        .then(res=>res.json())
        .then(data=>{
            // console.log('review',data);
            setReview(data)
        })
    })
    return (
        <div>
                    <p class="text-center">This is review.</p>
            <div class="d-flex justify-content-center">
               {/* <BookingList></BookingList> */}
               <div className="row w-75">
                   {
                       review.map(data=><ReviewCard data={data}></ReviewCard>)
                   }
               </div>
           </div>
        </div>
    );
};

export default Review;