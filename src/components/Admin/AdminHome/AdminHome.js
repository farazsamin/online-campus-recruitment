import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'

const AdminHome = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="row justify-content-center text-center">
                <div style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="col-md-2 p-4 m-2">
                    <Link to="admin/contestRanking"><h6>Add Contest Result</h6></Link>
                </div>

                <div style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="col-md-2 p-4 m-2">
                    <Link to="/admin/all/company"><h6>All Company List</h6></Link>
                </div>

                <div style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="col-md-2 p-4 m-2">
                    <Link to="/temporary/company"> <h6>Company Pending  Registration</h6></Link>
                </div>
                <div style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="col-md-2 p-4 m-2">
                    <Link to="/temporary/alumni"> <h6>Alumni Pending  Registration</h6></Link>
                </div>
                <div style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="col-md-2 p-4 m-2">
                    <Link to="/admin/search/user"> <h6>Search User</h6></Link>
                </div>
                <div style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="col-md-2 p-4 m-2">
                    <Link to="/admin/search/company"> <h6>Search Company</h6></Link>
                </div>
                <div style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="col-md-2 p-4 m-2">
                    <Link to="/admin/search/alumni"> <h6>Search Alumni</h6></Link>
                </div>
                <div style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="col-md-2 p-4 m-2">
                    <Link to="/admin/UserBlog/all"> <h6>All Student Posts</h6></Link>
                </div>
                <div style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="col-md-2 p-4 m-2">
                    <Link to="/admin/AlumniBlog/all"> <h6>All Alumni Posts</h6></Link>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;