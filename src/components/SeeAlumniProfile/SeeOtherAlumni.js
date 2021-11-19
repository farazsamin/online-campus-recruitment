import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { SetToken } from '../utilities/setToken';

const SeeOtherAlumni = () => {
    let { _id } = useParams();
    const [userInfo, setUserInfo] = useState([])
    const [experience, setExperience] = useState([])
    const [profilePic, setProfilePic] = useState([])
    const [skills, setSkills] = useState([])
    const [info, setInfo] = useState([])
    const [socialInfo, setSocialInfo] = useState()

    useEffect(() => {
        SetToken(localStorage.getItem('alumniToken'));
        axios.get(`https://iiuc-campus-recuitement-system.herokuapp.com/alumni/watch/alumni/${_id}`)
            .then(response => {
                setUserInfo(response.data.alumni)
                setExperience(response.data.alumni.experience)
                // setProfilePic(response.data.alumniProfile.profilePic.data)
                // // setSkills(response.data.skills)
                // setInfo(response.data.alumniProfile.alumni)
                // setSocialInfo(response.data.social)
                // setEducation(response.data.education)
                console.log(response)

            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    let img = new Buffer.from(profilePic).toString('base64');
    img = `data:image/jpg;base64,${img}`;

    const { about, currentJob, status, passingYear } = userInfo
    const { name, email } = info;
    // const { instagram } = socialInfo
    return (

        <div className="row mt-5">
            <div className="col-md-9 m-auto text-center" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                {/* <img style={{ margin: '1%', height: '20%', width: '20%', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }} className="rounded-circle" src={img} alt="" /> */}

                <h5 className="mt-2">{status}</h5>
                <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }}>

                    <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }} className="row m-3">
                        <div style={{ color: '#050505', fontFamily: 'Lato,Arial,Helvetica,sans-serif', fontSize: '1.17em', fontWeight: 'bold', borderRight: '1px solid lightgray' }} className="col-sm-6">

                            <p>Current Job</p>
                            <p>About</p>
                            <p>Passing Year</p>
                            <br />
                        </div>
                        <div style={{ color: '#050505', fontFamily: 'Lato,Arial,Helvetica,sans-serif', fontSize: '1.17em' }} className="col-sm-6">
                            <p>{currentJob}</p>
                            <p>{about}</p>
                            <p>{passingYear}</p>
                            <br />
                        </div>
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

export default SeeOtherAlumni;