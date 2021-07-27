import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SetToken } from '../../utilities/setToken';

const AllJobs = () => {
    const [myJobPosts, setMyJobPosts] = useState([])
    useEffect(() => {
        SetToken(localStorage.getItem('userToken'));
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/admin/allJobs')
            .then(response => {
                console.log(response.data)
                setMyJobPosts(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])



    return (
        <div>
            <h1 className="text-center">All Jobs List</h1>
            <div className="row">

                {
                    myJobPosts.map(post => <div style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="container mt-3">
                        <div className="col-md-9 p-3 m-auto text-center">

                            <h4>{post.Author.name}</h4>
                            <h5 class="card-title">{post.title}</h5>
                            <p class="card-text">{post.description}</p>
                            <a href="f" class="btn btn-danger">Delete</a>
                            <a style={{ marginLeft: '3%' }} href="f" class="btn btn-primary">Edit</a>
                            <div>
                                <Link to="/admin/appliedUsers"><button className="mt-3 btn btn-secondary">See Applied Users</button></Link>
                            </div>

                        </div>

                    </div>
                    )
                }

            </div>
        </div>
    );
};

export default AllJobs;