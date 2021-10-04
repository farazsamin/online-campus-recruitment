import axios from 'axios';
import React from 'react';
import {
    Link, useHistory
} from "react-router-dom";
const AdminNavbar = () => {
    const history = useHistory();
    const handleLogout = () => {
        // localStorage.removeItem('adminToken');
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/admin/logout')
            .then(response => {
                console.log(response)

            })
            .catch(err => {
                console.log(err)
            })
        history.push('/')
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
                <Link className="navbar-brand" to="/admin_home">Campus Recruitment System</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/admin_home">Admin Home</Link>
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

export default AdminNavbar;