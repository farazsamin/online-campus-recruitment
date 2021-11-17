import React, { useState } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router';
import axios from 'axios'
const StudentRegistration = () => {
    // const history = useHistory();
    // const location = useLocation();
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [reg, setReg] = useState("Registration in As Admin")
    // const [loggedin, setLoggedIn] = useState(true)
    const handleAdminReg = (e) => {
        e.preventDefault();
        setReg("Registrationing....")
        axios.post('https://iiuc-campus-recuitement-system.herokuapp.com/signup/admin', {
            email: email,
            name: name,
            password: password
        }
        )
            .then((response) => {
                console.log(response)
                setIsAuthenticated(true)
                localStorage.setItem('userToken', response.data.token)
                alert("Your Registration Request is sent to ADMIN")
                setReg("Registration in As Admin")
            })
            .catch((error) => {
                console.log(error);
                alert("Error Occured")
                setReg("Registration in As Student")
            })
        // window.location.reload();

        // loggedin ? history.push('/student_home') : history.push('/login/student')

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
                            <label htmlFor="exampleInputEmail1">Name  :</label>
                            <input type="text" class="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter " onChange={
                                (event) => {
                                    setName(event.target.value);
                                }
                            } />

                        </div>
                        <div class="form-group">
                            <label htmlFor="exampleInputEmail1">Email Id Yours :</label>
                            <input type="email" class="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter " onChange={
                                (event) => {
                                    setEmail(event.target.value);
                                }
                            } />

                        </div>
                        <div class="form-group">
                            <label htmlFor="exampleInputPassword1">Password<small>( Must be greater than 6 characters)</small></label>
                            <input type="password" class="form-control" required id="exampleInputPassword1" placeholder="Password" onChange={
                                (event) => {
                                    setPassword(event.target.value);
                                }
                            } />
                        </div>
                        <button onClick={handleAdminReg} className="btn btn-primary" disabled={email && password.length > 6 ? false : true}>{reg}</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default StudentRegistration;