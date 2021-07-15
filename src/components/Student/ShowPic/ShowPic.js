import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { SetToken } from '../../utilities/setToken';
import innerBox from './ShowPic.css'
const ShowPic = () => {

    const [profilePic, setProfilePic] = useState([])
    const [profileInfo, setProfileInfo] = useState([])
    const [socialInfo, setSocialInfo] = useState([])
    const [skills, setSkills] = useState([])
    const [education, setEducation] = useState([])
    const [experience, setExperience] = useState([])

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
                console.log(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    let img = new Buffer.from(profilePic).toString('base64');
    img = `data:image/jpg;base64,${img}`;

    const { company, bio, location, status, website } = profileInfo;
    const { facebook, instagram } = socialInfo;
    const { school, college, university, fieldOfStudy } = education;
    const { description, from, to, title } = experience;

    return (
        <div className="row mt-3 mb-5">


            <div className="col-md-9 m-auto text-center" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                {/* { console.log(img)} */}
                <img style={{ margin: '1%', height: '20%', width: '20%', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }} className="rounded-circle" src={img} alt="" />


                <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }}>
                    <h2>Hello , I am {company}</h2>
                    <h5>{status}</h5>
                    <p>Bio : {bio}</p>
                    <a class="btn btn-primary" style={{ backgroundColor: '#3b5998' }} rel="noreferrer" target="_blank" href={website} role="button"
                    ><i class="fab fa-facebook-f">Website</i>
                    </a>
                    <a class="btn btn-primary m-2" style={{ backgroundColor: '#3b5998' }} rel="noreferrer" target="_blank" href={facebook} role="button"
                    ><i class="fab fa-facebook-f">Github</i>
                    </a>
                    <a class="btn btn-primary" style={{ backgroundColor: '#3b5998' }} rel="noreferrer" target="_blank" href={instagram} role="button"
                    ><i class="fab fa-facebook-f">LinkedIn</i>
                    </a>

                    <p>Location :  {location}</p>
                    <br />
                </div>


                <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }}>
                    <h2>Skills</h2>
                    <p>{skills + ' '}</p>
                    <br />
                </div>




                <h2 className="mb-2" style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }}>Projects</h2>
                <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }}>
                    <h2 className="mb-2">Education </h2>
                    <p>University : {university}</p>
                    <p>Field of Study : {fieldOfStudy}</p>
                    <p>HSC : {college}</p>
                    <p>SSC : {school}</p>
                    <br />
                </div>
                <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', margin: '2% 5%', padding: '1%' }}>
                    <h2>Experience</h2>
                    <p>Company Name : {experience.company}</p>
                    <p>Title : {title}</p>
                    <p>Description : {description}</p>
                    <p>From : {from}</p>
                    <p>To : {to}</p>
                    <p>Location : {experience.location}</p>
                </div>

            </div>
        </div>

    );
};

export default ShowPic;