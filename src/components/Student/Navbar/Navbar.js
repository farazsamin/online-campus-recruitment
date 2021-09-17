import axios from 'axios';
import React from 'react';
import {
    Link, Redirect, useHistory
} from "react-router-dom";

const StudentNavbar = () => {
    const history = useHistory();
    const handleLogout = () => {
        localStorage.removeItem('userToken');
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/user/logout')
            .then(response => {
                console.log(response)

            })
            .catch(err => {
                console.log(err)
            })
        history.push('/')
    }
    return (
        <div style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} >
            <nav className="navbar navbar-expand-lg navbar-light bg-white mb-3">
                <Link className="navbar-brand" to="/student_home">Campus Recruitment System</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/student_home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/resume">Your Resume</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={() => handleLogout()} className="nav-link" >Logout</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default StudentNavbar;