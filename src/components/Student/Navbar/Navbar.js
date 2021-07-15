import React from 'react';
import {
    Link, Redirect, useHistory
} from "react-router-dom";
const StudentNavbar = () => {
    const history = useHistory();
    const handleLogout =()=>{
        localStorage.removeItem('userToken');
        
        history.push('/login/student')
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
                <Link className="navbar-brand" to="/student_home">Campus Recruitment System</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <form class="form-inline mx-auto">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/student_home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/resume">Your Resume</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={()=>handleLogout()} className="nav-link" href="/login">Logout</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default StudentNavbar;