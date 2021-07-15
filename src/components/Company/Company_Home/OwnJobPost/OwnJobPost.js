import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SetToken } from '../../../utilities/setToken';
import PostDetail from './PostDetail';



const OwnJobPost = () => {
    const [myJobPosts, setMyJobPosts] = useState([])
    useEffect(() => {
        SetToken(localStorage.getItem('userToken'));
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/job/myJobsPost')
        .then(response=>{
            console.log(response.data)
            setMyJobPosts(response.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])
    return (
        <div>
            <h1 className="text-center mb-5 mt-3">My Job Posts</h1>
            {
                myJobPosts.map(post => <PostDetail post={post}></PostDetail>)
            }
        </div>
    );
};

export default OwnJobPost;