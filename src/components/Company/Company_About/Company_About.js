import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SetToken } from '../../utilities/setToken';
import CompanyNavbar from '../Navbar/Navbar'
import { FcAbout } from "react-icons/fc";
import { AiOutlineAim } from "react-icons/ai";
import { SiSinglestore } from "react-icons/si";
import { MdOutlineFormatListNumberedRtl } from "react-icons/md";
import { IoEarthSharp } from "react-icons/io5";


const Company_About = () => {
    const [companyAbout, setCompanyAbout] = useState({})
    const [profilePic, setProfilePic] = useState([])

    useEffect(() => {
        SetToken(localStorage.getItem('companyToken'));
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/profile/company/me')
            .then(response => {
                console.log(response.data)
                setCompanyAbout(response.data.companyProfile)
            })
            .catch(err => {
                console.log(err)
            })

        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/profile/company/me/profilePic')
            .then(response => {
                console.log(response.data.pic)
                setProfilePic(response.data.pic.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    let img = new Buffer.from(profilePic).toString('base64');
    img = `data:image/jpg;base64,${img}`;

    return (

        <div>

            <CompanyNavbar></CompanyNavbar>

            <div className="row mt-3 mb-5">
                <div className="col-md-9 m-auto text-center">
                    {/* {
                        companyAbout ?
                            <Link to="/company/add_info"><button disabled={true} style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="btn btn-white mr-4 mb-3">Add Info</button></Link> */}
                    {/* : */}
                    <Link to="/company/add_info"><button disabled={false} style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="btn btn-white mr-4 mb-3">Add Info</button></Link>
                    {/* } */}


                </div>
                <div className="col-md-9 m-auto text-center" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>

                    <img style={{ margin: '1%', height: '20%', width: '20%', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }} className="rounded-circle" src={img} alt="" />

                    <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }}>
                        <p className="text-center"><FcAbout className="mr-2 mb-1" />About : {companyAbout.About}</p>
                        <p className="text-center"><AiOutlineAim className="mr-2 mb-1" />Mission : {companyAbout.mission}</p>
                        <p className="text-center"><SiSinglestore className="mr-2 mb-1" />Vision : {companyAbout.vision} </p>
                        <p className="text-center"><MdOutlineFormatListNumberedRtl className="mr-2 mb-1" />Current Employees Number : {companyAbout.currentEmployeeNumber}</p>
                        <p className="text-center"><FcAbout className="mr-2 mb-1" /><IoEarthSharp className="mr-2 mb-1" />Website : {companyAbout.website}</p>
                    </div>
                    {/* <p className="text-center">Facebook</p>
                    <p>{companyAbout.social.facebook}</p>
                    <p className="text-center">Instagram</p>
                    <p>{companyAbout.social.instagram}</p>
                    <p className="text-center">LinkedIn</p>
                    <p>{companyAbout.social.linkedin}</p>
                    <p className="text-center">Twitter</p>
                    <p>{companyAbout.social.twitter}</p>
                    <p className="text-center">Youtube</p>
                    <p>{companyAbout.social.youtube}</p> */}

                </div>
            </div>
        </div>
    );
};

export default Company_About;