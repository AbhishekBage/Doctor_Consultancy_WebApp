import './App.css';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import UserProfile from './Components/UserProfile';
import Logout from './Components/Logout';
import Navbar from './Components/Navbar';
import HomeBody from './Components/HomeBody';
import DoctorSignUp from './Components/Doctor/DoctorSignUp';
import DoctorSignIn from './Components/Doctor/DoctorSignIn';
import DoctorHome from './Components/Doctor/DoctorHome';
import DoctorProfile from './Components/Doctor/DoctorProfile';
import React ,{useState,useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useHistory } from 'react-router-dom';
import SearchedDoctors from './Components/SearchedDoctors';



function App() {
  const history=useHistory();
  return (
    <div className="App">
      
     <Router>
     <Switch>

     <Route path="/signIn" render={()=>{
        return  <SignIn/>
      }}/>
     <Route path="/signUp" render={()=>{
        return <SignUp/>
      }}/>
      <Route path="/Logout" render={()=>{
        return <Logout/>
      }}/>
    <Route path="/Doctor/SignUp" render={()=>{
        return <DoctorSignUp/>
      }}/>
      <Route path="/Doctor/SignIn" render={()=>{
        return <DoctorSignIn/>
      }}/>
     <Route path="/Doctor/Home" render={()=>{
       return <DoctorHome/>
     }}/>
     <div>
      <Navbar/>
      <Route exact path="/" render={()=>{
         return <HomeBody/>
       }}/>
      <Route path="/UserProfile" render={()=>{
        return <UserProfile/>
      }} />
      <Route path="/SearchedDoctors" render={(data)=>{
        return <SearchedDoctors props={data}/>
      }} />
      </div>
      
      </Switch>

      </Router>
    </div>

  );
}

export default App;
