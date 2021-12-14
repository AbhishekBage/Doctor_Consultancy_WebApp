import React from 'react'

export default function HomeBody() {
    
    return (
        <div>
            <div class="bg-image">
 <div class="conatiner-fluid">
  <div class="row">

  <div class="col-lg-4 col-md-4">
  <div class="card cardStyle" >
    <img src="images/video-doctor.webp" class="card-img-top" alt="video-doctor"/>
    <div class="card-body">
      <h5 class="card-title">Video Consult</h5>
      <p class="card-text">Connect within 60 seconds</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
   </div>

   <div class="col-lg-4 col-md-4">
     <div class="card cardStyle" >
       <img src="images/index.jpg" class="card-img-top" alt="Doctors-nearby"/>
       <div class="card-body">
         <h5 class="card-title">Doctors-nearby</h5>
         <p class="card-text">Confirmed appointments</p>
         <a href="#" class="btn btn-primary">Go somewhere</a>
       </div>
     </div>
   </div>

   <div class="col-lg-4 col-md-4">
     <div class="card cardStyle" >
       <img src="images/LabTest.jpg" class="card-img-top" alt="LabTest"/>


    <div class="card-body">
     <h5 class="card-title">LabTests</h5>
     <p class="card-text">Sample pickup at your home</p>
     <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
    </div>


  </div>
 </div>


</div>
        </div>
    )
}
