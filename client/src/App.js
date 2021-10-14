import logo from './logo.svg';
import './App.css';
import SignIn from './MyComponents/SignIn';
import React ,{useState,useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignUp from './MyComponents/SignUp';


function App() {
  
  return (
    <div className="App">
      <Router>
    
     <Switch>
       
       <Route exact path="/" render={()=>{
         return(
        <div className="container">
        <br/>
        <Link to="/signIn" ><button className="btn btn-primary mt-5" >Sign In</button></Link><br/>
        <Link to="/signUp"><button className="btn btn-primary mt-5">Sign Up</button><br/></Link>
        </div>
         )
          
       }}>
       </Route>
      <Route path="/signIn" render={()=>{
        return  <SignIn></SignIn>
      }}>
      </Route>

      <Route path="/signUp" render={()=>{
        return <SignUp></SignUp>
      }}>
      </Route>
      </Switch>

      </Router>
    </div>
  );
}

export default App;
