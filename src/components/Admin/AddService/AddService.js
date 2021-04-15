import React, { useEffect, useState } from 'react'
const axios = require('axios');
const AddService = () => {

const [service, setService] = useState({title:'',discription:'',imgUrl:'',isBtnDisable:false})

const handelInputData = (event) =>{
console.log(event.target.name , event.target.value);
const newService = {...service}
 newService[event.target.name] = event.target.value
 setService(newService)
}
// image upload and set url
const handelImgUpload = event =>{
 console.log(event.target.files[0]);
    const newService = {...service}
    // newProdct.isBtnDisable = true
    // setAddedProduct(newProdct)
    const imgData = new FormData()
    imgData.set('key','b3e6576852ae88d319140db41b827a4c')
    imgData.append('image',event.target.files[0])
    axios.post('https://api.imgbb.com/1/upload', imgData)
    .then(function (response) {
    //   newProdct.isBtnDisable = false
    // const newProdct2 ={...newProdct}
    //   setAddedProduct(newProdct2)
      console.log(response.data.data.display_url);
      
      newService.imgUrl = response.data.data.display_url
      const newService3={...newService}
      setService(newService3)
      //  image joto somy na ascha toto somy btn disable rakha khobe
   
    })
    .catch(function (error) {
      console.log(error);
    });
  }


    const handelSubmit = () =>{
        // console.log(service);
      console.clear()
            fetch(`http://localhost:9000/addService`,{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(service)
             
              
            })
    }

    const handelImgUploads = (event) =>{
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
              console.log(service);
            })
            .catch(function (error) {
                console.log(error);
              });
    }
    return (
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
        {/* <div class="col-md-6">
          <label for="exampleInputPassword1" class="form-label">Description</label>
          <input type="file" class="form-control" id="exampleInputPassword1"/>
        </div> */}
    
        <div class="d-flex justify-content-center">
        <button onClick={handelSubmit} type="submit" class="btn btn-primary">Submit</button>

        </div>
      </form>
    );
};

export default AddService;