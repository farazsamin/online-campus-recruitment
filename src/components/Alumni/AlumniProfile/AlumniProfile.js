import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SetToken } from '../../utilities/setToken';
import AlumniNavbar from '../Navbar/Navbar';

const AlumniProfile = () => {
    const [profileInfo, setProfileInfo] = useState({})
    useEffect(() => {
        SetToken(localStorage.getItem('userToken'));
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/profile/alumni/me')
        .then(response=>{
            console.log(response.data.alumniProfile)
            setProfileInfo(response.data.alumniProfile)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])
    return (
        <div>
         <AlumniNavbar></AlumniNavbar>
            <div className="row">
                <div className="col-md-8 m-auto">
                    <Link to="/alumni/profile/add_info"><button className="btn btn-primary">Add Your Info</button></Link>
                    <h1 className="text-center">My Info</h1> 
                    <div className="mt-5">
                          <h3> Current Job : {profileInfo.currentJob}</h3>        
                          <h3> About : {profileInfo.about}</h3>        
                          <h3> Passing Year: {profileInfo.passingYear}</h3>        
                          {/* <h3> Facebook : {profileInfo.social.facebook}</h3>         */}
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default AlumniProfile;