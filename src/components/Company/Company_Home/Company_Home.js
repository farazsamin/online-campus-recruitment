import React, { useEffect, useState } from 'react';
import Posts from '../Posts/Posts';
import CompanyNavbar from '../Navbar/Navbar';
import { SetToken } from '../../utilities/setToken'
import axios from 'axios'
import { Link } from 'react-router-dom';
import OwnJobPost from './OwnJobPost/OwnJobPost'
import AppliedUsers from './OwnJobPost/AppliedUsers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCaretRight, faPlus, faPoll, faPollH, faSearch } from '@fortawesome/free-solid-svg-icons';
import loadingPic from '../../utilities/images/loading.gif'
const AlumniHome = () => {

    const [postContent, setPostContent] = useState('')
    const [postTitle, setPostTitle] = useState('')
    const [jobPost, setJobPost] = useState('Add Job Post')
    const [loading, setLoading] = useState(true)

    // const [posts, setPosts] = useState([])
    // const [loading, setLoading] = useState(true)
    const [myJobPosts, setMyJobPosts] = useState([])

    const handleDeleteJobPost = (_id) => {
        SetToken(localStorage.getItem('companyToken'));
        axios.delete(`https://iiuc-campus-recuitement-system.herokuapp.com/job/myJob/${_id}`)
            .then(response => {
                console.log(response.data)
                axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/job/myJobsPost')
                    .then(response => {
                        console.log(response.data)
                        setMyJobPosts(response.data)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch(err => {
                console.log(err)
            })


    }
    useEffect(() => {
        SetToken(localStorage.getItem('companyToken'));

        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/job/myJobsPost')
            .then(response => {
                console.log(response.data)
                setMyJobPosts(response.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])



    const handleAddPost = (e) => {
        e.preventDefault();
        setJobPost("Adding Job Post..")
        axios.post('https://iiuc-campus-recuitement-system.herokuapp.com/job/jobPost', {
            title: postTitle,
            description: postContent

        })
            .then((response) => {
                // console.log(response)
                setPostTitle('')
                setPostContent('')
                setJobPost("Add Job Post")
                axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/job/myJobsPost')
                    .then(response => {
                        console.log(response.data)
                        setMyJobPosts(response.data)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch((err) => {
                console.log(err.response.data.error)
                setJobPost("Add Job Post")
                alert(err.response.data.error)
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

                    <Link to="/search/specificUser"> <button style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="btn btn-white m-2 p-3"><FontAwesomeIcon icon={faSearch} className="mr-2" />Search Candidates </button></Link>

                    <Link to="/company/job_post"> <button style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="btn btn-white m-2 p-3"><FontAwesomeIcon icon={faCaretRight} className="mr-2" />My Job Posts</button></Link>
                    <Link to="/studentContestRanking"> <button style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="btn btn-white m-2 p-3"><FontAwesomeIcon icon={faPoll} className="mr-2" />See Contest Result</button></Link>
                    <Link to="/company/add_info"> <button style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="btn btn-white m-2 p-3"><FontAwesomeIcon icon={faPlus} className="mr-2" />Add Info to Profile</button></Link>

                </div>
                <div className="col-md-6 m-auto " style={{ width: "80%", boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
                    <div className="form-group">
                        <p>Add Your Job Post : </p>
                        <input placeholder="title" className="p-2" style={{ width: '100%', border: 'none', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} type="text" name="" id="" value={postTitle} onChange={
                            (event) => {
                                setPostTitle(event.target.value);
                            }
                        } /> <br />
                        <textarea placeholder="content" className="p-2" style={{ width: '100%', border: 'none', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} type="text" name="post-content" id="" value={postContent} onChange={
                            (event) => {
                                setPostContent(event.target.value);
                            }
                        } /> <br />

                        <button onClick={handleAddPost} className="btn btn-success mt-3"><FontAwesomeIcon icon={faPlus} className="mr-2" />{jobPost}</button>
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
                            myJobPosts.map(post => {
                                const { title, description, _id } = post;
                                return (
                                    <div style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="row mb-5">
                                        <div class="col-md-9 m-auto">
                                            <div class="card-body">
                                                <h5 style={{ fontWeight: "bolder" }} class="card-title">{title}</h5>
                                                <p style={{ lineHeight: 1.6, fontSize: "18px", letterSpacing: 1, color: "#5e5a5a" }} class="card-text">{description}</p>
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
        </>

    );
};

export default AlumniHome;