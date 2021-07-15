import React from 'react';

const ResumeProjects = (props) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card">
  <img className="card-img-top" src="..." alt="Card cap"/>
  <div className="card-body">
    <h5 className="card-title">{props.projectTitle}</h5>
    <p className="card-text">{props.projectDescription}</p>
    <a href='f' className="btn btn-primary">Live Site</a>
  </div>
</div>
        </div>
    );
};

export default ResumeProjects;