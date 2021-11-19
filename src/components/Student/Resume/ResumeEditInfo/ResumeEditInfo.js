import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { SetToken } from '../../../utilities/setToken';
const ResumeEditInfo = () => {

    //Edit
    const [name, setName] = useState('')
    const [skill, setSkill] = useState('')
    const [loc, setLoc] = useState('')
    const [bios, setBios] = useState('')
    const [stat, setStat] = useState('')
    const [web, setWeb] = useState('')
    const [githubName, setGithubName] = useState('')
    const [fb, setFb] = useState('')
    const [ins, setIns] = useState('')
    const [scl, setScl] = useState('')
    const [clg, setClg] = useState('')
    const [uni, setUni] = useState('')
    const [fos, setFos] = useState('')
    const [titles, setTitles] = useState('')
    const [companies, setCompanies] = useState('')
    const [comLoc, setComLoc] = useState('')
    const [frm, setFrm] = useState('')
    const [toEnd, setToEnd] = useState('')
    const [desc, setDesc] = useState('')
    const [profilePic, setProfilePic] = useState()
    const [infoOk, setInfoOk] = useState(false)
    const [eduOk, setEduOk] = useState(false)
    const [expOk, setExpOk] = useState(false)
    const [ppOk, setPPOk] = useState(false)
    const [achievement, setAchievement] = useState('')
    const [acv, setAcv] = useState('')

    //Get Start
    const [pp, setPp] = useState([])
    const [profileInfo, setProfileInfo] = useState([])
    const [socialInfo, setSocialInfo] = useState([])
    const [skills, setSkills] = useState([])
    const [education, setEducation] = useState([])
    const [experience, setExperience] = useState([])
    const [eduId, setEduId] = useState()
    const [expId, setExpId] = useState()

    useEffect(() => {
        SetToken(localStorage.getItem('userToken'));
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/profile/me/profilePic')
            .then(response => {
                setProfilePic(response.data.pic.data)
            })
            .catch(err => {
                console.log(err)
            })

        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/profile/me')
            .then(response => {
                setProfileInfo(response.data)
                setSocialInfo(response.data.social)
                setSkills(response.data.skills)
                setEducation(response.data.education[0])
                setExperience(response.data.experience[0])
                setEduId(response.data.education[0]._id)
                setExpId(response.data.experience[0]._id)
                setAcv(response.data.achievements[0])
                console.log(response.data.achievements[0])
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const { company, bio, location, status, website, githubusername } = profileInfo;

    const { school, college, university, fieldOfStudy } = education;
    const { description, from, to, title } = experience;

    //Get End

    const handleAddToYourResume = (e) => {
        SetToken(localStorage.getItem('userToken'));
        e.preventDefault();

        axios.patch('https://iiuc-campus-recuitement-system.herokuapp.com/profile/me', {
            company: name,
            skills: skill,
            location: loc,
            bio: bios,
            status: stat,
            website: web,
            githubusername: githubName,
            achievements: achievement

        })
            .then(res => {
                console.log(res)
                setName('')
                setSkill('')
                setLoc('')
                setBios('')
                setStat('')
                setWeb('')
                setGithubName('')
                setAchievement('')

                alert("Data Added Successfully")

            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleEduInfo = (e) => {
        SetToken(localStorage.getItem('userToken'));
        e.preventDefault();

        axios.patch(`https://iiuc-campus-recuitement-system.herokuapp.com/profile/me/education/${eduId}`, {
            school: scl,
            college: clg,
            university: uni,
            fieldOfStudy: fos
        })
            .then(res => {
                console.log(res)
                setScl('')
                setClg('')
                setUni('')
                setFos('')
                alert("Data Added Successfully")

            })
            .catch(err => {
                console.log(err)
            })
    }


    const handleExperience = (e) => {
        SetToken(localStorage.getItem('userToken'));
        e.preventDefault();

        axios.patch(`https://iiuc-campus-recuitement-system.herokuapp.com/profile/me/experience/${expId}`, {
            title: titles,
            company: companies,
            location: comLoc,
            from: frm,
            to: toEnd,
            description: desc
        })
            .then(res => {
                console.log(res)
                setTitles('')
                setCompanies('')
                setComLoc('')
                setFrm('')
                setToEnd('')
                setDesc('')
                alert("Data Added Successfully")

            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleUploadPic = (e) => {
        SetToken(localStorage.getItem('userToken'));

        let fd = new FormData();
        fd.append('profilePic', profilePic);

        axios.post('https://iiuc-campus-recuitement-system.herokuapp.com/profile/me/profilePic', fd)
            .then(res => {
                console.log(res)
                alert("Data Added Successfully")
            })
            .catch(err => {
                console.log(err)
            })

        // window.location.reload();

    }

    return (
        <div className="p-5">

            <h1 className="text-center">Edit Your Info</h1>
            <hr />

            <div>
                <label htmlFor="">Name</label>
                <input type="text" name="" id="" defaultValue={company} onChange={
                    (event) => {
                        setName(event.target.value);
                    }
                } />
                <label htmlFor="">Skills</label>
                <input type="text" name="" id="" defaultValue={skills} onChange={
                    (event) => {
                        setSkill(event.target.value);
                    }
                } />
                <label htmlFor="">Achievements</label>
                <input type="text" name="" id="" defaultValue={acv} onChange={
                    (event) => {
                        setAchievement(event.target.value);
                    }
                } />
                <label htmlFor="">Location</label>
                <input type="text" name="" id="" defaultValue={location} onChange={
                    (event) => {
                        setLoc(event.target.value);
                    }
                } />
                <label htmlFor="">Bio</label>
                <input type="text" name="" id="" defaultValue={bio} onChange={
                    (event) => {
                        setBios(event.target.value);
                    }
                } />
                <label htmlFor="">Status</label>
                <input type="text" name="" id="" defaultValue={status} onChange={
                    (event) => {
                        setStat(event.target.value);
                    }
                } />
                <label htmlFor="">Website</label>
                <input type="text" name="" id="" defaultValue={website} onChange={
                    (event) => {
                        setWeb(event.target.value);
                    }
                } />
                <label htmlFor="">Github Username</label>
                <input type="text" name="" id="" defaultValue={githubusername} onChange={
                    (event) => {
                        setGithubName(event.target.value);
                    }
                } />


                <button className="btn btn-success mt-3" onClick={handleAddToYourResume}>Add To Your Resume</button>

            </div>





            <h1 className="text-center mt-5">Edit Your Educational Info</h1>
            <hr />

            <div>
                <label htmlFor="">School</label>
                <input type="text" name="" id="" defaultValue={school} onChange={
                    (event) => {
                        setScl(event.target.value);
                    }
                } />
                <label htmlFor="">College</label>
                <input type="text" name="" id="" defaultValue={college} onChange={
                    (event) => {
                        setClg(event.target.value);
                    }
                } />
                <label htmlFor="">University</label>
                <input type="text" name="" id="" defaultValue={university} onChange={
                    (event) => {
                        setUni(event.target.value);
                    }
                } />
                <label htmlFor="">Field of Study</label>
                <input type="text" name="" id="" defaultValue={fieldOfStudy} onChange={
                    (event) => {
                        setFos(event.target.value);
                    }
                } />

                <button className="btn btn-success mt-3" onClick={handleEduInfo}>Add To Your Resume</button>

            </div>



            <h1 className="text-center mt-5">Edit Your Experience</h1>
            <hr />

            <div>
                <label htmlFor="">Title</label>
                <input type="text" name="" id="" defaultValue={title} onChange={
                    (event) => {
                        setTitles(event.target.value);
                    }
                } />
                <label htmlFor="">Company</label>
                <input type="text" name="" id="" defaultValue={company} onChange={
                    (event) => {
                        setCompanies(event.target.value);
                    }
                } />
                <label htmlFor="">Location</label>
                <input type="text" name="" id="" defaultValue={location} onChange={
                    (event) => {
                        setComLoc(event.target.value);
                    }
                } />
                <label htmlFor="">From</label>
                <input type="date" name="" id="" defaultValue={from} onChange={
                    (event) => {
                        setFrm(event.target.value);
                    }
                } />
                <label htmlFor="">To</label>
                <input type="date" name="" id="" defaultValue={to} onChange={
                    (event) => {
                        setToEnd(event.target.value);
                    }
                } />
                <label htmlFor="">Description</label>
                <input type="text" name="" id="" defaultValue={description} onChange={
                    (event) => {
                        setDesc(event.target.value);
                    }
                } />


                <button className="btn btn-success mt-3" onClick={handleExperience}>Add To Your Resume</button>

            </div>



            <div className="mt-5">
                <h1 className="text-center">Edit Your Profile Picture</h1>
                <hr />
                <input style={{ width: '80%' }} type="file" accept="image/png, .jpeg, .jpg" name="post-image" id="" onChange={
                    (event) => {
                        setProfilePic(event.target.files[0]);
                    }
                } /> <br />
                <button onClick={handleUploadPic} className="btn btn-success mt-3">Change  Profile Pic</button>

            </div>



        </div>

    );
};

export default ResumeEditInfo;