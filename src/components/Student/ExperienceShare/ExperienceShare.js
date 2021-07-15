import React, { useState } from 'react';
import axios from 'axios'
import { SetToken } from '../../utilities/setToken';
const ExperienceShare = () => {
    const [title, setTitle] = useState('')
    const [company, setCompany] = useState('')
    const [location, setLocation] = useState('')
    const [from, setFrom] = useState()
    const [to, setTo] = useState()
    const [description, setDescription] = useState('')
    const [editInfo, setEditInfo] = useState(false)
    const handleAddToYourExperience = (e) => {
        SetToken(localStorage.getItem('userToken'));
        e.preventDefault();
        axios.post('https://iiuc-campus-recuitement-system.herokuapp.com/profile/me/experience', {
            title: title,
            company: company,
            location: location,
            from: from,
            to: to,
            description: description
        })
            .then(res => {
                console.log(res)

            })
            .catch(err => {
                console.log(err.response.data.err)
            })
    }
    const handleAddInfo = () => {
        setEditInfo(false)
    }

    const handleEditInfo = () => {
        setEditInfo(true)
    }

    return (
        <div className="p-5">
            <h1 className="text-center">Add Your Experience</h1>
            <hr />
            <button className="btn btn-primary m-2" onClick={handleAddInfo}>Add Info</button>
            <button className="btn btn-primary m-2" onClick={handleEditInfo}>Edit Info</button>
            <button className="btn btn-danger m-2" onClick={handleEditInfo}>Delete Info</button>
            <hr />

            {editInfo ?
                <div>
                    <label htmlFor="">Title</label>
                    <input type="text" name="" id="" value={title} onChange={
                        (event) => {
                            setTitle(event.target.value);
                        }
                    } />
                    <label htmlFor="">Company</label>
                    <input type="text" name="" id="" value={company} onChange={
                        (event) => {
                            setCompany(event.target.value);
                        }
                    } />
                    <label htmlFor="">Location</label>
                    <input type="text" name="" id="" value={location} onChange={
                        (event) => {
                            setLocation(event.target.value);
                        }
                    } />
                    <label htmlFor="">From</label>
                    <input type="date" name="" id="" value={from} onChange={
                        (event) => {
                            console.log(event.target.value)
                            setFrom(event.target.value);
                        }
                    } />
                    <label htmlFor="">To</label>
                    <input type="date" name="" id="" value={to} onChange={
                        (event) => {
                            setTo(event.target.value);
                        }
                    } />
                    <label htmlFor="">Description</label>
                    <input type="text" name="" id="" value={description} onChange={
                        (event) => {
                            setDescription(event.target.value);
                        }
                    } />

                    <button className="btn btn-success mt-3" onClick={handleAddToYourExperience}>Edit To Your Experience</button>
                </div>
                :
                <div>
                    <label htmlFor="">Title</label>
                    <input type="text" name="" id="" value={title} onChange={
                        (event) => {
                            setTitle(event.target.value);
                        }
                    } />
                    <label htmlFor="">Company</label>
                    <input type="text" name="" id="" value={company} onChange={
                        (event) => {
                            setCompany(event.target.value);
                        }
                    } />
                    <label htmlFor="">Location</label>
                    <input type="text" name="" id="" value={location} onChange={
                        (event) => {
                            setLocation(event.target.value);
                        }
                    } />
                    <label htmlFor="">From</label>
                    <input type="date" name="" id="" value={from} onChange={
                        (event) => {
                            console.log(event.target.value)
                            setFrom(event.target.value);
                        }
                    } />
                    <label htmlFor="">To</label>
                    <input type="date" name="" id="" value={to} onChange={
                        (event) => {
                            setTo(event.target.value);
                        }
                    } />
                    <label htmlFor="">Description</label>
                    <input type="text" name="" id="" value={description} onChange={
                        (event) => {
                            setDescription(event.target.value);
                        }
                    } />

                    <button className="btn btn-success mt-3" onClick={handleAddToYourExperience}>Add To Your Experience</button>
                </div>
            }

        </div>
    );
};

export default ExperienceShare;