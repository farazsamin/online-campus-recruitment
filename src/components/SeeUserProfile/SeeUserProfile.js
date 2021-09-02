import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { SetToken } from '../utilities/setToken';

const SeeUserProfile = () => {
    let { _id } = useParams();
    const [userInfo, setUserInfo] = useState([])
    const [experience, setExperience] = useState([])
    const [profilePic, setProfilePic] = useState([])
    const [skills, setSkills] = useState([])
    const [info, setInfo] = useState([])
    const [socialInfo, setSocialInfo] = useState()
    useEffect(() => {
        SetToken(localStorage.getItem('companyToken'));
        axios.get(`https://iiuc-campus-recuitement-system.herokuapp.com/profile/${_id}`)
            .then(response => {
                setUserInfo(response.data)
                setExperience(response.data.experience)
                setProfilePic(response.data.profilePic.data)
                setSkills(response.data.skills)
                setInfo(response.data.user)
                setSocialInfo(response.data.social)
                // setEducation(response.data.education)
                console.log(response)

            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    let img = new Buffer.from(profilePic).toString('base64');
    img = `data:image/jpg;base64,${img}`;

    const { bio, status, codeforceusername, company, githubusername, location, website } = userInfo
    const { name, email } = info;
    // const { instagram } = socialInfo
    return (
        <div className="row mt-5">
            <div className="col-md-9 m-auto text-center" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                <img style={{ margin: '1%', height: '20%', width: '20%', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }} className="rounded-circle" src={img} alt="" />
                <h2 className="mb-3 mt-4">Hi, I am {name}</h2>
                <h5>{status}</h5>
                <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }}>

                    <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }} className="row m-3">
                        <div style={{ color: '#050505', fontFamily: 'Lato,Arial,Helvetica,sans-serif', fontSize: '1.17em', fontWeight: 'bold', borderRight: '1px solid lightgray' }} className="col-sm-6">

                            <p>Bio </p>
                            <p>Current Company </p>
                            {/* <p>LinkedIn</p> */}
                            <p>Codeforeces Handle </p>
                            <p>Github User Name</p>
                            <p>Website</p>
                            <p>Email</p>
                            <p>Location</p>
                            <br />
                        </div>
                        <div style={{ color: '#050505', fontFamily: 'Lato,Arial,Helvetica,sans-serif', fontSize: '1.17em' }} className="col-sm-6">
                            <p>{status}</p>
                            <p>{bio}</p>
                            <p>{company}</p>
                            {/* <p>{instagram}</p> */}
                            <p><a href={codeforceusername}>{codeforceusername}</a></p>
                            <p><a href={githubusername}>{githubusername}</a></p>
                            <p><a href={website}>{website}</a></p>
                            <p><a href={email}>{email}</a></p>
                            <p>{location}</p>
                            <br />
                        </div>
                    </div>
                    <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }}>
                        <h3>Skills</h3>
                        {
                            skills.map(sk => {
                                return (
                                    <div>
                                        <button className="btn btn-secondary m-2">{sk}</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <h3 style={{ color: '#050505', fontFamily: 'Lato,Arial,Helvetica,sans-serif', fontSize: '1.57em', fontWeight: 'bold' }} className="text-center mt-5">Experience</h3>
                    {
                        experience.map(ex => {
                            const { company, title, description, from, to, location } = ex
                            return (
                                <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }} className="row mt-5">
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