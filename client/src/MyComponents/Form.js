import React from 'react'

export const Form = () => {
    return (
        <>
        <div className="container shadow-lg p-3 mb-5 bg-body rounded my-3">
        <h3 className="container my-2">Book Your Appointment</h3>
        <div className="container my-3">
            <form>
  <div className="mb-3 bg-aqua">
    <label for="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Age</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <h6>Gender</h6>
  <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label class="form-check-label" for="flexRadioDefault2">
    Male
  </label>
</div>
  <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Female
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Others
  </label>
</div>
  <div className="mb-3 my-4">
    <label for="exampleInputPassword1" className="form-label">Mobile Number</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Address</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Disease</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Symptoms</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <h6>Upload Previous Report (if any)</h6>
  <div class="input-group mb-3 my-3">
  <input type="file" class="form-control" id="inputGroupFile02"/>
  <label class="input-group-text" for="inputGroupFile02">Upload</label>
</div>
  <h6>Appointment Type</h6>
  <div class="form-check my-3">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label class="form-check-label" for="flexRadioDefault2">
    Offline
  </label>
</div>
  <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Online
  </label>
</div>

  <button type="submit" className="btn btn-primary my-3">Submit</button>
</form>
        </div>
        </div>
        </>
    )
}
