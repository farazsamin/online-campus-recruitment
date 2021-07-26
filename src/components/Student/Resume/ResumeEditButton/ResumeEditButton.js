import React from 'react';
import Navbar from '../../Navbar/Navbar'
import ResumeEditInfo from '../ResumeEditInfo/ResumeEditInfo';

const ResumeEditButton = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="row">
                <div className="col-md-9 m-auto" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                    <ResumeEditInfo></ResumeEditInfo>
                </div>

            </div>
        </>

    );
};

export default ResumeEditButton;