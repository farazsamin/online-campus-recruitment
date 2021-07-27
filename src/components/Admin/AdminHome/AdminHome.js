import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'

const AdminHome = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="row justify-content-center text-center">
                <div style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="col-md-2 p-4 m-2">
                    <Link to="admin/user_blog/all"><h6>All User Blogs</h6></Link>
                </div>
                <div style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="col-md-2 p-4 m-2">
                    <Link to="/admin/alumni_blog/all"><h6>All Alumni Blogs</h6></Link>
                </div>
                <div style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="col-md-2 p-4 m-2">
                    <Link to="/admin/all/company"><h6>All Company List</h6></Link>
                </div>
                <div style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="col-md-2 p-4 m-2">
                    <Link to="/admin/allJobs"><h6>All Jobs List</h6></Link>
                </div>
                <div style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="col-md-2 p-4 m-2">
                    <h6>Hi</h6>
                </div>
                <div style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="col-md-2 p-4 m-2">
                    <h6>Hi</h6>
                </div>
                <div style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="col-md-2 p-4 m-2">
                    <h6>Hi</h6>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;