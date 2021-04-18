import React from 'react';

const BookingListCard = (props) => {

  const { title,price,status} =props.book
  console.log(title,price,status);
    return (
      <li class="list-group-item d-flex justify-content-between align-items-center">
       {title}
       <p>{price}</p>
        <span class="badge bg-primary rounded-pill">{status}</span>
     </li>
    );
};

export default BookingListCard;