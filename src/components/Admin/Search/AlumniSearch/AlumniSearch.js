import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminNavbar from '../../Navbar/Navbar';
import './AlumniSearch.css'
import { SetToken } from '../../../utilities/setToken';

const AlumniSearch = () => {
    const [userInput, setUserInput] = useState('')
    const [users, setUsers] = useState([])

    useEffect(() => {
        SetToken(localStorage.getItem('adminToken'));
    }, [])

    const handleUserSearch = () => {
        console.log("Clicked")
        axios.get(`https://iiuc-campus-recuitement-system.herokuapp.com/admin/search/alumni?search=${userInput}`)
            .then(response => {
                console.log(response.data)
                setUsers(response.data.alumni)

            })
            .catch(err => {
                console.log(err)
            })
    }
    const handleDeleteUser = (_id) => {
        SetToken(localStorage.getItem('adminToken'));
        axios.delete(`https://iiuc-campus-recuitement-system.herokuapp.com/delete/admin/alumni/${_id}`)
            .then(response => {
                console.log(response.data)
                axios.get(`https://iiuc-campus-recuitement-system.herokuapp.com/admin/search/alumni?search=${userInput}`)
                    .then(response => {
                        console.log(response.data)
                        setUsers(response.data.alumni)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch(err => {
                console.log(err)
            })


    }
    return (
        <div>
            <AdminNavbar></AdminNavbar>
            <div class="main">
                <div class="input-group">
                    <input type="text" onChange={(e) => setUserInput(e.target.value)} class="form-control" placeholder="Search Alumni" />
                    <div class="input-group-append">
                        <button disabled={userInput ? false : true} onClick={handleUserSearch} class="btn btn-secondary" type="button">
                            {/* <i class="fa fa-search"></i> */}
                            Search Alumni
                        </button>
                    </div>
                </div>

            </div>

            <div className="row">
                <div style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="col-md-6 m-auto text-center">
                    {

                        users.map(userList => {
                            const { name, email, _id } = userList
                            return (
                                <div className="m-3 p-2" style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
                                    <p >Name : {name}</p>
                                    <p>Email: {email}</p>
                                    <button onClick={() => handleDeleteUser(_id)} className="btn btn-danger">Delete</button>
                                </div>
                            );
                        })
                    }
                </div>
            </div>


        </div>
    );
};

export default AlumniSearch;