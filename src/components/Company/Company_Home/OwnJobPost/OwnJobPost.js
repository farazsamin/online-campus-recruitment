import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SetToken } from '../../../utilities/setToken';
import PostDetail from './PostDetail';



const OwnJobPost = () => {
    const [myJobPosts, setMyJobPosts] = useState([])
    useEffect(() => {
        SetToken(localStorage.getItem('companyToken'));
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/job/myJobsPost')
            .then(response => {
                console.log(response.data)
                setMyJobPosts(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div className="row">
            <div className="col-md-9 m-auto">
                <h1 className="text-center">My Job Posts</h1>
                {
                    myJobPosts.map(post => <PostDetail post={post}></PostDetail>)
                }
            </div>
        </div>
    );
};

export default OwnJobPost;