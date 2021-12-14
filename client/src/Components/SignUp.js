import React,{useState} from 'react'
import {Link ,useHistory} from 'react-router-dom'




function SignUp() {
    let history = useHistory();
    const [user,setUser] = useState({
    firstName:"" , lastName:"" ,email:"" ,password:"" ,cpassword:""
    });
    
    const {firstName , lastName ,email ,password ,cpassword} =user;

    let name, value;
    const handleInputs = (e)=>{
      name=e.target.name;
      value=e.target.value;
      setUser({...user,[name]:value})
    }

    const submit = async (e)=>{
    
        e.preventDefault();
        const res = await fetch("/signUp",{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName, lastName, email, password, cpassword 
            })
        });

        const result = await res.json();

        if(!result)
        {
         window.alert('Server Error!!');
        }else{
            window.alert("Registration Successful");
            history.push("/signIn");

        }

    }
    return (
        <div className="container ">
        <Link to="/"><button className="btn btn-danger m-3">Back</button></Link><br/>
         <div className="text-light border rounded p-2 bg-success"><h1 > User SignUp</h1></div>
          <div className="container shadow p-4 rounded-3">
            <form onSubmit={submit}>
                <label> First Name:</label>
                <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={handleInputs}/><br/>
                <label>Last Name:</label>
                <input type="text"  className="form-control" name="lastName" value={user.lastName} onChange={handleInputs}/><br/>
                <label>Email:</label>
                <input type="email" className="form-control" name="email" value={user.email} onChange={handleInputs}/><br/>
                <label>Password:</label>
                <input type="password" className="form-control" name="password" value={user.password} onChange={handleInputs}/><br/>
                <label>Confirm Password:</label>
                <input type="password" className="form-control" name="cpassword" value={user.confirmPassword} onChange={handleInputs}/><br/>
                <button type="submit" className="btn btn-success" >SignUp</button>
            </form>
            <center><p>Are you a Doctor? <Link to="/DoctorSignUp">SignUp here</Link></p></center>
            </div>
        </div>
    )
}

export default SignUp
