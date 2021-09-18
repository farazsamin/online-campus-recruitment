import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { SetToken } from '../utilities/setToken';
import CompanyNavbar from '../Company/Navbar/Navbar'
const SeeUserProfile = () => {
    let { _id } = useParams();
    const [userInfo, setUserInfo] = useState([])
    const [experience, setExperience] = useState([])
    const [profilePic, setProfilePic] = useState([])
    const [skills, setSkills] = useState([])
    const [info, setInfo] = useState([])
    const [socialInfo, setSocialInfo] = useState()
    const [cfInfo, setCfInfo] = useState([])
    const [cf, setCf] = useState(false)
    const [gh, setGh] = useState(false)
    const [codeforces, setCodeforces] = useState([])
    const [github, setGithub] = useState([])
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
                // console.log(response)

            })
            .catch(err => {
                // console.log(err)
            })

        axios.get(`https://iiuc-campus-recuitement-system.herokuapp.com/profile/${_id}/codeforceUserInfo`)
            .then(response => {
                setCfInfo(response.data.result[0])
                // console.log(response)

            })
            .catch(err => {
                // console.log(err)
            })
        axios.get(`https://iiuc-campus-recuitement-system.herokuapp.com/profile/${_id}/githubRepos`)
            .then(response => {
                setGithub(response.data)
                // console.log(response)

            })
            .catch(err => {
                console.log(err)
            })
        axios.get(`https://iiuc-campus-recuitement-system.herokuapp.com/profile/${_id}/codeforceRatings`)
            .then(response => {
                setCodeforces(response.data.result)
                // console.log(response)

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

    const { bio, status, codeforceusername, company, githubusername, location, website } = userInfo
    const { name, email } = info;
    const { avatar, maxRank, maxRating, handle, rank, rating } = cfInfo;
    // const { instagram } = socialInfo
    console.log(codeforces)
    return (
        <>
            {/* <CompanyNavbar></CompanyNavbar> */}
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
                                        <div style={{ display: 'inline' }}>
                                            <button className="btn btn-secondary m-2">{sk}</button>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }}>
                            <h2>Codeforces Info</h2>
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
                        <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }}>
                            <button className="btn btn-success" onClick={handlecfclick}>Particpated Codeforces Contests</button>
                            {
                                cf ?
                                    codeforces.slice(0).reverse().map(cd => {
                                        return (
                                            <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }}>
                                                <div className="row">
                                                    <div className="col-md-6 divider">
                                                        <p>Contest Name</p>
                                                        <p>After Contest Rating</p>
                                                        <p>After Contest Rank</p>
                                                    </div>
                                                    <div style={{ fontWeight: 'bolder' }} className="col-md-6">
                                                        <p>{cd.contestName}</p>
                                                        <p>{cd.newRating}</p>
                                                        <p>{rank}</p>
                                                    </div>
                                                </div>

                                            </div>
                                        )
                                    }) : <div></div>
                            }


                        </div>

                        <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }}>
                            <button className="btn btn-success" onClick={handleghclick}>Github Projects</button>

                            {
                                gh ?
                                    github.map(gh => {
                                        return (
                                            <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }}>
                                                <p>Project Name : {gh.name}</p>
                                                <a href={gh.clone_url} target="_blank">Clone</a>

                                            </div>
                                        )
                                    }) : <div></div>
                            }

                        </div>


                    </div>



                </div>
            </div>
        </>
    );
};

export default SeeUserProfile;