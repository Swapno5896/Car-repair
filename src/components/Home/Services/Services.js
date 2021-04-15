import React, { useEffect, useState } from 'react';
import ServiesCard from '../ServicCard/ServicCard'
const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:9000/service')
        .then(res=>res.json())
        .then(data=>{
            setServices(data)
        })
    },[])

    // console.log('this is',services);
    return (
        <div>
            <p class="text-center">this is services. and it is editable</p>
            <div class="d-flex justify-content-center">
                <div className="row w-75">
                        {
                            services.map(data=><ServiesCard data={data}></ServiesCard>)
                        }
            </div>
            </div>
        </div>
    );
};

export default Services;