import React from 'react';

const Company = (props) => {
    const { name, email } = props.companyList
    return (
        <div className="m-3 p-2" style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
            <p>Name : {name}</p>
            <p>Email: {email}</p>
        </div>
    );
};

export default Company;