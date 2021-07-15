import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Posts from '../Posts/Posts';
import AdminNavbar from '../Navbar/Navbar';
import data from '../../../Data/data.json'
import { post } from 'jquery';
import axios from 'axios'
const AlumniHome = () => {
    const [posts, setposts] = useState([]);
    const [postContent, setPostContent] = useState('')
    const [postImage, setPostImage] = useState()
    // const [posts, setPosts] = useState([])
    // const [loading, setLoading] = useState(true)

    const handleAddPost = () => {
        console.log(postContent)
        axios.post('', {
            postContent: postContent,
            postImage : postImage
        })
            .then((response) => {
                console.log(response)
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
        setposts(data);
    }, [])
    return (
        <>
            <AdminNavbar></AdminNavbar>
            <div className="row">
                <div className="col-md-4 mt-5 pt-5">
                    <Sidebar></Sidebar>
                    <Sidebar></Sidebar>
                    <Sidebar></Sidebar>
                    <Sidebar></Sidebar>
                    <Sidebar></Sidebar>
                    <Sidebar></Sidebar>
                    <Sidebar></Sidebar>
                    <Sidebar></Sidebar>
                    <Sidebar></Sidebar>
                    <Sidebar></Sidebar>
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <p>Add Your Post : </p>
                        <textarea style={{ width: '600px', height: '100px' }} type="text" name="post-content" id="" onChange={
                            (event) => {
                                setPostContent(event.target.value);
                            }
                        } /> <br />
                         <input style={{width: '80%'}} type="file" name="post-image" id="" onChange={
                            (event) => {
                                setPostImage(event.target.value);
                            }
                        } /> <br/>
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