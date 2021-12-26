import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { SetToken } from '../../utilities/setToken';
import { Link } from 'react-router-dom';
import './CV.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faCode, faGlobe, faHandPointUp, faLaptopCode, faList, faLocationArrow, faTrophy, faUniversity } from '@fortawesome/free-solid-svg-icons';
import { faConnectdevelop, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
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
import moment from 'moment';
import loadingPic from '../../utilities/images/loading.gif'

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
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        SetToken(localStorage.getItem('userToken'));
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/profile/me/profilePic')
            .then(response => {
                setProfilePic(response.data.pic.data)
                setLoading(false)
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
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
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

    const { bio, location, status, website, githubusername, achievements } = profileInfo;

    const { school, college, university, fieldOfStudy } = education;
    const { description, from, to, title } = experience;

    const { avatar, maxRank, maxRating, handle, rank, rating } = codeforcesInfo;

    return (
        <>
            {
                loading ? <div className="container">
                    <div class="row">
                        <div class="col-md-12">
                            <img className="mx-auto w-25 d-block" src={loadingPic}></img>
                        </div>
                    </div>
                </div>
                    : <div className="row mt-3 mb-5">

                        <div className="col-md-9 m-auto text-center ">

                            <Link to="/resume/add"><button style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="btn btn-white mr-4 mb-3" ><BiMessageSquareAdd className="mr-1 mb-1" />Add Info</button></Link>



                            <Link to="/resume/edit"><button style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="btn btn-white mr-4 mb-3"><AiFillEdit className="mr-1 mb-1" />Edit Info</button></Link>

                            {/* disabled={profileInfo ? true : false} */}
                        </div>


                        <div className="col-md-9 m-auto text-center" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                            {/* { console.log(img)} */}

                            <img style={{ margin: '1%', height: '20%', width: '20%', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }} className="rounded-circle" src={img} alt="" />


                            <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }}>
                                <h2 className="mb-2">" Hello , I am {user.name} "</h2>
                                <h5><FontAwesomeIcon icon={faLaptopCode} className="mr-2" />{status}</h5>
                                <p> {bio}</p>
                                <p><FontAwesomeIcon icon={faLocationArrow} className="mr-2" />Location :  {location}</p>
                                <a rel="noreferrer" target="_blank" href={website} role="button"
                                >{website}
                                </a>

                                {/* <a class="btn btn-primary" style={{ backgroundColor: '#3b5998' }} rel="noreferrer" target="_blank" href={linkedin} role="button"
                                ><FontAwesomeIcon icon={faLinkedin} className="mr-2" />LinkedIn
                                </a> */}
                                <br />
                            </div>


                            <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }}>
                                <h2><FontAwesomeIcon icon={faList} className="mr-2" />Skills</h2>
                                <p>{skills + ' '}</p>
                                <br />
                            </div>

                            <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }}>
                                <h2><FontAwesomeIcon icon={faList} className="mr-2" />Achievements</h2>
                                {achievements ?

                                    achievements.map(ac => {
                                        return (
                                            <div className="mt-3">
                                                <p><FontAwesomeIcon icon={faTrophy} className="mr-2" />{ac}</p>


                                            </div>


                                        )
                                    })
                                    :
                                    <div>No Achivements</div>
                                }

                                <br />
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





                            <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }}>
                                <h2 className="mb-2"><FontAwesomeIcon icon={faUniversity} className="mr-2" />Education </h2>
                                <div className="row m-3">
                                    <div className="col-md-6 divider">
                                        <p><FaUniversity className="mr-1 mb-1" />University</p>
                                        <p><BiCategory className="mr-1 mb-1" />Field of Study </p>
                                        <p><GrCertificate className="mr-1 mb-1" />HSC </p>
                                        <p><GrCertificate className="mr-1 mb-1" />SSC </p>
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
                                        let fromDate = new Date(ex.from);
                                        fromDate = fromDate.getDate() + '/' + fromDate.getMonth() + '/' + fromDate.getFullYear();
                                        let ToDate = new Date(ex.to);
                                        ToDate = ToDate.getDate() + '/' + ToDate.getMonth() + '/' + ToDate.getFullYear();
                                        return (
                                            <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }}>

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
                                                        <p>{fromDate}</p>
                                                        <p> {ToDate}</p>
                                                        <p>  {ex.location}</p>
                                                    </div>
                                                </div>

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
                    </div>
            }

        </>

    );
};

export default ShowPic;