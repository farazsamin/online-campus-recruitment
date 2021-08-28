import React, { useEffect, useState } from 'react';
import BlogsByUser from './BlogsByUser'
import StudentNavbar from '../Navbar/Navbar';
import axios from 'axios'
import { SetToken } from '../../utilities/setToken';

const Home = () => {
    const [posts, setPosts] = useState([])
    // const [loading, setLoading] = useState(true)


    useEffect(() => {
        SetToken(localStorage.getItem('alumniToken'));
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/blog/user/all/alumni')
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
                    <h1 className="m-3 text-center">All User Blogs</h1>
                    {
                        posts.map(post => <BlogsByUser post={post}></BlogsByUser>)
                    }
                </div>
            </div>




        </>

    );
};

export default Home;