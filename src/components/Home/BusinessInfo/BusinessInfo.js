import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import BusinessInfoCard from '../BusinessInfoCard/BusinessInfoCard';
const BusinessInfo = () => {
    const [businessInfo,setBusinessInfo] = useState([])
    useEffect(()=>{
        fetch('http://localhost:9000/businessInfo')
        .then(res=>res.json())
        .then(data=>{
            setBusinessInfo(data)
        })
    },[])
    return (
            <div>
                    <h3 class="text-center">Business Info</h3>
                <div class="d-flex  justify-content-center">
                    <div className="row w-75">
                        {
                            businessInfo.map(data=><BusinessInfoCard data={data}></BusinessInfoCard>)
                        }
                    </div>
                </div>
            </div>
      
    );
};

export default BusinessInfo;