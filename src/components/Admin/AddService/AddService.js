import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Sidebar from '../Sidebar/Sidebar';
const axios = require('axios');
const AddService = () => {
const [btnDisable, setBtnDisable] =useState(false)
const [service, setService] = useState({title:'',price:'',discription:'',imgUrl:'',isBtnDisable:false,status:'pending'})

const handelInputData = (event) =>{
// console.log(event.target.name , event.target.value);
const newService = {...service}
 newService[event.target.name] = event.target.value
 setService(newService)
}
// image upload and set url
// const handelImgUpload = event =>{
// //  console.log(event.target.files[0]);
//     const newService = {...service}
//     // newProdct.isBtnDisable = true
//     // setAddedProduct(newProdct)
//     const imgData = new FormData()
//     imgData.set('key','b3e6576852ae88d319140db41b827a4c')
//     imgData.append('image',event.target.files[0])
//     axios.post('https://api.imgbb.com/1/upload', imgData)
//     .then(function (response) {
//     //   newProdct.isBtnDisable = false
//     // const newProdct2 ={...newProdct}
//     //   setAddedProduct(newProdct2)
//     setBtnDisable(!btnDisable)
//       console.log(response.data.data.display_url);
      
//       newService.imgUrl = response.data.data.display_url
//       const newService3={...newService}
//       setService(newService3)
//       //  image joto somy na ascha toto somy btn disable rakha khobe
   
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//   }


    const handelSubmit = () =>{
         console.log(service);
        
      // console.clear()
            fetch(`http://localhost:9000/addService`,{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(service)
             
              
       })
    }

    const handelImgUploads = (event) =>{
      // setBtnDisable(!btnDisable)
    
        const newService = {...service}
        const imgData = new FormData()
        
        imgData.set('key','b3e6576852ae88d319140db41b827a4c')
        imgData.append('image',event.target.files[0])
        
  
        axios.post('https://api.imgbb.com/1/upload', imgData)
        .then(function (response) {
        
              console.log(response.data.data.display_url);
              newService.imgUrl = response.data.data.display_url
       
              const newService3={...newService}
              setService(newService3)
              
              // console.log(service);
            })
            .catch(function (error) {
                console.log(error);
              });
    }
    return (
      <div class="row g-3">
        <Sidebar></Sidebar>
      {/* <div class="col-sm-6 col-md-4">
      <Link  class="nav-link" to="/addService">addService</Link>
      <Link  class="nav-link" to="/addReview">add review</Link>
      <Link  class="nav-link" to="/ChangeState">ChangeState</Link>
      <Link  class="nav-link" to="/deleatService/a">deleatService</Link>
      <Link  class="nav-link" to="/addAdmin">addAdmin</Link>
      </div> */}
      {/* <div class="col-sm-6 col-md-4">
           <Sidebar></Sidebar>
        </div> */}
   
      <div class="offset-md-1  col-md-6">
               
      <form className='row'>
        <div class='col-md-6'>
          <label for="exampleInputEmail1" class="form-label">Service Title(admin)</label>
          <input onBlur={handelInputData} name='title' type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div class="col-md-6 ">
            <input type="file" onChange={handelImgUploads}/>

        </div>
        <div class='col-md-6'>
          <label for="exampleInputEmail1" class="form-label">Service Description</label>
          <input onBlur={handelInputData} name='discription'  type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div class='col-md-6'>
          <label for="exampleInputEmail1" class="form-label">Service Price</label>
          <input onBlur={handelInputData} name='price'  type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        {/* <div class="col-md-6">
          <label for="exampleInputPassword1" class="form-label">Description</label>
          <input type="file" class="form-control" id="exampleInputPassword1"/>
        </div> */}
    
        <div class="d-flex justify-content-center">
        {/* <button onClick={handelSubmit} aria-disabled="true" type='true' class="btn btn-primary">Submit</button> */}
        <input   disabled={btnDisable}  onClick={handelSubmit} type="submit" value="Submit"/>
      

        </div>
      </form>

      </div>
    </div>
  
    );
};

export default AddService;