import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Posts from '../Posts/Posts';
import AlumniNavbar from '../Navbar/Navbar';
import data from '../../../Data/data.json'
import { post } from 'jquery';
import axios from 'axios'
import { SetToken } from '../../utilities/setToken';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import loadingPic from '../../utilities/images/loading.gif'
const PAGE_NUMBER = 0;
const AlumniHome = () => {
    const [description, setDescription] = useState('')
    const [image, setImage] = useState()
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [postBtn, setPostBtn] = useState('Add Post')
    const [page, setPage] = useState(PAGE_NUMBER)

    const handleAddPost = (e) => {
        e.preventDefault();
        setPostBtn("Posting...")
        SetToken(localStorage.getItem('alumniToken'));
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
                setPostBtn("Add Post")

            })
            .catch(err => {
                console.log(err)
                setPostBtn("Add Post")
                alert(err.response.data.error)
            })

        // window.location.reload();

    }

    useEffect(() => {
        SetToken(localStorage.getItem('alumniToken'));
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/blog/alumni/all/alumni', { params: { page: page } })
            .then(response => {
                console.log(response.data)
                setPosts([...posts, ...response.data.blogs])
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                alert(err.response.data.error)
            })
    }, [page])

    const scrollToEnd = () => {
        setPage(page + 1)
        console.log(page)
    }
    window.onscroll = function () {
        // console.log("inner", window.innerHeight)
        // console.log("top", document.documentElement.scrollTop)
        // console.log("offset", document.documentElement.offsetHeight)
        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
            console.log("workings")
            scrollToEnd()
        }
        console.log("123")

    }

    return (
        <>
            <AlumniNavbar></AlumniNavbar>
            <div className="row">

                <div className="col-md-6 m-auto " style={{ width: "80%", boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
                    <div className="form-group">
                        <h4 className="mb-2 mt-2">Add Your Post : </h4>
                        <input style={{ width: '100%', border: 'none', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} placeholder="Title" type="text" name="" id="" value={title} onChange={
                            (event) => {
                                setTitle(event.target.value);
                            }
                        } /> <br />
                        <textarea placeholder="Content" style={{ width: '100%', border: 'none', height: '100px', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="p-2 mb-3" value={description} type="text" name="post-content" id="" onChange={
                            (event) => {
                                setDescription(event.target.value);
                            }
                        } /> <br />
                        <input style={{ width: '80%' }} type="file" accept="image/png, .jpeg, .jpg" name="post-image" id="" onChange={
                            (event) => {
                                setImage(event.target.files[0]);
                            }
                        } /> <br />
                        <button onClick={handleAddPost} className="btn btn-success"><FontAwesomeIcon icon={faPlus} className="mr-2" />{postBtn}</button>
                    </div>

                    {
                        loading ? <div className="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <img className="mx-auto w-25 d-block" src={loadingPic}></img>
                                </div>
                            </div>
                        </div>
                            :
                            posts.map(post => <Posts post={post}></Posts>)
                    }

                </div>

            </div>
        </>

    );
};

export default AlumniHome;