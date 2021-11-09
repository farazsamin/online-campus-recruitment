import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SetToken } from '../../utilities/setToken';
import StudentNavbar from '../Navbar/Navbar';
import MyJobPost from './MyJobPost';
import loadingPic from '../../utilities/images/loading.gif'
const MyAppliedJobs = () => {
    const [jobPosts, setJobPosts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        SetToken(localStorage.getItem('userToken'));
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/my/appliedjobs')
            .then(response => {
                console.log(response)
                setJobPosts(response.data)
                setLoading(false)
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
                loading ? <div className="container">
                    <div class="row">
                        <div class="col-md-12">
                            <img className="mx-auto w-25 d-block" src={loadingPic}></img>
                        </div>
                    </div>
                </div>
                    :
                    jobPosts.map(post => <MyJobPost post={post}></MyJobPost>)
            }
        </div>
    );
};

export default MyAppliedJobs;