import React from 'react';

const ResumeEducation = (props) => {
    return (
        <div>
            <div className="row ">
          <div className="col-md-8 mt-5">
            <h3>{props.institute}</h3>
            <h4>{props.degree}</h4>
          </div>
          <div className="col-md-4 mt-5">
           {props.session}
          </div>
      </div>
        </div>
    );
};

export default ResumeEducation;