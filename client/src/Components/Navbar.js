import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useHistory, Redirect } from 'react-router-dom'
import CheckUser from './CheckUser';
import SearchedDoctors from './SearchedDoctors';
export default function Navbar() {

  const history = useHistory();
  let result;
  //To check Wether User is logged In or Not
  const [isloggedIn, setLog] = useState(false);

  useEffect(() => {
    CheckUser().then((res) => {
      setLog(res);
      console.log(res);
    }).catch((err) => {
      setLog(false);
      console.log(err);
    });
  }, [])
  //


  // Handling search
  const [data, setdata] = useState("");

  const SubmitSearch = async (e) => {

    e.preventDefault();
    //alert(`You are searching for ${data}`);

    fetch(`/search?data=${data}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json"
      },

    }).then(response=>response.json())
    .then((data) =>{
      console.log(data)
      result=data;
    });

     /*result = res;
    // result = JSON.parse(JSON.stringify(result));

     console.log(result);
    const location = {
      pathname: '/SearchedDoctors',
      state: { search: result }
    }
    if (!result) {
      window.alert('No such data avilable');
    } else {
      //console.log('Redirecting...');
      //history.push(location);

     }*/
    }
  
    ///

    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">MediBro</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#"><div className="text">
                      <h6>Find Doctors</h6> <p>Book an appointment</p>
                    </div></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#"><div className="text">
                      <h6>Video Consult</h6> <p>Consult top Doctors</p>
                    </div></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#"><div className="text">
                      <h6>Lab Tests</h6> <p>Book tests and checkups</p>
                    </div></a>
                  </li>
                  {isloggedIn === false && <li className="nav-item dropdown">
                    <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      For providers
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><Link to="/Doctor/SignIn"><a className="dropdown-item" >For Doctors</a></Link></li>
                      <li><Link to="/Doctor/SignUp"><a className="dropdown-item" >Register your self as a doctor</a></Link></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" >Something else here</a></li>
                    </ul>
                  </li>}
                  <li className="nav-item dropdown">
                    <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Security and Help
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                </ul>
                <form className="d-flex">
                  <input type="text" className="form-control lg me-1" id="search" name="serach" value={data} onChange={(e) => setdata(e.target.value)} placeholder="Search Doctors, Clinics, Hospitals, etc." />
                  <button className="btn m-1" type="submit" onClick={SubmitSearch} >Search</button>
                </form>

                {isloggedIn === true ? <Link to="/UserProfile"><div class="icon m-2"><img src="images/profilePic1.jpg" class="img-fluid rounded-circle " /></div></Link> :
                  <Link to="/signIn" ><button className=" btn m-2 btn-primary">Sign In</button></Link>}

              </div>
            </div>
          </nav>
        </div>
        
      
    )
  }


