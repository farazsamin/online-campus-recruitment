import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { SetToken } from '../utilities/setToken';

const SeeUserProfile = () => {
    let { _id } = useParams();
    const [userInfo, setUserInfo] = useState([])
    const [experience, setExperience] = useState([])
    useEffect(() => {
        SetToken(localStorage.getItem('companyToken'));
        axios.get(`https://iiuc-campus-recuitement-system.herokuapp.com/profile/${_id}`)
            .then(response => {
                setUserInfo(response.data)
                setExperience(response.data.experience)
                console.log(response)

            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const { bio, status, codeforceusername, company, githubusername, location, website } = userInfo
    return (
        <div className="row mt-5">
            <div className="col-md-9 m-auto text-center" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }}>
                    <div className="row m-3">
                        <div style={{ color: '#050505', fontFamily: 'Lato,Arial,Helvetica,sans-serif', fontSize: '1.17em', fontWeight: 'bold', borderRight: '1px solid lightgray' }} className="col-sm-6">
                            <p>Status</p>
                            <p>Bio </p>
                            <p>Current Company </p>
                            <p>Codeforeces Handle </p>
                            <p>Github User Name</p>
                            <p>Website</p>
                            <p>Location</p>
                            <br />
                        </div>
                        <div style={{ color: '#050505', fontFamily: 'Lato,Arial,Helvetica,sans-serif', fontSize: '1.17em' }} className="col-sm-6">
                            <p>{status}</p>
                            <p>{bio}</p>
                            <p>{company}</p>
                            <p>{codeforceusername}</p>
                            <p>{githubusername}</p>
                            <p>{website}</p>
                            <p>{location}</p>
                            <br />
                        </div>
                    </div>
                    <h3 style={{ color: '#050505', fontFamily: 'Lato,Arial,Helvetica,sans-serif', fontSize: '1.57em', fontWeight: 'bold' }} className="text-center mt-5">Experience</h3>
                    {
                        experience.map(ex => {
                            const { company, title, description, from, to, location } = ex
                            return (
                                <div className="row mt-5">
                                    <div style={{ borderRight: '1px solid lightgray' }} className="col-sm-6">
                                        <p>Company</p>
                                        <p>Title</p>
                                        <p>Description</p>
                                        <p>Location</p>
                                        <p>From</p>
                                        <p>To</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p>{company}</p>
                                        <p>{title}</p>
                                        <p>{description}</p>
                                        <p>{location}</p>
                                        <p>{from}</p>
                                        <p>{to}</p>

                                    </div>
                                </div>
                            )
                        })
                    }



                </div>
            </div>
        </div>
    );
};

export default SeeUserProfile;