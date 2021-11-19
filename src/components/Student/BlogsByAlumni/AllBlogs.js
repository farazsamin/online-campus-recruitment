import React, { useEffect, useState } from 'react';
import BlogsByAlumni from '../BlogsByAlumni/BlogsByAlumni';
import StudentNavbar from '../Navbar/Navbar';
import axios from 'axios'
import { SetToken } from '../../utilities/setToken';
import { Link } from 'react-router-dom';
import loadingPic from '../../utilities/images/loading.gif'
const PAGE_NUMBER = 0;
const Home = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(PAGE_NUMBER)
    // const [loading, setLoading] = useState(true)


    useEffect(() => {
        SetToken(localStorage.getItem('userToken'));
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/blog/alumni/all/user', { params: { page: page } })
            .then(res => {
                console.log(res)
                setPosts([...posts, ...res.data.blogs])
                setLoading(false)
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