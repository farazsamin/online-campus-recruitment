import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SetToken } from '../../../utilities/setToken';
import CompanyNavbar from '../../Navbar/Navbar'
const CompanyInfoForm = () => {
    const [establish, setEstablish] = useState()
    const [mission, setMission] = useState('')
    const [vision, setVision] = useState('')
    const [about, setAbout] = useState('')
    const [facebook, setFacebook] = useState('')
    const [instagram, setInstagram] = useState('')
    const [youtube, setYoutube] = useState('')
    const [twitter, setTwitter] = useState('')
    const [website, setWebsite] = useState('')
    const [linkedin, setLinkedin] = useState('')
    const [image, setImage] = useState()
    const [noOfEmployee, setNoOfEmployee] = useState(0)

    useEffect(() => {
        SetToken(localStorage.getItem('userToken'));
    }, [])

    const handleAddProfilePic = (e) => {
        e.preventDefault();
        let fd = new FormData();
        fd.append('profilePic', image);
        axios.post('https://iiuc-campus-recuitement-system.herokuapp.com/profile/company/uploadProfilePic', fd)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })

        // window.location.reload();

    }

    const handleAddInfo = (e) => {
        e.preventDefault();
        axios.post('https://iiuc-campus-recuitement-system.herokuapp.com/profile/company/me', {
            establish: establish,
            mission: mission,
            vision: vision,
            About: about,
            facebook: facebook,
            instagram: instagram,
            youtube: youtube,
            twitter: twitter,
            website: website,
            linkedin: linkedin,
            currentEmployeeNumber: noOfEmployee


        })
            .then((response) => {
                // console.log(response)
                setEstablish('')
                setMission('')
                setVision('')
                setAbout('')
                setFacebook('')
                setInstagram('')
                setYoutube('')
                setTwitter('')
                setWebsite('')
                setLinkedin('')
                setNoOfEmployee('')
                console.log(response)

            })
            .catch((err) => {
                console.log(err.response.data.err)
            })
        // window.location.reload();
    }
    return (
        <div>
            <CompanyNavbar></CompanyNavbar>
            <h1 className="text-center mt-3 mb-3">Add Comapany Info</h1>
            <div className="row">
                <div className="col-md-6 m-auto">
                    <label htmlFor="">Establish Year : </label>
                    <input className="p-2" style={{ width: '100%', border: 'none', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} type="text" name="" id="" onChange={
                        (event) => {
                            setEstablish(event.target.value);
                        }
                    } /> <br />
                    <label className="d-block" htmlFor="">Mission : </label>
                    <textarea className="p-2" style={{ width: '100%', border: 'none', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} type="text" id="" onChange={
                        (event) => {
                            setMission(event.target.value);
                        }
                    } /> <br />
                    <label className="d-block" htmlFor="">Vision</label>
                    <textarea className="p-2" style={{ width: '100%', border: 'none', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} type="text" id="" onChange={
                        (event) => {
                            setVision(event.target.value);
                        }
                    } /> <br />
                    <label className="d-block" htmlFor="">About</label>
                    <textarea className="p-2" style={{ width: '100%', border: 'none', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} type="text" id="" onChange={
                        (event) => {
                            setAbout(event.target.value);
                        }
                    } /> <br />
                    <label htmlFor="">Facebook: </label>
                    <input className="p-2" style={{ width: '100%', border: 'none', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} type="text" name="" id="" onChange={
                        (event) => {
                            setFacebook(event.target.value);
                        }
                    } /> <br />
                    <label htmlFor="">Instagram: </label>
                    <input className="p-2" style={{ width: '100%', border: 'none', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} type="text" name="" id="" onChange={
                        (event) => {
                            setInstagram(event.target.value);
                        }
                    } /> <br />
                    <label htmlFor="">Youtube: </label>
                    <input className="p-2" style={{ width: '100%', border: 'none', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} type="text" name="" id="" onChange={
                        (event) => {
                            setYoutube(event.target.value);
                        }
                    } /> <br />
                    <label htmlFor="">Twitter : </label>
                    <input className="p-2" style={{ width: '100%', border: 'none', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} type="text" name="" id="" onChange={
                        (event) => {
                            setTwitter(event.target.value);
                        }
                    } /> <br />
                    <label htmlFor="">Website: </label>
                    <input className="p-2" style={{ width: '100%', border: 'none', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} type="text" name="" id="" onChange={
                        (event) => {
                            setWebsite(event.target.value);
                        }
                    } /> <br />
                    <label htmlFor="">Linkedin: </label>
                    <input className="p-2" style={{ width: '100%', border: 'none', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} type="text" name="" id="" onChange={
                        (event) => {
                            setLinkedin(event.target.value);
                        }
                    } /> <br />
                    <label htmlFor="">No of Employees : </label>
                    <input className="p-2" style={{ width: '100%', border: 'none', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} type="text" name="" id="" onChange={
                        (event) => {
                            setNoOfEmployee(event.target.value);
                        }
                    } /> <br />

                    <button onClick={handleAddInfo} className="btn btn-success mt-3">Add Info</button>


                    <h6 className="mt-5">Add Profile Picture</h6>
                    <input style={{ width: '80%' }} type="file" accept="image/png, .jpeg, .jpg" name="post-image" id="" onChange={
                        (event) => {
                            setImage(event.target.files[0]);
                        }
                    } /> <br />
                    <button className="btn btn-primary" onClick={handleAddProfilePic}>Add Profile Picture</button>

                </div>
            </div>


        </div>
    );
};

export default CompanyInfoForm;




