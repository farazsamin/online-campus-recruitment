import React, { useEffect, useState } from 'react';
import Posts from '../Posts/Posts';
import CompanyNavbar from '../Navbar/Navbar';
import { SetToken } from '../../utilities/setToken'
import axios from 'axios'
import { Link } from 'react-router-dom';
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


    // useEffect(() => {
    //     axios.get('').then((response) => {
    //         setPosts(response.data)
    //         setLoading(false)
    //     })
    // }, [])

    useEffect(() => {
        SetToken(localStorage.getItem('userToken'));
    }, [])
    return (
        <>
            <CompanyNavbar></CompanyNavbar>
            <div className="row">
                <div className="col-md-4  mt-5 pt-5">
                    <Link to="/company/job_post"> <button className="btn btn-success">My Job Posts</button></Link>
                    <Link to="/company/job_post"> <button className="btn btn-success">My Job Posts</button></Link>
                   
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <p>Add Your Post : </p>
                        <input type="text" name="" id="" onChange={
                            (event) => {
                                setPostTitle(event.target.value);
                            }
                        } /> <br />
                        <textarea style={{ width: '600px', height: '100px' }} type="text" name="post-content" id="" onChange={
                            (event) => {
                                setPostContent(event.target.value);
                            }
                        } /> <br />

                        <button onClick={handleAddPost} className="btn btn-success mt-3">Add Post</button>
                    </div>
                    {
                        posts.map(post => <Posts post={post}></Posts>)
                    }

                </div>
            </div>
        </>

    );
};

export default AlumniHome;