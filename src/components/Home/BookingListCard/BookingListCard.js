import React from 'react';

const BookingListCard = (props) => {
    return (
        <li class="list-group-item d-flex justify-content-between align-items-center">
        {props.book.title}  <span class=" bg-primary ">{props.book.status}</span>

        {/* <span class=" bg-primary ">1fdsfds4</span> */}
      </li>
    );
};

export default BookingListCard;