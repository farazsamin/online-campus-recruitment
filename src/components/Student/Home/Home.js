import React, { useEffect, useState } from 'react';
import Posts from '../Posts/Posts';
import StudentNavbar from '../Navbar/Navbar';
import axios from 'axios'
import { SetToken } from '../../utilities/setToken';
import { Link } from 'react-router-dom';
const Home = () => {
    // const [posts, setposts] = useState([]);
    const [description, setDescription] = useState('')
    const [image, setImage] = useState()
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    // const [loading, setLoading] = useState(true)

    const handleAddPost = (e) => {
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
                <div className="col-md-3 mt-5 pt-5">
                    <Link to="all_job_posts"><button className="btn btn-primary lg ml-2 mt-5 p-4">See All Job Posts</button></Link>
                </div>
                <div className="col-md-7 ">
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

export default Home;