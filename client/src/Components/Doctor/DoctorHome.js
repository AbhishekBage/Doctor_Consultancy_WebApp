import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import DoctorNavbar from './DoctorNavbar';
export default function DoctorHome() {
    return (
        <div>
            <DoctorNavbar/>
           <Router>
               
          </Router> 
        </div>
    )
}
