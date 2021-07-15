import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { SetToken } from '../../utilities/setToken';
const EducationInfo = () => {
    const [scl, setSchool] = useState('')
    const [clg, setCollege] = useState('')
    const [uni, setUniversity] = useState('')
    const [field, setFieldOfStudy] = useState('')
    const [educationInfo, setEducationInfo] = useState([])
    const [editInfo, setEditInfo] = useState(false)

    useEffect(() => {
        SetToken(localStorage.getItem('userToken'));
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/profile/me')
            .then(response => {
                setEducationInfo(response.data.education[0])
                console.log(response.data.education[0])
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    const handleAddToYourEducationalInfo = (e) => {
        SetToken(localStorage.getItem('userToken'));
        e.preventDefault();

        axios.post('https://iiuc-campus-recuitement-system.herokuapp.com/profile/me/education', {
            school: scl,
            college: clg,
            university: uni,
            fieldOfStudy: field
        })
            .then(res => {
                console.log(res)
                setSchool('')
                setCollege('')
                setUniversity('')
                setFieldOfStudy('')

            })
            .catch(err => {
                console.log(err)
            })
    }
    const { school, college, university, fieldOfStudy } = educationInfo
    const handleAddInfo = () => {
        setEditInfo(false)
    }

    const handleEditInfo = () => {
        setEditInfo(true)
    }
    return (
        <div className="p-5">
            <h1 className="text-center">Add Your Education Info</h1>
            <hr />
            <button className="btn btn-primary m-2" onClick={handleAddInfo}>Add Info</button>
            <button className="btn btn-primary m-2" onClick={handleEditInfo}>Edit Info</button>
            <button className="btn btn-danger m-2" onClick={handleEditInfo}>Delete Info</button>
            <hr />

            {
                editInfo ?
                    <div>
                        <label htmlFor="">School</label>
                        <input type="text" name="" id="" defaultValue={school} onChange={
                            (event) => {
                                setSchool(event.target.value);
                            }
                        } />
                        <label htmlFor="">College</label>
                        <input type="text" name="" id="" defaultValue={college} onChange={
                            (event) => {
                                setCollege(event.target.value);
                            }
                        } />
                        <label htmlFor="">University</label>
                        <input type="text" name="" id="" defaultValue={university} onChange={
                            (event) => {
                                setUniversity(event.target.value);
                            }
                        } />
                        <label htmlFor="">Field Of Study</label>
                        <input type="text" name="" id="" defaultValue={fieldOfStudy} onChange={
                            (event) => {
                                setFieldOfStudy(event.target.value);
                            }
                        } />


                        <button className="btn btn-success mt-3" onClick={handleAddToYourEducationalInfo}>Edit To Your Education</button>
                    </div>
                    :
                    <div>
                        <label htmlFor="">School</label>
                        <input type="text" name="" id="" defaultValue={school} onChange={
                            (event) => {
                                setSchool(event.target.value);
                            }
                        } />
                        <label htmlFor="">College</label>
                        <input type="text" name="" id="" defaultValue={college} onChange={
                            (event) => {
                                setCollege(event.target.value);
                            }
                        } />
                        <label htmlFor="">University</label>
                        <input type="text" name="" id="" defaultValue={university} onChange={
                            (event) => {
                                setUniversity(event.target.value);
                            }
                        } />
                        <label htmlFor="">Field Of Study</label>
                        <input type="text" name="" id="" defaultValue={fieldOfStudy} onChange={
                            (event) => {
                                setFieldOfStudy(event.target.value);
                            }
                        } />


                        <button className="btn btn-success mt-3" onClick={handleAddToYourEducationalInfo}>Add To Your Education</button>
                    </div>

            }
        </div>
    );
};

export default EducationInfo;