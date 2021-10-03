import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { SetToken } from '../../utilities/setToken';
import { Link } from 'react-router-dom';
import './CV.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faCode, faGlobe, faHandPointUp, faLaptopCode, faList, faLocationArrow, faUniversity } from '@fortawesome/free-solid-svg-icons';
import { faConnectdevelop, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const ShowPic = () => {

    const [profilePic, setProfilePic] = useState([])
    const [profileInfo, setProfileInfo] = useState([])
    const [socialInfo, setSocialInfo] = useState([])
    const [skills, setSkills] = useState([])
    const [education, setEducation] = useState([])
    const [experience, setExperience] = useState([])
    const [codeforces, setCodeforces] = useState([])
    const [user, setUser] = useState([])
    const [github, setGithub] = useState([])
    const [codeforcesInfo, setCodeforcesInfo] = useState([])
    const [cf, setCf] = useState(false)
    const [gh, setGh] = useState(false)

    useEffect(() => {
        SetToken(localStorage.getItem('userToken'));
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/profile/me/profilePic')
            .then(response => {
                setProfilePic(response.data.pic.data)
            })
            .catch(err => {
                console.log(err)
            })


        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/profile/me/codeforceRatings')
            .then(response => {
                setCodeforces(response.data.result)
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/profile/me/codeforceUserInfo')
            .then(response => {
                setCodeforcesInfo(response.data.result[0])
                // console.log(response.data.result[0])
            })
            .catch(err => {
                console.log(err)
            })
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/user/codeforceAllProblemSet')
            .then(response => {
                // setCodeforces(response.data.result)
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/profile/me/githubRepos')
            .then(response => {
                setGithub(response.data)
                console.log(response.data)
            })
            .catch(err => {
                console.log(err)
            })

        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/profile/me')
            .then(response => {
                setProfileInfo(response.data)
                setSocialInfo(response.data.social)
                setSkills(response.data.skills)
                setEducation(response.data.education[0])
                setExperience(response.data.experience)
                setUser(response.data.user)
                console.log(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handlecfclick = () => {
        setCf(!cf)
    }
    const handleghclick = () => {
        setGh(!gh)
    }

    let img = new Buffer.from(profilePic).toString('base64');
    img = `data:image/jpg;base64,${img}`;

    const { company, bio, location, status, website, __v } = profileInfo;
    const { facebook, instagram } = socialInfo;
    const { school, college, university, fieldOfStudy } = education;
    const { description, from, to, title } = experience;
    const { avatar, maxRank, maxRating, handle, rank, rating } = codeforcesInfo;

    return (
        <div className="row mt-3 mb-5">

            <div className="col-md-9 m-auto text-center ">
                {
                    profileInfo ? <Link to="resume/add"><button style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="btn btn-white mr-4 mb-3" disabled={true}>Add Info</button></Link>
                        :
                        <Link to="resume/add"><button style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="btn btn-white mr-4 mb-3" disabled={false}>Add Info</button></Link>
                }

                <Link to="resume/edit"><button style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="btn btn-white mr-4 mb-3">Edit Info</button></Link>

                {/* disabled={profileInfo ? true : false} */}
            </div>


            <div className="col-md-9 m-auto text-center" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                {/* { console.log(img)} */}
                <img style={{ margin: '1%', height: '20%', width: '20%', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }} className="rounded-circle" src={img} alt="" />

                <h4 style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }}><FontAwesomeIcon icon={faCode} className="mr-2" />Current Point : {__v}</h4>
                <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }}>
                    <h2 className="mb-2">" Hello , I am {user.name} "</h2>
                    <h5><FontAwesomeIcon icon={faLaptopCode} className="mr-2" />{status}</h5>
                    <p> {bio}</p>
                    <p><FontAwesomeIcon icon={faLocationArrow} className="mr-2" />Location :  {location}</p>
                    <a class="btn btn-primary" style={{ backgroundColor: '#3b5998' }} rel="noreferrer" target="_blank" href={website} role="button"
                    ><FontAwesomeIcon icon={faGlobe} className="mr-2" />Website
                    </a>
                    <a class="btn btn-primary m-2" style={{ backgroundColor: '#3b5998' }} rel="noreferrer" target="_blank" href={facebook} role="button"
                    ><FontAwesomeIcon icon={faGithub} className="mr-2" />Github
                    </a>
                    <a class="btn btn-primary" style={{ backgroundColor: '#3b5998' }} rel="noreferrer" target="_blank" href={instagram} role="button"
                    ><FontAwesomeIcon icon={faLinkedin} className="mr-2" />LinkedIn
                    </a>
                    <br />
                </div>


                <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }}>
                    <h2><FontAwesomeIcon icon={faList} className="mr-2" />Skills</h2>
                    <p>{skills + ' '}</p>
                    <br />
                </div>

                <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }}>
                    <h2><FontAwesomeIcon icon={faConnectdevelop} className="mr-2" />Codeforces Info</h2>
                    <div className="row mt-3">
                        <div className="col-md-6 divider">
                            <p>Handle</p>
                            <p>Rank</p>
                            <p>MaxRank</p>
                            <p>Rating</p>
                            <p>MaxRating</p>

                        </div>
                        <div style={{ fontWeight: 'bolder' }} className="col-md-6">
                            <p>{handle}</p>
                            <p>{rank}</p>
                            <p>{maxRank}</p>
                            <p>{rating}</p>
                            <p>{maxRating}</p>
                        </div>
                    </div>


                </div>





                <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }}>
                    <h2 className="mb-2"><FontAwesomeIcon icon={faUniversity} className="mr-2" />Education </h2>
                    <div className="row m-3">
                        <div className="col-md-6 divider">
                            <p>University</p>
                            <p>Field of Study </p>
                            <p>HSC </p>
                            <p>SSC </p>
                            <br />
                        </div>
                        <div className="col-md-6">
                            <p>{university}</p>
                            <p>{fieldOfStudy}</p>
                            <p>{college}</p>
                            <p>{school}</p>
                            <br />
                        </div>
                    </div>


                </div>
                <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }}>
                    <h2><FontAwesomeIcon icon={faChartBar} className="mr-2" />Experience</h2>
                    {
                        experience.map(ex => {
                            return (
                                <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }}>
                                    <p>Company Name : {ex.company}</p>
                                    <p>Title : {ex.title}</p>
                                    <p>Description : {ex.description}</p>
                                    <p>From : {ex.from}</p>
                                    <p>To : {ex.to}</p>
                                    <p>Location : {ex.location}</p>
                                </div>
                            )
                        })
                    }

                </div>

                <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }}>
                    <button className="btn btn-success" onClick={handlecfclick}><FontAwesomeIcon icon={faConnectdevelop} className="mr-2" />Particpated Codeforces Contests</button>
                    {
                        cf ?
                            codeforces.slice(0).reverse().map(cd => {
                                return (
                                    <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }}>
                                        <p>Current Rating : {cd.newRating}</p>
                                    </div>
                                )
                            }) : <div></div>
                    }


                </div>
                <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }}>
                    <button className="btn btn-success" onClick={handleghclick}><FontAwesomeIcon icon={faConnectdevelop} className="mr-2" />Github Projects</button>

                    {
                        gh ?
                            github.map(gh => {
                                return (
                                    <div className="row">
                                        <div className="col-md-8 m-auto">
                                            <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }}>
                                                <p>Project Name : {gh.name}</p>
                                                <a href={gh.clone_url} target="_blank">Clone</a>

                                            </div>
                                        </div>

                                    </div>

                                )
                            }) : <div></div>
                    }

                </div>

            </div>
        </div >

    );
};

export default ShowPic;