import React from 'react';

const AdminDeleteCard = (props) => {
    const handelDelet = (event) =>{
    //     fetch(`https://gamenig.herokuapp.com/delet/${_id}`,{
    //         method:'DElete'
    //       })
    //       .then(res=>res.json())
    //     .then(data=>
    //     console.log(data)
    //   )
        // console.log(event.target.value);
        fetch(`https://dry-coast-93619.herokuapp.com/deleatService/${event.target.value}`,{ method:'DElete'})
        .then(res=>res.json())
        .then(result=>{console.log(result);})
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