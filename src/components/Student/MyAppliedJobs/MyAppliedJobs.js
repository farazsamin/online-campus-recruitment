import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SetToken } from '../../utilities/setToken';
import StudentNavbar from '../Navbar/Navbar';
import MyJobPost from './MyJobPost';

const MyAppliedJobs = () => {
    const [jobPosts, setJobPosts] = useState([])
    useEffect(() => {
        SetToken(localStorage.getItem('userToken'));
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/my/appliedjobs')
            .then(response => {
                console.log(response)
                setJobPosts(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div>
            <StudentNavbar></StudentNavbar>
            <h1 className="text-center mt-3 mb-3">All Applied Job Posts</h1>
            {
                jobPosts.map(post => <MyJobPost post={post}></MyJobPost>)
            }
        </div>
    );
};

export default MyAppliedJobs;