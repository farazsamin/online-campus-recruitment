import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SetToken } from '../../../utilities/setToken';
import Navbar from '../../Navbar/Navbar'
import ResumeAdd from '../../ResumeAdd/ResumeAdd'

const ResumeAddButton = () => {
    const [cv, setCv] = useState(false)
    useEffect(() => {
        SetToken(localStorage.getItem('userToken'));

        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/profile/me')
            .then(response => {
                setCv(true)
                console.log(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <Navbar></Navbar>
            {
                cv ?
                    <div className="row">
                        <div className="col-md-9 m-auto" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                            <ResumeAdd></ResumeAdd>
                        </div>

                    </div> : <div></div>
            }

        </>

    );
};

export default ResumeAddButton;