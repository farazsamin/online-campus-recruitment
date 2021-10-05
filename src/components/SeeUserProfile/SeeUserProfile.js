import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { SetToken } from '../utilities/setToken';
import CompanyNavbar from '../Company/Navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faCode, faGlobe, faLaptopCode, faList, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faConnectdevelop, faGithub } from '@fortawesome/free-brands-svg-icons';
import { BiMessageSquareAdd } from "react-icons/bi";
import { AiFillEdit } from "react-icons/ai";
import { VscDiffRenamed } from "react-icons/vsc";
import { GiRank1 } from "react-icons/gi";
import { GiRank3 } from "react-icons/gi";
import { GiVibratingShield } from "react-icons/gi";
import { FcRating } from "react-icons/fc";
import { IoCodeSharp } from "react-icons/io5";
import { FaUniversity } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { GrCertificate } from "react-icons/gr";
import { GoDiffRenamed } from "react-icons/go";
import { MdTitle } from "react-icons/md";
import { MdOutlineDescription } from "react-icons/md";
import { BsFillSkipEndFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { IoNavigateSharp } from "react-icons/io5";
import { IoCheckmarkSharp } from "react-icons/io5";
import { BiCodeCurly } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

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

    const { bio, status, codeforceusername, company, githubusername, location, website, __v } = userInfo
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

                    <h4 style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }}><FontAwesomeIcon icon={faCode} className="mr-2" />Current Point : {__v}</h4>
                    <h2 className="mb-3 mt-4">Hi, I am {name}</h2>
                    <h5><FontAwesomeIcon icon={faLaptopCode} className="mr-2" />{status}</h5>
                    <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }}>

                        <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }} className="row m-3">
                            <div style={{ color: '#050505', fontFamily: 'Lato,Arial,Helvetica,sans-serif', fontSize: '1.17em', fontWeight: 'bold', borderRight: '1px solid lightgray' }} className="col-sm-6">

                                <p><IoNavigateSharp className="mr-2 mb-1" />Bio </p>
                                <p><IoCheckmarkSharp className="mr-2 mb-1" />Current Company </p>
                                {/* <p>LinkedIn</p> */}
                                <p><BiCodeCurly className="mr-2 mb-1" />Codeforeces Handle </p>
                                <p><FontAwesomeIcon icon={faGithub} className="mr-2" />Github User Name</p>
                                <p><FontAwesomeIcon icon={faGlobe} className="mr-2" />Website</p>
                                <p><MdEmail className="mr-2 mb-1" />Email</p>
                                <p><FontAwesomeIcon icon={faLocationArrow} className="mr-2" />Location</p>
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
                            <h3><FontAwesomeIcon icon={faList} className="mr-2" />Skills</h3>
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
                            <h2><IoCodeSharp className="mr-2 mb-1" />Codeforces Info</h2>
                            <div className="row mt-3">
                                <div className="col-md-6 divider">
                                    <p><VscDiffRenamed className="mr-1 mb-1" />Handle</p>
                                    <p><GiRank1 className="mr-1 mb-1" />Rank</p>
                                    <p><GiRank3 className="mr-1 mb-1" />MaxRank</p>
                                    <p><GiVibratingShield className="mr-1 mb-1" />Rating</p>
                                    <p><FcRating className="mr-1 mb-1" />MaxRating</p>

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
                        <h3 style={{ color: '#050505', fontFamily: 'Lato,Arial,Helvetica,sans-serif', fontSize: '1.57em', fontWeight: 'bold' }} className="text-center mt-5"><FontAwesomeIcon icon={faChartBar} className="mr-2" />Experience</h3>
                        {
                            experience.map(ex => {
                                const { company, title, description, from, to, location } = ex
                                return (
                                    <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }} >

                                        <div className="row m-3">
                                            <div className="col-md-6 divider">
                                                <p><GoDiffRenamed className="mr-1 mb-1" />Company Name</p>
                                                <p><MdTitle className="mr-1 mb-1" />Title </p>
                                                <p><MdOutlineDescription className="mr-1 mb-1" />Description  </p>
                                                <p><BsFillSkipEndFill className="mr-1 mb-1" />From </p>
                                                <p><BsFillSkipEndFill className="mr-1 mb-1" />To </p>
                                                <p><IoLocationSharp className="mr-1 mb-1" />Location</p>

                                            </div>
                                            <div className="col-md-6">
                                                <p> {ex.company}</p>
                                                <p> {ex.title}</p>
                                                <p> {ex.description}</p>
                                                <p> {ex.from}</p>
                                                <p> {ex.to}</p>
                                                <p>  {ex.location}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }}>
                            <button className="btn btn-success" onClick={handlecfclick}><FontAwesomeIcon icon={faConnectdevelop} className="mr-2" />Particpated Codeforces Contests</button>
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
                            <button className="btn btn-success" onClick={handleghclick}><FontAwesomeIcon icon={faConnectdevelop} className="mr-2" />Github Projects</button>

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