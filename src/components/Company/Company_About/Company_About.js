import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SetToken } from '../../utilities/setToken';
import CompanyNavbar from '../Navbar/Navbar'
const Company_About = () => {
    const [companyAbout, setCompanyAbout] = useState({})
    const [profilePic, setProfilePic] = useState()
    const [image, setImage] = useState()

    const handleAddProfilePic = (e) => {
        e.preventDefault();        
        let fd = new FormData();        
        fd.append('profilePic', image);        
        axios.post('https://iiuc-campus-recuitement-system.herokuapp.com/profile/company/uploadProfilePic',fd)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
            
        // window.location.reload();
    
    }
    useEffect(() => {
        SetToken(localStorage.getItem('userToken'));
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
                setProfilePic(response.data.pic)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])



    useEffect(() => {
        SetToken(localStorage.getItem('userToken'));

    }, [])

    // let img = new Buffer.from(profilePic.data).toString('base64');
    // img = `data:image/jpg;base64,${img}`;
    return (

        <div>

            <CompanyNavbar></CompanyNavbar>

            <div className="row">
                <div className="col-md-3">
                    <Link to="/company/add_info"><button className="btn btn-primary p-2">Add Info</button></Link>
                    <h6 className="mt-5">Add Profile Picture</h6>
                    <input style={{width: '80%'}} type="file" accept="image/png, .jpeg, .jpg"  name="post-image" id="" onChange={
                            (event) => {
                                setImage(event.target.files[0]);
                            }
                        } /> <br/>
                        <button className="btn btn-primary" onClick={handleAddProfilePic}>Add Profile Picture</button>
                </div>
                <div className="col-md-9">
                    {/* <img src={img} alt="" className="text-center" /> */}
                    <h1 className="text-center">About</h1>
                    <h1>{companyAbout.About}</h1>
                    <h1 className="text-center">Mission</h1>
                    <h1>{companyAbout.mission}</h1>
                    <h1 className="text-center">Vission</h1>
                    <h1>{companyAbout.vision}</h1>
                    <h1 className="text-center">Current Employees Number</h1>
                    <h1>{companyAbout.currentEmployeeNumber}</h1>
                    <h1 className="text-center">Website</h1>
                    <h1>{companyAbout.website}</h1>
                    {/* <h1 className="text-center">Facebook</h1>
                    <h1>{companyAbout.social.facebook}</h1>
                    <h1 className="text-center">Instagram</h1>
                    <h1>{companyAbout.social.instagram}</h1>
                    <h1 className="text-center">LinkedIn</h1>
                    <h1>{companyAbout.social.linkedin}</h1>
                    <h1 className="text-center">Twitter</h1>
                    <h1>{companyAbout.social.twitter}</h1>
                    <h1 className="text-center">Youtube</h1>
                    <h1>{companyAbout.social.youtube}</h1> */}

                </div>
            </div>
        </div>
    );
};

export default Company_About;