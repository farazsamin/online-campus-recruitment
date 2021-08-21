import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SetToken } from '../../utilities/setToken';
import CompanyNavbar from '../Navbar/Navbar'
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
                    <Link to="/company/add_info"><button style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="btn btn-white mr-4 mb-3">Add Info</button></Link>

                </div>
                <div className="col-md-9 m-auto text-center" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                    <img style={{ margin: '1%', height: '20%', width: '20%', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }} className="rounded-circle" src={img} alt="" />
                    <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }}>
                        <h3 className="text-center">About : {companyAbout.About}</h3>
                        <h3 className="text-center">Mission : {companyAbout.mission}</h3>
                        <h3 className="text-center">Vision : {companyAbout.vision} </h3>
                        <h3 className="text-center">Current Employees Number : {companyAbout.currentEmployeeNumber}</h3>
                        <h3 className="text-center">Website : {companyAbout.website}</h3>
                    </div>
                    {/* <h3 className="text-center">Facebook</h3>
                    <h3>{companyAbout.social.facebook}</h3>
                    <h3 className="text-center">Instagram</h3>
                    <h3>{companyAbout.social.instagram}</h3>
                    <h3 className="text-center">LinkedIn</h3>
                    <h3>{companyAbout.social.linkedin}</h3>
                    <h3 className="text-center">Twitter</h3>
                    <h3>{companyAbout.social.twitter}</h3>
                    <h3 className="text-center">Youtube</h3>
                    <h3>{companyAbout.social.youtube}</h3> */}

                </div>
            </div>
        </div>
    );
};

export default Company_About;