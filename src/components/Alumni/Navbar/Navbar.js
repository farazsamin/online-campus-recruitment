import React from 'react';
import {
    Link
} from "react-router-dom";
const AlumniNavbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
                <Link className="navbar-brand" to="/alumni_home">Campus Recruitment System</Link>
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
                            <Link className="nav-link" to="/alumni_home">Alumni Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/blog/user/all/alumni">Student Blogs</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/alumni_list">All Alumnies</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/search/user">Search User</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/profile/alumni/me">My Profile</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Logout</a>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default AlumniNavbar;