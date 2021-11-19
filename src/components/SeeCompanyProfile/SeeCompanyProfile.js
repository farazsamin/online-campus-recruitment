import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { SetToken } from '../utilities/setToken';
import { FcAbout } from "react-icons/fc";
import { AiOutlineAim } from "react-icons/ai";
import { SiSinglestore } from "react-icons/si";
import { MdOutlineFormatListNumberedRtl } from "react-icons/md";
import { IoEarthSharp } from "react-icons/io5";

const SeeCompanyProfile = () => {
    let { _id } = useParams();
    console.log(_id)
    const [userInfo, setUserInfo] = useState([])
    const [experience, setExperience] = useState([])
    const [profilePic, setProfilePic] = useState([])
    const [skills, setSkills] = useState([])
    const [info, setInfo] = useState([])
    const [socialInfo, setSocialInfo] = useState([])

    useEffect(() => {
        SetToken(localStorage.getItem('userToken'));
        axios.get(`https://iiuc-campus-recuitement-system.herokuapp.com/profile/watch/company/${_id}`)
            .then(response => {
                setUserInfo(response.data.companyProfile)
                // setExperience(response.data.alumniProfile.experience)
                setProfilePic(response.data.companyProfile.logo.data)
                // // setSkills(response.data.skills)
                setInfo(response.data.companyProfile.company)
                setSocialInfo(response.data.companyProfile.social)
                // setEducation(response.data.education)
                console.log(response)

            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    let img = new Buffer.from(profilePic).toString('base64');
    img = `data:image/jpg;base64,${img}`;

    const { About, currentEmployeeNumber, website } = userInfo
    const { name, email } = info;
    // const { linkedin, youtube, twitter } = socialInfo
    // const { instagram } = socialInfo
    return (

        <div className="row mt-5">
            <div className="col-md-9 m-auto text-center" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                <img style={{ margin: '1%', height: '20%', width: '20%', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }} className="rounded-circle" src={img} alt="" />
                <h2 className="mb-3 mt-4">Hi, We are {name}</h2>
                <div className="col-md-9 m-auto text-center p-5" >
                    <h5><FcAbout className="mr-2 mb-1" />" {About}"</h5>
                </div>

                <div style={{ color: '#050505', fontFamily: 'Lato,Arial,Helvetica,sans-serif', fontSize: '1.17em' }} className="col-sm-6 m-auto text-center">
                    <a className="m-2" href={website}>{website}</a>
                    {/* <a className="m-2" href={linkedin}>LinkedIn</a>
                    <a className="m-2" href={youtube}>Youtube</a>
                    <a className="m-2" href={facebook}>Facebook</a>
                    <a className="m-2" href={twitter}>Twitter</a>
                    <a className="m-2" href={instagram}>Instagram</a> */}
                </div>

                <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }}>

                    <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }} className="row m-3">
                        <div style={{ color: '#050505', fontFamily: 'Lato,Arial,Helvetica,sans-serif', fontSize: '1.17em', fontWeight: 'bold', borderRight: '1px solid lightgray' }} className="col-sm-6">

                            <p><MdOutlineFormatListNumberedRtl className="mr-2 mb-1" />Current Employee Number</p>


                            <br />
                        </div>


                        <div style={{ color: '#050505', fontFamily: 'Lato,Arial,Helvetica,sans-serif', fontSize: '1.17em' }} className="col-sm-6">
                            <p>{currentEmployeeNumber}</p>

                            <br />
                        </div>

                    </div>


                </div>

            </div>
        </div>
    );
};

export default SeeCompanyProfile;