import React, { useState } from 'react';
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import axios from 'axios'
const AdminLoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [error, setError] = useState('')
    const [logInBtn, setLogInBtn] = useState('Log In As Admin')
    // const [loggedin, setLoggedIn] = useState(false)

    const handleAdminLogin = (e) => {
        setLogInBtn("Logging In")
        e.preventDefault();
        console.log(email + password)
        axios.post('https://iiuc-campus-recuitement-system.herokuapp.com/login/admin', {
            email: email,
            password: password
        }
        )
            .then((response) => {
                console.log(response)
                setIsAuthenticated(true)
                localStorage.setItem('userToken', response.data.token)
            })
            .catch((error) => {
                console.log(error)
                setError('Enter Valid Information')
                setLogInBtn("Log In As Admin")
            })
        // // window.location.reload();

        // history.push('/student_home') : history.push('/login/student')     
    }
    if (isAuthenticated) {
        return <Redirect to="/admin_home"></Redirect>
    }


    return (
        <div>

            <div className="row mt-5 pt-5">
                <div className="col-md-3 mx-auto">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email:</label>
                            <input type="email" class="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter " onChange={
                                (event) => {
                                    setEmail(event.target.value);
                                }
                            } />

                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password : </label>
                            <input type="password" class="form-control" required id="exampleInputPassword1" placeholder="Password" onChange={
                                (event) => {
                                    setPassword(event.target.value);
                                }
                            } />
                        </div>
                        <button onClick={(e) => { handleAdminLogin(e) }} className="btn btn-primary" disabled={email && password ? false : true}>{logInBtn}</button>
                        <h6 className="mt-2" style={{ color: 'red' }}>{error}</h6>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default AdminLoginForm;