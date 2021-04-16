import React from 'react';

const a = () => {
    return (
        <div class="row g-3">
        <div class="col-sm-6 col-md-4">
        <Link  class="nav-link" to="/addService">addService</Link>
      <Link  class="nav-link" to="/addReview">addReview</Link>   
       <Link  class="nav-link" to="/ChangeState">ChangeState</Link>
      <Link  class="nav-link" to="/deleatService">deleatService</Link>
        </div>
        <div class="col-6 col-md-6">
                   {/*  content */}
                   <div style={{margin:'50px'}}>
             <ul class="list-group">
       {
            service.map(data=><ServiceStateCard data={data}></ServiceStateCard>)
       }
      
      </ul>
      </div>
  
        </div>
      </div>
    );
};

export default a;