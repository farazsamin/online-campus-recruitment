import React from 'react';
import Navbar from '../../Navbar/Navbar'
import ResumeAdd from '../../ResumeEdit/ResumeAdd';

const ResumeAddButton = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="row">
                <div className="col-md-9 m-auto" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                    <ResumeAdd></ResumeAdd>
                </div>

            </div>
        </>

    );
};

export default ResumeAddButton;