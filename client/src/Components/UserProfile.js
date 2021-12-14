import React,{useEffect,useState} from 'react'
import {Link,useHistory} from 'react-router-dom'

 

function UserProfile() {
    const history= useHistory();
    const [user,setUser] = useState([]);
    const fetchData = async ()=>{
        try{
           const res = await fetch('/userprofile',{
               method:"GET",
               headers: {
                   Accept: "application/json",
                   "content-Type":"application/json"
               },
               credentials:"include"
           })
        
        const data = await res.json();
        console.log(data);
        if(res.status===400)
        {
            
            //throw new Error("Error");
        }
        setUser(data);
    }catch(err){
        window.alert('Login Before accesssing this page');
        console.log(err);
        history.push('/signIn');
      }
        
    }
    useEffect(()=>{
        fetchData();
    },[]);
    return (
        <div>
            <p>Name:</p><b><p>{user.firstName}</p></b>
            <p>Email:</p><b><p>{user.email}</p></b>
            <br/>
            <br/>
            <Link to="/Logout"><button className="btn btn-danger" >Logout</button></Link>
        </div>
    )
}

export default UserProfile
