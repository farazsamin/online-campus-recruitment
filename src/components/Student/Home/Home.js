import React, { useEffect, useState } from 'react';
import Posts from '../Posts/Posts';
import StudentNavbar from '../Navbar/Navbar';
import axios from 'axios'
import { SetToken } from '../../utilities/setToken';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faChalkboard, faComment, faHandPointUp, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import './Home.css'
const Home = () => {
    // const [posts, setposts] = useState([]);
    const [description, setDescription] = useState('')
    const [image, setImage] = useState()
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [postBtn, setPostBtn] = useState('Add Post')
    // const [loading, setLoading] = useState(true)

    const handleAddPost = (e) => {
        setPostBtn("Posting...")
        e.preventDefault();
        let fd = new FormData();
        fd.append('blogPic', image);
        fd.append('title', title);
        fd.append('description', description);
        setTitle('')
        setDescription('')
        axios.post('https://iiuc-campus-recuitement-system.herokuapp.com/blog/user', fd)
            .then(res => {
                console.log(res)
                setPosts([res.data, ...posts])
                setPostBtn("Add Post")
            })
            .catch(err => {
                console.log(err)
            })

        // window.location.reload();

    }
    // useEffect(() => {
    //     axios.get('', { headers: {"Authorization" : `Bearer ${sessionStorage.getItem('token')}`} })
    //     .then((response) => {
    //         setPosts(response.data)
    //         setLoading(false)
    //     })
    // }, [])

    useEffect(() => {
        SetToken(localStorage.getItem('userToken'));
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/blog/user/all/user')
            .then(response => {
                console.log(response)
                setPosts(response.data.blogs)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    // if(!localStorage.getItem('userToken')){
    //     return <Redirect to="/login/student"></Redirect>
    // }
    return (
        <>
            <StudentNavbar></StudentNavbar>
            <div className="row">

                <div style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="col-md-2 mb-3 text-center">
                    <Link to="all_job_posts"><button style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="btn btn-white m-2 p-3"><FontAwesomeIcon icon={faBell} className="mr-2" />See All Job Posts </button></Link>
                    <Link to="blog/alumni/all/user"><button style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="btn btn-white m-2 p-3"><FontAwesomeIcon icon={faUserGraduate} className="mr-2" />See All Alumni Posts</button></Link>

                    <Link to="my/appliedjobs"><button style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="btn btn-white m-2 p-3"><FontAwesomeIcon icon={faHandPointUp} className="mr-2" />Applied Job Posts</button></Link>
                    <Link to="/studentContestRanking"><button style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="btn btn-white m-2 p-3"><FontAwesomeIcon icon={faChalkboard} className="mr-2" />Contest Results</button></Link>

                </div>
                <div className="col-md-6 m-auto " style={{ width: "80%", boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
                    <div className="form-group">
                        <p className="mt-3">Add Your Post : </p>
                        <input style={{ width: '100%', border: 'none', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} type="text" name="" id="" className="p-2" placeholder="Your Post Title" value={title} onChange={
                            (event) => {
                                setTitle(event.target.value);
                            }
                        } /> <br />
                        <textarea style={{ width: '100%', border: 'none', height: '100px', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="p-2 mb-3" placeholder="Your Post Content" value={description} type="text" name="post-content" id="" onChange={
                            (event) => {
                                setDescription(event.target.value);
                            }
                        } /> <br />

                        <input type="file" accept="image/png, .jpeg, .jpg" name="post-image" id="" onChange={
                            (event) => {
                                setImage(event.target.files[0]);
                            }
                        } /> <br />

                        <button onClick={handleAddPost} className="btn btn-success mt-3">{postBtn}</button>
                    </div>
                    {
                        posts.map(post => <Posts post={post}></Posts>)
                    }

                </div>
            </div>
        </>

    );
};

export default Home;