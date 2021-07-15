import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { SetToken } from '../../../utilities/setToken';
const ResumeEditInfo = () => {
    const [profileInfo, setProfileInfo] = useState([])
    const [socialInfo, setSocialeInfo] = useState([])
    const [name, setName] = useState('')
    const [bio, setBio] = useState('')
    const [facebook, setFacebook] = useState('')
    const [success, setSuccess] = useState(false)
    const [editInfo, setEditInfo] = useState(false)

    useEffect(() => {
        SetToken(localStorage.getItem('userToken'));
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/profile/me')
            .then(response => {
                setProfileInfo(response.data)
                setSocialeInfo(response.data.social)
                // console.log(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleAddInfo = () => {
        setEditInfo(false)
    }

    const handleEditInfo = () => {
        setEditInfo(true)
    }

    const handleSubmit = (e) => {
        SetToken(localStorage.getItem('userToken'));
        e.preventDefault();

        axios.post('https://iiuc-campus-recuitement-system.herokuapp.com/profile/me', {
            company: name,
            // skills: skills,
            // location: location,
            bio: bio,
            // status: status,
            // website: website,
            // githubUserName: githubUserName,
            facebook: facebook,
            // instagram: instagram
        })
            .then(res => {
                setSuccess(true)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="p-5">
            <h1 className="text-center">Edit Your Info </h1>
            <hr />
            <button className="btn btn-primary m-2" onClick={handleAddInfo}>Add Info</button>
            <button className="btn btn-primary m-2" onClick={handleEditInfo}>Edit Info</button>
            <button className="btn btn-danger m-2" onClick={handleEditInfo}>Delete Info</button>
            <hr />
            {
                editInfo ? <div>
                    <label htmlFor="">Name</label>
                    <input className="form-control" type="text" name="" id="" defaultValue={profileInfo.company} onChange={e => setName(e.target.value)} />
                    {console.log(name)}
                    <label htmlFor="">Bio</label>
                    <input className="form-control" type="text" name="" id="" defaultValue={profileInfo.bio} onChange={e => setBio(e.target.value)} />
                    <label htmlFor="">Facebook</label>

                    <input className="form-control" type="text" name="" id="" defaultValue={socialInfo.facebook} onChange={e => setFacebook(e.target.value)} />
                    <button onClick={handleSubmit} className="btn btn-primary mt-3">Edit</button>
                    {
                        success ? <div class="alert alert-success mt-3" role="alert">
                            Info Added Successfully!
                        </div> : <div></div>
                    }
                </div>
                    :
                    <div>
                        <label htmlFor="">Name</label>
                        <input className="form-control" type="text" name="" id="" defaultValue={profileInfo.company} onChange={e => setName(e.target.value)} />
                        {console.log(name)}
                        <label htmlFor="">Bio</label>
                        <input className="form-control" type="text" name="" id="" defaultValue={profileInfo.bio} onChange={e => setBio(e.target.value)} />
                        <label htmlFor="">Facebook</label>

                        <input className="form-control" type="text" name="" id="" defaultValue={socialInfo.facebook} onChange={e => setFacebook(e.target.value)} />
                        <button onClick={handleSubmit} className="btn btn-primary mt-3">Add</button>
                        {
                            success ? <div class="alert alert-success mt-3" role="alert">
                                Info Added Successfully!
                            </div> : <div></div>
                        }
                    </div>
            }




        </div>
    );
};

export default ResumeEditInfo;