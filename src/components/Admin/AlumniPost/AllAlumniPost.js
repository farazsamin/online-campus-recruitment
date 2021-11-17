import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SetToken } from '../../utilities/setToken';


const AllAlumniPost = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        SetToken(localStorage.getItem('adminToken'));
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/admin/AlumniBlog/all')
            .then(response => {
                console.log(response)
                setPosts(response.data.blogs)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleDelelteAlumniPost = (_id) => {

        SetToken(localStorage.getItem('adminToken'));
        axios.delete(`https://iiuc-campus-recuitement-system.herokuapp.com/delete/admin/AlumniBlog/${_id}`)
            .then(response => {
                console.log(response.data)
                axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/admin/AlumniBlog/all')
                    .then(response => {
                        console.log(response.data)
                        setPosts(response.data.blogs)

                    })
                    .catch(err => {
                        console.log(err)
                    })

            })
            .catch(err => {
                console.log(err)
            })


    }

    return (
        <div>
            <h2 className="mt-5 text-center">All Alumni Blogs</h2>
            {
                posts.map(post => {
                    const { _id, title, description, image, Author } = post;

                    let img = new Buffer.from(image.data).toString('base64');
                    img = `data:image/jpg;base64,${img}`;
                    return (
                        <div>

                            <div className="row mt-5">

                                <div className="m-auto p-3 col-md-6" style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
                                    <Link to={`/see-alumni-profile/${Author._id}`}><p>{Author.name}</p></Link>
                                    <h5 className="mt-3 mb-3">{title}</h5>
                                    <img style={{ width: '100%' }} className="img-responsive" src={img} alt="Card  cap" />
                                    <p className="mt-2">{description}</p>
                                    <button onClick={() => handleDelelteAlumniPost(_id)} className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                }

                )
            }
        </div>
    );
};

export default AllAlumniPost;