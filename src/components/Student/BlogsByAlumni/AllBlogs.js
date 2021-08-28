import React, { useEffect, useState } from 'react';
import BlogsByAlumni from '../BlogsByAlumni/BlogsByAlumni';
import StudentNavbar from '../Navbar/Navbar';
import axios from 'axios'
import { SetToken } from '../../utilities/setToken';
import { Link } from 'react-router-dom';
const Home = () => {
    const [posts, setPosts] = useState([])
    // const [loading, setLoading] = useState(true)


    useEffect(() => {
        SetToken(localStorage.getItem('userToken'));
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/blog/alumni/all/user')
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
                <div className="col-md-6 m-auto">
                    <h1 className="m-3 text-center">All Alumni Blogs</h1>
                    {
                        posts.map(post => <BlogsByAlumni post={post}></BlogsByAlumni>)
                    }
                </div>
            </div>




        </>

    );
};

export default Home;