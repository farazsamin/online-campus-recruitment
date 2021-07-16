import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import ShowPic from '../CV/CV';
import './Resume.css'

const Resume = () => {
  return (
    <>
      <Navbar></Navbar>
      <ShowPic></ShowPic>
    </>
  );
};

export default Resume;