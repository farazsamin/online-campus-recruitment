import React from 'react';
import AlumniAdd from '../AlumniAdd/AlumniAdd';

const AlumniAddButton = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-9 m-auto" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                    <AlumniAdd></AlumniAdd>
                </div>

            </div>
        </div>
    );
};

export default AlumniAddButton;