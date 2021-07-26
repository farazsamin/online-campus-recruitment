import React, { useEffect, useState } from 'react';
import { SetToken } from '../../utilities/setToken';
import axios from 'axios'
import JobPost from './JobPost';
import StudentNavbar from '../Navbar/Navbar';
const AllJobPosts = () => {
    const [jobPosts, setJobPosts] = useState([])
    useEffect(() => {
        SetToken(localStorage.getItem('userToken'));
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/allJobs')
            .then(response => {
                console.log(response.data)
                setJobPosts(response.data)
            })
            .catch(err => {
                console.log(err.response.data.err)
            })
    }, [])
    return (
        <div>
            <StudentNavbar></StudentNavbar>
            <h1 className="text-center mt-3 mb-3">All Job Posts</h1>
            {
                jobPosts.map(post => <JobPost post={post}></JobPost>)
            }
        </div>
    );
};

export default AllJobPosts;