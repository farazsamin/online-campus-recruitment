import React from 'react';
import {
    Link
} from "react-router-dom";
const AdminNavbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
                <Link className="navbar-brand" to="/admin_home">Campus Recruitment System</Link>
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
                            <Link className="nav-link" to="/admin_home">Admin Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/all_alumnies_list">All Alumnies list</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/all_students_list">All Students list</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/all_companies_list">All Companies list</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Logout</a>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default AdminNavbar;