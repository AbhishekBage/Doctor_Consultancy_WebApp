import React, {useState} from 'react'
import {Link,useHistory} from 'react-router-dom'

function SignIn() {
  let history=useHistory();
 const [userCredentials,setCredentials] = useState({
   email:"",password:""
 });


    let name, value;
    const handleInputs = (e)=>{
      name=e.target.name;
      value=e.target.value;
      setCredentials({...userCredentials,[name]:value});
    }

    const submit = async (e)=>{
    
      e.preventDefault();
      const res = await fetch("/signIn",{
          method:"POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              email:userCredentials.email, password:userCredentials.password})
      });
    

      const result = await res.json();

        if(!result)
        {
         window.alert('Server Error!!');
        }else{
            window.alert("LoggedIN Successful");
            history.push("/");

        }
    }


return (
<div className="container p-5">
<Link to="/"><button className="btn btn-danger m-3">Back</button></Link><br/>
 <div className="bg-info border rounded text-light p-2"><h2>Login</h2></div>
  <div className="container shadow border rounded">
  <form onSubmit={submit}>
  <div className="m-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control"  name="email"id="email" value={userCredentials.email} onChange={handleInputs} />
    
  </div>
  <div className="m-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control"  name="password" id="password" value={userCredentials.password} onChange={handleInputs} />
  </div>
  
  <button type="submit" className="btn btn-primary m-3">Submit</button>
</form>
<center><p>Are you a Doctor? <Link to="/DoctorSignIn">Sign In here</Link></p></center>
</div>
</div>
    )
}

export default SignIn
