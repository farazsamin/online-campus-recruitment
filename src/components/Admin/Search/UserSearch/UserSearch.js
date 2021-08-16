import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminNavbar from '../../Navbar/Navbar';
import './UserSearch.css'
import { SetToken } from '../../../utilities/setToken';

const UserSearch = () => {
    const [userInput, setUserInput] = useState('')
    const [users, setUsers] = useState([])

    useEffect(() => {
        SetToken(localStorage.getItem('userToken'));
    }, [])

    const handleUserSearch = () => {
        console.log("Clicked")
        axios.get(`https://iiuc-campus-recuitement-system.herokuapp.com/admin/search/user?search=${userInput}`)
            .then(response => {
                console.log(response.data)
                setUsers(response.data.users)

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

                        users.map(userList => {
                            const { name, email } = userList
                            return (
                                <div className="m-3 p-2" style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
                                    <p >Name : {name}</p>
                                    <p>Email: {email}</p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>


        </div>
    );
};

export default UserSearch;