import React from 'react';
import {
    Link, useHistory
} from "react-router-dom";
const AlumniNavbar = () => {
    const history = useHistory();
    const handleLogout = () => {
        localStorage.removeItem('alumniToken');

        history.push('/')
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
                <Link className="navbar-brand" to="/company_home">Campus Recruitment System</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/company_home">Company Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/company_about">About</Link>
                        </li>
                        <li className="nav-item">
                            <a onClick={() => handleLogout()} className="nav-link" href="/">Logout</a>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default AlumniNavbar;