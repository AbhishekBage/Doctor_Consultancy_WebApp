import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default function DoctorNavbar() {



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
                                    <h6>Profile</h6>
                                </div></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#"><div className="text">
                                    <h6>Check Appointments</h6>
                                </div></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#"><div className="text">
                                    <h6>Patients</h6>
                                </div></a>
                            </li>
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

                            <li className="nav-item">
                                <a className="nav-link active" href="#"><div className="text">
                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                                    </svg>
                                </div></a>
                            </li>
                        </ul>
                        <form className="d-flex">



                            <input type="email" className="form-control lg me-1" id="exampleFormControlInput1" placeholder="Search Doctors, Clinics, Hospitals, etc." />
                            <button className="btn m-1" type="submit">Search</button>
                        </form>

                        <Link to="/UserProfile"><div class="icon m-2"><img src="/images/profilePic1.jpg" class="img-fluid rounded-circle "/></div></Link>



                    </div>
                </div>
            </nav>
        </div>
    )
}
