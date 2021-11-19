import React, { useEffect, useState } from 'react';
import Posts from '../Posts/Posts';
import StudentNavbar from '../Navbar/Navbar';
import axios from 'axios'
import { SetToken } from '../../utilities/setToken';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faChalkboard, faComment, faHandPointUp, faPlus, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import './Home.css'
import loadingPic from '../../utilities/images/loading.gif'

const PAGE_NUMBER = 0;
const Home = () => {
    // const [posts, setposts] = useState([]);
    const [description, setDescription] = useState('')
    const [image, setImage] = useState()
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [postBtn, setPostBtn] = useState('Add Post')
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(PAGE_NUMBER)
    const [end, setEnd] = useState(false)

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
                console.log(res.data)
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
    // useEffect(() => {
    //     axios.get('', { headers: {"Authorization" : `Bearer ${sessionStorage.getItem('token')}`} })
    //     .then((response) => {
    //         setPosts(response.data)
    //         setLoading(false)
    //     })
    // }, [])

    useEffect(() => {
        SetToken(localStorage.getItem('userToken'));
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/blog/user/all/user', { params: { page: page } })
            .then(response => {
                console.log(response.data.blogs)
                // console.log(posts)
                setLoading(false)
                setPosts([...posts, ...response.data.blogs])
            })
            .catch(err => {
                console.log(err)

            })
    }, [page])
    // if(!localStorage.getItem('userToken')){
    //     return <Redirect to="/login/student"></Redirect>
    // }
    const scrollToEnd = () => {
        setPage(page + 1)
        console.log(page)
    }
    window.onscroll = function () {
        // console.log("inner", window.innerHeight)
        // console.log("top", document.documentElement.scrollTop)
        // console.log("offset", document.documentElement.offsetHeight)
        if (window.scrollY + window.innerHeight >=
            document.documentElement.scrollHeight) {
            scrollToEnd()
        }
        console.log("123")
        // if (document.documentElement.scrollHeight - document.documentElement.scrollTop === document.documentElement.clientHeight) {

        //     scrollToEnd()


        // }
    }
    return (
        <>
            <StudentNavbar></StudentNavbar>
            <div className="row">

                <div style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="col-md-2 mb-3 text-center">
                    <Link to="all_job_posts"><button style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="btn btn-white m-2 p-3"><FontAwesomeIcon icon={faBell} className="mr-2" />See All Job Posts </button></Link>
                    <Link to="blog/alumni/all/user"><button style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="btn btn-white m-2 p-3"><FontAwesomeIcon icon={faUserGraduate} className="mr-2" />See All Alumni Posts</button></Link>

                    <Link to="my/appliedjobs"><button style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="btn btn-white m-2 p-3"><FontAwesomeIcon icon={faHandPointUp} className="mr-2" />Applied Job Posts</button></Link>
                    <Link to="/studentContestRanking"><button style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="btn btn-white m-2 p-3"><FontAwesomeIcon icon={faChalkboard} className="mr-2" />Contest Results</button></Link>
                    <Link to="/resume/add"><button style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="btn btn-white m-2 p-3"><FontAwesomeIcon icon={faChalkboard} className="mr-2" />Add Info to Resume</button></Link>

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

                        <button onClick={handleAddPost} className="btn btn-success"><FontAwesomeIcon icon={faPlus} className="mr-2" />{postBtn}</button>
                    </div>
                    {
                        loading ? <div className="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <img className="mx-auto w-25 d-block" src={loadingPic}></img>
                                </div>
                            </div>
                        </div> :

                            posts.length > 0 && posts.map(post => <Posts post={post}></Posts>)

                    }
                    {/* {
                       end? <p>End</p> : <p>Loading...</p>
                    } */}


                </div>
            </div>
        </>

    );
};

export default Home;