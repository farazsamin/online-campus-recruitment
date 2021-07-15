import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import ShowPic from '../ShowPic/ShowPic';
import './Resume.css'

const Resume = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="row">
        <div className="col-md-9 m-auto text-center">
          <Link to="resume/add"><button className="btn btn-success mr-4">Add Info</button></Link>
          <Link to="resume/add"><button className="btn btn-success mr-4">Edit Info</button></Link>
          <Link to="resume/add"><button className="btn btn-success mr-4">Delete Info</button></Link>
        </div>
      </div>

      <ShowPic></ShowPic>
    </>
  );
};

export default Resume;