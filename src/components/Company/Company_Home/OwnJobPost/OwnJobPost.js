import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SetToken } from '../../../utilities/setToken';
import AppliedUsers from './AppliedUsers';




const OwnJobPost = () => {
    const [myJobPosts, setMyJobPosts] = useState([])

    const handleDeleteJobPost = (_id) => {
        SetToken(localStorage.getItem('companyToken'));
        axios.delete(`https://iiuc-campus-recuitement-system.herokuapp.com/job/myJob/${_id}`)
            .then(response => {
                console.log(response.data)
            })
            .catch(err => {
                console.log(err)
            })

        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/job/myJobsPost')
            .then(response => {
                console.log(response.data)
                setMyJobPosts(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        SetToken(localStorage.getItem('companyToken'));
        const allJobPost = () => {

        }
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
                    myJobPosts.map(post => {
                        const { title, description, _id } = post;
                        return (
                            <div className="container">
                                <div class="card w-75 mt-3">
                                    <div class="card-body">
                                        <h5 class="card-title">{title}</h5>
                                        <p class="card-text">{description}</p>
                                        <button onClick={() => handleDeleteJobPost(_id)} className="btn btn-danger">Delete</button>
                                        {/* <a style={{ marginLeft: '3%' }} href="f" class="btn btn-primary">Edit</a> */}
                                        <div>
                                            <h2 className="text-center mt-2 mb-2">Applied Users</h2>
                                            <AppliedUsers _id={_id}></AppliedUsers>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        )

                    })
                }
            </div>
        </div>
    );
};

export default OwnJobPost;