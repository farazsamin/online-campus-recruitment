import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios'
const AlumniLoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    // const [loggedin, setLoggedIn] = useState(false)
    
    const handleAlumniLogin = (e) => {
        e.preventDefault();
        console.log(email + password)
        axios.post('https://iiuc-campus-recuitement-system.herokuapp.com/alumni/login', {
           email : email,
           password : password
        }
        )
            .then((response) => {
                console.log(response)
                setIsAuthenticated(true)
                localStorage.setItem('userToken',response.data.token)
            })
            .catch((error)=>{
                console.log(error.response.data.err)
            })
        // // window.location.reload();

        // history.push('/student_home') : history.push('/login/student')     
    }
    if(isAuthenticated){
        return <Redirect to="/alumni_home"></Redirect>
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
                            <input type="password" class="form-control" required  id="exampleInputPassword1" placeholder="Password" onChange={
                            (event) => {
                                setPassword(event.target.value);
                            }
                        } />
                        </div>
                        <button onClick={(e)=>{handleAlumniLogin(e)}} className="btn btn-primary" disabled={email && password ? false : true}>Log in As Alumni</button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default AlumniLoginForm;