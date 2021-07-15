import React from 'react';
import EducationInfo from '../../EducationInfo/EducationInfo';
import ExperienceShare from '../../ExperienceShare/ExperienceShare';
import Navbar from '../../Navbar/Navbar'
import ResumeEdit from '../../ResumeEdit/ResumeEdit';
import UploadPic from '../../UploadPic/UploadPic';
import ResumeEditInfo from '../ResumeEditInfo/ResumeEditInfo';

const ResumeAddButton = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="row">
                <div className="col-md-9 m-auto" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                    <ResumeEdit></ResumeEdit>
                    <ResumeEditInfo></ResumeEditInfo>
                    <ExperienceShare></ExperienceShare>
                    <EducationInfo></EducationInfo>
                    <UploadPic></UploadPic>

                </div>

            </div>
        </>

    );
};

export default ResumeAddButton;