import axios from 'axios';
import React, { useState } from 'react';
import { set } from 'react-hook-form';
import { SetToken } from '../../../utilities/setToken';

const AlumniAdd = () => {

    const [passingYear, setPassingYear] = useState('')
    const [status, setStatus] = useState('')
    const [currentJob, setCurrentJob] = useState('')
    const [githubusername, setGithubusername] = useState('')
    const [codeforcesusername, setCodeforcesusername] = useState('')
    const [linkedin, setLinkedin] = useState('')
    const [website, setWebsite] = useState('')
    const [school, setSchool] = useState('')
    const [college, setCollege] = useState('')
    const [bscPassingYear, setBscPassingYear] = useState('')
    const [title, setTitle] = useState('')
    const [company, setCompany] = useState('')
    const [location, setLocation] = useState('')
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [description, setDescription] = useState('')
    const [profilePic, setProfilePic] = useState()
    const [success, setSuccess] = useState(false)

    const handleAddToYourResume = (e) => {
        SetToken(localStorage.getItem('alumniToken'));
        e.preventDefault();

        axios.post('https://iiuc-campus-recuitement-system.herokuapp.com/profile/alumni/me', {
            passingYear: passingYear,
            status: status,
            currentJob: currentJob,
            githubusername: githubusername,
            codeforceusername: codeforcesusername,
            website: website,
            linkedin: linkedin
        })
            .then(res => {
                console.log(res)
                setPassingYear('')
                setStatus('')
                setCurrentJob('')
                setGithubusername('')
                setCodeforcesusername('')
                setWebsite('')
                setLinkedin('')
                setSuccess(true)

            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleEduInfo = (e) => {
        SetToken(localStorage.getItem('alumniToken'));
        e.preventDefault();

        axios.post('https://iiuc-campus-recuitement-system.herokuapp.com/profile/alumni/education', {
            school: school,
            college: college,
            BscPassingYear: bscPassingYear
        })
            .then(res => {
                console.log(res)
                setSchool('')
                setCollege('')
                setBscPassingYear('')
                setSuccess(true)

            })
            .catch(err => {
                console.log(err)
            })
    }


    const handleExperience = (e) => {
        SetToken(localStorage.getItem('alumniToken'));
        e.preventDefault();

        axios.post('https://iiuc-campus-recuitement-system.herokuapp.com/profile/alumni/experience', {
            title: title,
            company: company,
            location: location,
            from: from,
            to: to,
            description: description
        })
            .then(res => {
                console.log(res)
                setTitle('')
                setCompany('')
                setFrom('')
                setTo('')
                setLocation('')
                setDescription('')
                setSuccess(true)

            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleUploadPic = (e) => {
        e.preventDefault();
        let fd = new FormData();
        fd.append('profilePic', profilePic);

        axios.post('https://iiuc-campus-recuitement-system.herokuapp.com/profile/alumni/profile/me', fd)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })

        // window.location.reload();

    }

    return (
        <div className="p-5">

            <h1 className="text-center">Add Your Info</h1>
            <hr />

            <div>
                <label htmlFor="">Passing Year</label>
                <input type="text" name="" id="" value={passingYear} onChange={
                    (event) => {
                        setPassingYear(event.target.value);
                    }
                } />
                <label htmlFor="">Status</label>
                <input type="text" name="" id="" value={status} onChange={
                    (event) => {
                        setStatus(event.target.value);
                    }
                } />
                <label htmlFor="">Current Job</label>
                <input type="text" name="" id="" value={currentJob} onChange={
                    (event) => {
                        setCurrentJob(event.target.value);
                    }
                } />
                <label htmlFor="">Github User Name</label>
                <input type="text" name="" id="" value={githubusername} onChange={
                    (event) => {
                        setGithubusername(event.target.value);
                    }
                } />
                <label htmlFor="">Codeforces User Name</label>
                <input type="text" name="" id="" value={codeforcesusername} onChange={
                    (event) => {
                        setCodeforcesusername(event.target.value);
                    }
                } />
                <label htmlFor="">Website</label>
                <input type="text" name="" id="" value={website} onChange={
                    (event) => {
                        setWebsite(event.target.value);
                    }
                } />

                <label htmlFor="">LinkedIn</label>
                <input type="text" name="" id="" value={linkedin} onChange={
                    (event) => {
                        setLinkedin(event.target.value);
                    }
                } />

                <button className="btn btn-success mt-3" disabled={passingYear && status && currentJob && githubusername && codeforcesusername && website && linkedin ? false : true} onClick={handleAddToYourResume}>Add To Your Resume</button>
                {
                    success ?
                        <div style={{ width: "50%" }} class="mt-2 alert alert-success" role="alert">
                            Data Updated Successfully!
                        </div> :
                        <div></div>
                }
            </div>





            <h1 className="text-center mt-5">Add Your Educational Info</h1>
            <hr />

            <div>
                <label htmlFor="">School</label>
                <input type="text" name="" id="" value={school} onChange={
                    (event) => {
                        setSchool(event.target.value);
                    }
                } />
                <label htmlFor="">College</label>
                <input type="text" name="" id="" value={college} onChange={
                    (event) => {
                        setCollege(event.target.value);
                    }
                } />
                <label htmlFor=""> Bsc Passing Year </label>
                <input type="text" name="" id="" value={bscPassingYear} onChange={
                    (event) => {
                        setBscPassingYear(event.target.value);
                    }
                } />


                <button className="btn btn-success mt-3" disabled={school && college && bscPassingYear ? false : true} onClick={handleEduInfo}>Add To Your Resume</button>
                {
                    success ?
                        <div style={{ width: "50%" }} class="mt-2 alert alert-success" role="alert">
                            Data Updated Successfully!
                        </div> :
                        <div></div>
                }
            </div>


            <h1 className="text-center mt-5">Add Your Experience</h1>
            <hr />

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


                <button className="btn btn-success mt-3" disabled={title && company && location && from && to && description ? false : true} onClick={handleExperience}>Add To Your Resume</button>
                {
                    success ?
                        <div style={{ width: "50%" }} class="mt-2 alert alert-success" role="alert">
                            Data Updated Successfully!
                        </div> :
                        <div></div>
                }
            </div>



            <div className="mt-5">
                <h1 className="text-center">Add Your Profile Picture</h1>
                <hr />
                <input style={{ width: '80%' }} type="file" accept="image/png, .jpeg, .jpg" name="post-image" id="" onChange={
                    (event) => {
                        setProfilePic(event.target.files[0]);
                    }
                } /> <br />
                <button disabled={profilePic ? false : true} onClick={handleUploadPic} className="btn btn-success mt-3">Upload Profile Pic</button>
            </div>



        </div>


    );
};

export default AlumniAdd;