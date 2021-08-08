import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SetToken } from '../../utilities/setToken';
import AlumniNavbar from '../Navbar/Navbar';

const AlumniProfile = () => {
    const [profilePic, setProfilePic] = useState([])
    const [profileInfo, setProfileInfo] = useState([])
    const [socialInfo, setSocialInfo] = useState([])
    const [education, setEducation] = useState([])
    const [experience, setExperience] = useState([])

    useEffect(() => {
        SetToken(localStorage.getItem('alumniToken'));
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/profile/alumni/me')
            .then(response => {
                console.log(response.data.alumniProfile)
                setProfileInfo(response.data.alumniProfile)
                setSocialInfo(response.data.alumniProfile.social)
                setEducation(response.data.alumniProfile.education[0])
                setExperience(response.data.alumniProfile.experience[0])

            })
            .catch(err => {
                console.log(err)
            })

        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/profile/alumni/profile/me/profilePic')
            .then(response => {
                setProfilePic(response.data.pic.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])
    let img = new Buffer.from(profilePic).toString('base64');
    img = `data:image/jpg;base64,${img}`;

    const { status, about, currentJob, passingYear, githubusername, website, codeforceusername } = profileInfo
    const { facebook, linkdein } = socialInfo
    const { BscPassingYear, college, school } = education
    const { company, location, title, from, to, description } = experience
    return (
        <div>
            <AlumniNavbar></AlumniNavbar>

            <div className="row mt-3 mb-5">

                <div className="col-md-9 m-auto text-center ">
                    <Link to="/alumni_profile/add"><button style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="btn btn-white mr-4 mb-3">Add Info</button></Link>
                    <Link to="resume/edit"><button style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="btn btn-white mr-4 mb-3">Edit Info</button></Link>

                    {/* disabled={profileInfo ? true : false} */}
                </div>

                <div className="col-md-9 m-auto text-center" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                    {/* { console.log(img)} */}
                    <img style={{ margin: '1%', height: '20%', width: '20%', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }} className="rounded-circle" src={img} alt="" />

                    <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }}>
                        <h2>Hello , I am {about}</h2>
                        <h5>{status}</h5>
                        <p>Current Job : {currentJob}</p>
                        <a class="btn btn-primary" style={{ backgroundColor: '#3b5998' }} rel="noreferrer" target="_blank" href={website} role="button"
                        ><i class="fab fa-facebook-f">Website</i>
                        </a>
                        <a class="btn btn-primary m-2" style={{ backgroundColor: '#3b5998' }} rel="noreferrer" target="_blank" href={facebook} role="button"
                        ><i class="fab fa-facebook-f">Facebook</i>
                        </a>
                        <a class="btn btn-primary" style={{ backgroundColor: '#3b5998' }} rel="noreferrer" target="_blank" href={linkdein} role="button"
                        ><i class="fab fa-facebook-f">LinkedIn</i>
                        </a>

                        <p>Location :  {location}</p>
                        <br />
                    </div>


                    <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }}>
                        <h2 className="mb-2">Education </h2>
                        <div className="row m-3">
                            <div className="col-md-6 divider">
                                <p> Bsc Passing Year </p>
                                <p>HSC </p>
                                <p>SSC </p>
                                <br />
                            </div>
                            <div className="col-md-6">
                                <p>{BscPassingYear}</p>
                                <p>{college}</p>
                                <p>{school}</p>
                                <br />
                            </div>
                        </div>
                    </div>

                    <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }}>
                        <h2>Experience</h2>
                        <div className="row mt-3">
                            <div className="col-md-6 divider">
                                <p>Company </p>
                                <p>Title </p>
                                <p>Description</p>
                                <p>From </p>
                                <p>To </p>
                                <p>Location </p>
                            </div>
                            <div className="col-md-6">
                                <p>{company}</p>
                                <p>{title}</p>
                                <p>{description}</p>
                                <p>{from}</p>
                                <p>{location}</p>
                            </div>
                        </div>
                    </div>

                </div>





            </div>

        </div>
    );
};

export default AlumniProfile;