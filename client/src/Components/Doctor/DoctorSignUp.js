import React, { useState, useEffect } from 'react'
import {Link,useHistory} from 'react-router-dom'

export default function DoctorSignUp() {
  const history=useHistory();
  const [Doctor, setData] = useState({
    firstName: "", lastName: "", email: "", phone: "", qualifications: "", speciality: "",
    address:{
      addressline1: "",
      addressline2: "",
      city: "",
      pincode: "",
      state: "",
      country: ""
    },
    password: "", cpassword: "",
  });
  let name, value;
  //To save inputs
  const handleInputs = async (e) => {
    name = e.target.name;
    value = e.target.value;
    setData({ ...Doctor, [name]: value });
  }
  const [Address,setAddress] =useState({
    addressline1:"",addressline2:"",city:"",pincode:"",state:"",country:""
  })
  const handleAddress = async (e)=>{
  name= e.target.name;
  value = e.target.value;
  setAddress({...Address,[name]:value})
  }
  //To save filevalue
  // const handlefile = async (e) =>{
  // const file = e.target.files;
  // console.log("file",file);
  // setData({...Doctor,degree:file});
  // }
  //const [firstName,lastName,email,phone,qualifications,speciality,address,password,cpassword] = Doctor;
  //Fetch Api to send Data to the server
  const submit = async (e) => {

    e.preventDefault();
    const res = await fetch("/Doctor/SignUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName: Doctor.firstName, lastName: Doctor.lastName, email: Doctor.email, phone: Doctor.phone,
        qualifications: Doctor.qualifications, speciality: Doctor.speciality, address: Address,
        password: Doctor.password, cpassword: Doctor.cpassword
      })
    })

    const data = res.json();
    if(res.status===400)
    {
      alert('Both Passwords should be same');
    }
    if(data)
    {
      alert('Registration Successful!!');
      history.push('/Doctor/SignIn');
    }else{
      alert('Error While Registering');
    }


  }

  return (
    <div className="bg-image" >
      <div className="container text-light"><center><h1>Doctor's SignUp</h1></center></div>
      <div className="container doctor-form p-5 shadow-lg rounded">

        <form onSubmit={submit}>
          <div className="mb-3 ">
            <label for="exampleInputFirstName" className="form-label">First Name</label>
            <input type="text" className="form-control" name="firstName" value={Doctor.firstName} onChange={handleInputs} />
          </div>
          <div className="mb-3">
            <label for="exampleInputLastName" className="form-label">LastName</label>
            <input type="text" className="form-control" name="lastName" value={Doctor.lastName} onChange={handleInputs} />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name="email" value={Doctor.email} onChange={handleInputs} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputContactNumber" className="form-label">Contact Number</label>
            <input type="number" className="form-control" name="phone" value={Doctor.phone} onChange={handleInputs} />
          </div>
          <div className="mb-3">
            <label for="exampleInputQualification" className="form-label">Qualifications</label>
            <input type="text" className="form-control" name="qualifications" value={Doctor.qualifications} onChange={handleInputs} />
          </div>
          <div className="mb-3">
            
            <label for="exampleInputEspeciality" className="form-label">speciality</label>
            <select className="form-select form-control" name="speciality" value={Doctor.speciality} onChange={handleInputs}>
            <option value="General Physician">General Physician</option>
            <option value="Gynecologist">Gynecologist</option>
            <option value="Pediatrician">Pediatrician</option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Psychiatrist">Psychiatrist</option>
            <option value="Neurologist">Neurologist</option>
            <option value="Otolaryngologist">Otolaryngologist</option>
            <option value="Ophthalmologist">Ophthalmologist</option>
            <option value="Nephrologist">Nephrologist</option>
            <option value="Pulmonologist">Pulmonologist</option>
            </select>
          </div>
          {/* <label  for="" className="form-label">Attach <span>LATEST</span> degree documents</label>
  <div className="input-group mb-3">
  <input type="file" className="form-control" name="degree" value={Doctor.degree} onChange={handlefile} />
  <label className="input-group-text" for="inputGroupFile02">Upload</label>
</div> */}
          <label for="" className="form-label mt-3"><h5>Address</h5></label>
          <div className="mb-3">
            <label for="exampleInputFirstLine" className="form-label">First Line</label>
            <input type="text" className="form-control" name="addressline1" value={Address.addressline1} onChange={handleAddress} />

            <label for="exampleInputSecondLine" className="form-label">Second Line</label>
            <input type="text" className="form-control" name="addressline2" value={Address.addressline2} onChange={handleAddress} />

            <label for="exampleInputCity" className="form-label">City</label>
            <input type="text" className="form-control" name="city" value={Address.city} onChange={handleAddress} />

            <label for="examplePin" className="form-label">PinCode</label>
            <input type="number" className="form-control" name="pincode" value={Address.pincode} onChange={handleAddress} />

            <label for="exampleInputState" className="form-label">State</label>
            <input type="text" className="form-control" name="state" value={Address.state} onChange={handleAddress} />

            <label for="exampleInputCountry" className="form-label">Country</label>
            <input type="text" className="form-control" name="country" value={Address.country} onChange={handleAddress} />

          </div>
          <div className="mb-3">
            <label for="exampleInputPassword" className="form-label">Password</label>
            <input type="password" className="form-control" name="password" value={Doctor.password} onChange={handleInputs} />
          </div>

          <div className="mb-3">
            <label for="exampleInputReEnterPassword" className="form-label">Re Enter Password</label>
            <input type="password" className="form-control" name="cpassword" value={Doctor.cpassword} onChange={handleInputs} />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}
