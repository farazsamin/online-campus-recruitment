import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Posts from '../Posts/Posts';
import AlumniNavbar from '../Navbar/Navbar';
import data from '../../../Data/data.json'
import { post } from 'jquery';
import axios from 'axios'
import { SetToken } from '../../utilities/setToken';
const AlumniHome = () => {
    const [description, setDescription] = useState('')
    const [image, setImage] = useState()
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])

    const handleAddPost = (e) => {
        e.preventDefault();
        SetToken(localStorage.getItem('userToken'));
        let fd = new FormData();
        fd.append('title', title);
        fd.append('description', description);
        fd.append('blogPic', image);
        setTitle('')
        setDescription('')
        axios.post('https://iiuc-campus-recuitement-system.herokuapp.com/blog/alumni', fd)
            .then(res => {
                console.log(res)
                setPosts([res.data, ...posts])
            })
            .catch(err => {
                console.log(err)
            })

        // window.location.reload();

    }

    useEffect(() => {
        SetToken(localStorage.getItem('alumniToken'));
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/blog/alumni/all/alumni')
            .then(response => {
                setPosts(response.data.blogs)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <AlumniNavbar></AlumniNavbar>
            <div className="row">
                <div className="col-md-4 mt-5 pt-5">

                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <p>Add Your Post : </p>
                        <input type="text" name="" id="" value={title} onChange={
                            (event) => {
                                setTitle(event.target.value);
                            }
                        } /> <br />
                        <textarea style={{ width: '80%', height: '100px' }} value={description} type="text" name="post-content" id="" onChange={
                            (event) => {
                                setDescription(event.target.value);
                            }
                        } /> <br />
                        <input style={{ width: '80%' }} type="file" accept="image/png, .jpeg, .jpg" name="post-image" id="" onChange={
                            (event) => {
                                setImage(event.target.files[0]);
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