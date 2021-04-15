import React, { useEffect, useState } from 'react';
import AdminDeleteCard from '../AdminDeleteCard/AdminDeleteCard';
const DeletService = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:9000/service')
        .then(res=>res.json())
        .then(data=>{
            setServices(data)
        })
    },[])
console.log(services);
    return (
        <ul class="list-group">
       {
services.map(data=><AdminDeleteCard data={data}></AdminDeleteCard>)
       }
      
      </ul>
    );
};

export default DeletService;