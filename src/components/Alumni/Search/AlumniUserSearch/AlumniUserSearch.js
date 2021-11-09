import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import { SetToken } from '../../../utilities/setToken';
import AlumniNavbar from '../../Navbar/Navbar';
import loadingPic from '../../../utilities/images/loading.gif'
const AlumniUserSearch = () => {
    const [userInput, setUserInput] = useState('')
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    let history = useHistory();

    useEffect(() => {
        SetToken(localStorage.getItem('alumniToken'));
    }, [])

    const handleUserSearch = () => {
        // console.log("Clicked")
        setLoading(true)
        axios.get(`https://iiuc-campus-recuitement-system.herokuapp.com/search/user?search=${userInput}`)
            .then(response => {
                console.log(response.data)
                setUsers(response.data.user)
                setLoading(false)

            })
            .catch(err => {
                console.log(err.response)
            })
    }


    return (
        <div>
            <AlumniNavbar></AlumniNavbar>
            <div class="main">
                <div class="input-group">
                    <input type="text" onChange={(e) => setUserInput(e.target.value)} class="form-control" placeholder="Search Student" />
                    <div class="input-group-append">
                        <button disabled={userInput ? false : true} onClick={handleUserSearch} class="btn btn-secondary" type="button">
                            {/* <i class="fa fa-search"></i> */}
                            Search Student
                        </button>
                    </div>
                </div>

            </div>

            <div className="row">
                <div style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="col-md-6 m-auto text-center">
                    {
                        loading ? <div className="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <img className="mx-auto w-25 d-block" src={loadingPic}></img>
                                </div>
                            </div>
                        </div>
                            :

                            users.map(userList => {
                                const { name, email, _id } = userList
                                return (
                                    <div className="m-3 p-2" style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
                                        {/* <p>{_id}</p> */}
                                        <p >Name : {name}</p>
                                        <p>Email: {email}</p>
                                        <Link to={`/see-user-profile/${_id}`}><button className="btn btn-success text-center">See Profile</button></Link>
                                    </div>
                                );
                            })
                    }
                </div>
            </div>


        </div>
    );
};

export default AlumniUserSearch;