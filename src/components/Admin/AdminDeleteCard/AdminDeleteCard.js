import React from 'react';

const AdminDeleteCard = (props) => {
    const handelDelet = (event) =>{
        console.log(event.target.value);
    }
    return (
        <li class="list-group-item d-flex justify-content-between align-items-center">
          {props.data.title}
          <button value={props.data._id} onClick={handelDelet}>Delet</button>
          {/* <span class=" bg-primary ">1fdsfds4</span> */}
        </li>
    );
};

export default AdminDeleteCard;