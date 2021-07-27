import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SetToken } from '../../../utilities/setToken';

const AlumniBlog = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        SetToken(localStorage.getItem('userToken'));
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/admin/AlumniBlog/all')
            .then(response => {
                console.log(response.data.blogs)
                setPosts(response.data.blogs)

            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (

        <div>
            <h1 className="text-center">All Alumni Posts</h1>
            {
                posts.map(post =>
                    <div className="row">
                        <div className="col-md-8 m-auto text-center">
                            <div className="m-2 p-3" style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
                                <p>Author : {post.Author.name}</p>
                                <h5 className="mt-3 mb-3">Title : {post.title}</h5>
                                <img style={{ width: '100%' }} className="img-responsive" alt="Card  cap" />
                                <p className="mt-2">Description : {post.description}</p>

                            </div>
                        </div>
                    </div>


                )
            }

        </div>

    );
};

export default AlumniBlog;