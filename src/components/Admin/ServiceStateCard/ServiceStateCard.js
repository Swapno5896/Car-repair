import React from 'react';

const ServiceStateCard = (props) => {
    const handelChange = (e) =>{
        // console.log(e.target.name);
        const id = e.target.name
        const status = e.target.value
        const product = {id,status}
        // console.log('product is ',product);
fetch(`https://dry-coast-93619.herokuapp.com/update`,{
    method:'PATCH',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(product)
})
.then(res=>res.json())
.then(data=>{console.log(data);})
.catch(err=>{console.log(err);})

    }
    return (
        <li  class="list-group-item d-flex justify-content-between align-items-center">
        {props.data.title} <p>{props.data.status}</p>
        <div class="form-floating">
            <select name={props.data._id} onChange={handelChange} class="form-select" id="floatingSelect" aria-label="Floating label select example">
                <option  selected>Select Status</option>
                <option   value="Pending">Pending</option>
                <option  value="On Going">On Going</option>
                <option  value="Done">Done</option>
            </select>
            <label for="floatingSelect"> Select  </label>
        </div> 
      </li>
    );
};

export default ServiceStateCard;