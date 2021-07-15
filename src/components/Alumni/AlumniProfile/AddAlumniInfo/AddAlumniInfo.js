import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SetToken } from '../../../utilities/setToken';

const AddAlumniInfo = () => {
    const [passingYear, setPassingYear] = useState('')
    const [currentJob, setCurrentJob] = useState('')
    const [about, setAbout] = useState('')
    const [facebook, setFacebook] = useState('')
    
    const handleAddToYourInfo = (e) => {
        SetToken(localStorage.getItem('userToken'));
        e.preventDefault();
    
        axios.post('https://iiuc-campus-recuitement-system.herokuapp.com/profile/alumni/me',{
        passingYear: passingYear, 
        currentJob : currentJob,
        about : about,
        facebook : facebook

        })
            .then(res => {
                console.log(res)
              
            })
            .catch(err => {
                console.log(err.response.data.err)
            })
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <h1 className="text-center">Add Your Info</h1>
                    <label htmlFor="">Passing Year</label>
                    <input type="text" name="" id="" value={passingYear} onChange={
                        (event) => {
                            setPassingYear(event.target.value);
                        }
                    } />
                    <label htmlFor="">Current Job</label>
                    <input type="text" name="" id="" value={currentJob} onChange={
                        (event) => {
                            setCurrentJob(event.target.value);
                        }
                    } />
                    <label htmlFor="">About</label>
                    <input type="text" name="" id="" value={about} onChange={
                        (event) => {
                           setAbout(event.target.value);
                        }
                    } />
                    <label htmlFor="">Facebook</label>
                    <input type="text" name="" id="" value={facebook} onChange={
                        (event) => {
                            setFacebook(event.target.value);
                        }
                    } />
                     <button className="btn btn-success mt-3" onClick={handleAddToYourInfo}>Add To Your Experience</button>
                </div>
            </div>

        </div>
    );
};

export default AddAlumniInfo;