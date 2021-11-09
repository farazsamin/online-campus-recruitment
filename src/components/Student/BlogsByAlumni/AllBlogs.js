import React, { useEffect, useState } from 'react';
import BlogsByAlumni from '../BlogsByAlumni/BlogsByAlumni';
import StudentNavbar from '../Navbar/Navbar';
import axios from 'axios'
import { SetToken } from '../../utilities/setToken';
import { Link } from 'react-router-dom';
import loadingPic from '../../utilities/images/loading.gif'
const Home = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    // const [loading, setLoading] = useState(true)


    useEffect(() => {
        SetToken(localStorage.getItem('userToken'));
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/blog/alumni/all/user')
            .then(response => {
                console.log(response)
                setPosts(response.data.blogs)
                setLoading(false)
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
                <div className="col-md-6 m-auto">
                    <h1 className="m-3 text-center">All Alumni Blogs</h1>
                    {
                        loading ? <div className="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <img className="mx-auto w-25 d-block" src={loadingPic}></img>
                                </div>
                            </div>
                        </div>
                            :

                            posts.map(post => <BlogsByAlumni post={post}></BlogsByAlumni>)
                    }
                </div>
            </div>




        </>

    );
};

export default Home;