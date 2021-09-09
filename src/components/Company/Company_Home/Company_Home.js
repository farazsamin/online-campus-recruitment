import React, { useEffect, useState } from 'react';
import Posts from '../Posts/Posts';
import CompanyNavbar from '../Navbar/Navbar';
import { SetToken } from '../../utilities/setToken'
import axios from 'axios'
import { Link } from 'react-router-dom';
import OwnJobPost from './OwnJobPost/OwnJobPost'
const AlumniHome = () => {
    const [posts, setposts] = useState([]);
    const [postContent, setPostContent] = useState('')
    const [postTitle, setPostTitle] = useState('')

    // const [posts, setPosts] = useState([])
    // const [loading, setLoading] = useState(true)



    const handleAddPost = (e) => {
        e.preventDefault();
        axios.post('https://iiuc-campus-recuitement-system.herokuapp.com/job/jobPost', {
            title: postTitle,
            description: postContent

        })
            .then((response) => {
                // console.log(response)
                setPostTitle('')
                setPostContent('')
            })
            .catch((err) => {
                console.log(err.response.data.err)
            })
        // window.location.reload();
    }


    useEffect(() => {
        SetToken(localStorage.getItem('companyToken'));
    }, [])

    return (
        <>
            <CompanyNavbar></CompanyNavbar>
            <div className="row">
                <div style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="col-md-2 mb-3 text-center">

                    <Link to="/search/specificUser"> <button style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="btn btn-white m-2 p-3">Search Candidates </button></Link>

                    <Link to="/company/job_post"> <button style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="btn btn-white m-2 p-3">My Job Posts</button></Link>

                </div>
                <div className="col-md-6 m-auto " style={{ width: "80%", boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
                    <div className="form-group">
                        <p>Add Your Post : </p>
                        <input placeholder="title" className="p-2" style={{ width: '100%', border: 'none', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} type="text" name="" id="" onChange={
                            (event) => {
                                setPostTitle(event.target.value);
                            }
                        } /> <br />
                        <textarea placeholder="content" className="p-2" style={{ width: '100%', border: 'none', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} type="text" name="post-content" id="" onChange={
                            (event) => {
                                setPostContent(event.target.value);
                            }
                        } /> <br />

                        <button onClick={handleAddPost} className="btn btn-success mt-3">Add Job Post</button>
                    </div>
                    {
                        posts.map(post => <Posts post={post}></Posts>)
                    }

                    <OwnJobPost></OwnJobPost>
                </div>
            </div>
        </>

    );
};

export default AlumniHome;