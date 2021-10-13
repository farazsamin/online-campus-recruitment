import React, { useEffect, useState } from 'react';
import './ResumeAdd.css'
import axios from 'axios'
import { SetToken } from '../../utilities/setToken';
const ResumeAdd = () => {
    const [name, setName] = useState('')
    const [skills, setSkills] = useState([])
    const [location, setLocation] = useState('')
    const [bio, setBio] = useState('')
    const [status, setStatus] = useState('')
    const [website, setWebsite] = useState('')
    const [githubUserName, setGithubUserName] = useState('')
    const [facebook, setFacebook] = useState('')
    const [instagram, setInstagram] = useState('')
    const [school, setSchool] = useState('')
    const [clg, setClg] = useState('')
    const [uni, setUni] = useState('')
    const [fos, setFos] = useState('')
    const [title, setTitle] = useState('')
    const [company, setCompany] = useState('')
    const [comLoc, setComLoc] = useState('')
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [desc, setDesc] = useState('')
    const [profilePic, setProfilePic] = useState()
    const [codeforceusername, setCodeforceusername] = useState('')
    const [success, setSuccess] = useState(false)

    const handleAddToYourResume = (e) => {
        SetToken(localStorage.getItem('userToken'));
        e.preventDefault();
        console.log(githubUserName)
        axios.post('https://iiuc-campus-recuitement-system.herokuapp.com/profile/me', {
            company: name,
            skills: skills,
            location: location,
            bio: bio,
            status: status,
            website: website,
            githubusername: githubUserName,
            facebook: facebook,
            instagram: instagram,
            codeforceusername: codeforceusername
        })
            .then(res => {
                console.log(res)
                setName('')
                setSkills('')
                setLocation('')
                setBio('')
                setStatus('')
                setWebsite('')
                setGithubUserName('')
                setFacebook('')
                setInstagram('')
                setCodeforceusername('')
                setSuccess(true)

            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleEduInfo = (e) => {
        SetToken(localStorage.getItem('userToken'));
        e.preventDefault();

        axios.post('https://iiuc-campus-recuitement-system.herokuapp.com/profile/me/education', {
            school: school,
            college: clg,
            university: uni,
            fieldOfStudy: fos
        })
            .then(res => {
                console.log(res)
                setSchool('')
                setClg('')
                setUni('')
                setFos('')
                setSuccess(true)

            })
            .catch(err => {
                console.log(err)
            })
    }


    const handleExperience = (e) => {
        SetToken(localStorage.getItem('userToken'));
        e.preventDefault();

        axios.post('https://iiuc-campus-recuitement-system.herokuapp.com/profile/me/experience', {
            title: title,
            company: company,
            location: comLoc,
            from: from,
            to: to,
            description: desc
        })
            .then(res => {
                console.log(res)
                setTitle('')
                setCompany('')
                setComLoc('')
                setFrom('')
                setTo('')
                setDesc('')
                setSuccess(true)

            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleUploadPic = (e) => {

        let fd = new FormData();
        fd.append('profilePic', profilePic);

        axios.post('https://iiuc-campus-recuitement-system.herokuapp.com/profile/me/profilePic', fd)
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
                <label htmlFor="">Name</label>
                <input type="text" name="" id="" value={name} onChange={
                    (event) => {
                        setName(event.target.value);
                    }
                } />
                <label htmlFor="">Skills</label>
                <input type="text" name="" id="" value={skills} onChange={
                    (event) => {
                        setSkills(event.target.value);
                    }
                } />
                <label htmlFor="">Location</label>
                <input type="text" name="" id="" value={location} onChange={
                    (event) => {
                        setLocation(event.target.value);
                    }
                } />
                <label htmlFor="">Bio</label>
                <input type="text" name="" id="" value={bio} onChange={
                    (event) => {
                        setBio(event.target.value);
                    }
                } />
                <label htmlFor="">Status</label>
                <input type="text" name="" id="" value={status} onChange={
                    (event) => {
                        setStatus(event.target.value);
                    }
                } />
                <label htmlFor="">Website</label>
                <input type="text" name="" id="" value={website} onChange={
                    (event) => {
                        setWebsite(event.target.value);
                    }
                } />
                <label htmlFor="">Codeforces Username</label>
                <input type="text" name="" id="" value={codeforceusername} onChange={
                    (event) => {
                        setCodeforceusername(event.target.value);
                    }
                } />
                <label htmlFor="">Github Username</label>
                <input type="text" name="" id="" value={githubUserName} onChange={
                    (event) => {
                        setGithubUserName(event.target.value);
                    }
                } />
                <label htmlFor="">LinkedIn</label>
                <input type="text" name="" id="" value={facebook} onChange={
                    (event) => {
                        setFacebook(event.target.value);
                    }
                } />

                <button className="btn btn-success mt-3" disabled={name && skills && location && bio && status && website && githubUserName && facebook ? false : true} onClick={handleAddToYourResume}>Add To Your Resume</button>
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
                <input type="text" name="" id="" value={clg} onChange={
                    (event) => {
                        setClg(event.target.value);
                    }
                } />
                <label htmlFor="">University</label>
                <input type="text" name="" id="" value={uni} onChange={
                    (event) => {
                        setUni(event.target.value);
                    }
                } />
                <label htmlFor="">Field of Study</label>
                <input type="text" name="" id="" value={fos} onChange={
                    (event) => {
                        setFos(event.target.value);
                    }
                } />

                <button className="btn btn-success mt-3" disabled={school && clg && uni && fos ? false : true} onClick={handleEduInfo}>Add To Your Resume</button>
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
                <input type="text" name="" id="" value={comLoc} onChange={
                    (event) => {
                        setComLoc(event.target.value);
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
                <input type="text" name="" id="" value={desc} onChange={
                    (event) => {
                        setDesc(event.target.value);
                    }
                } />


                <button className="btn btn-success mt-3" disabled={title && company && comLoc && from && to && desc ? false : true} onClick={handleExperience}>Add To Your Resume</button>
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

export default ResumeAdd;


// {
//     "company":"To-to", "skills":"web,app", "location":"chottogram", "bio":"wanna be someone big", "status":"student", "website":"https://ahmadmuztaba.github.io/CV/", "githubusername":"AhmadMuztaba",
//             "facebook":"https://www.facebook.com/A.M.AhmadMuztaba/", 
//             "instagram":"https://www.instagram.com/a.m.ahmadmuztaba/"
// }