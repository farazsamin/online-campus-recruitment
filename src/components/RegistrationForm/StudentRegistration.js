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
    // const [loggedin, setLoggedIn] = useState(true)
    const handleStudentLogin = (e) => {
        e.preventDefault();
        axios.post('https://iiuc-campus-recuitement-system.herokuapp.com/user/signup', {
           name : name,
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
                console.log(error);
            })
        // window.location.reload();
        
        // loggedin ? history.push('/student_home') : history.push('/login/student')
         
    }
    if(isAuthenticated){
        return <Redirect to="/student_home"></Redirect>
    }
    return (
        <div>

            <div className="row mt-5 pt-5">
                <div className="col-md-3 mx-auto">
                    <form>
                        
                        <div class="form-group">
                            <label htmlFor="exampleInputEmail1">Name Yours :</label>
                            <input type="text" class="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter " onChange={
                            (event) => {
                                setName(event.target.value);
                            }
                        } />
                            <small id="emailHelp" class="form-text text-muted">Enter right matric id.</small>
                        </div>
                        <div class="form-group">
                            <label htmlFor="exampleInputEmail1">Email Id Yours :</label>
                            <input type="email" class="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter " onChange={
                            (event) => {
                                setEmail(event.target.value);
                            }
                        } />
                            <small id="emailHelp" class="form-text text-muted">Enter right matric id.</small>
                        </div>
                        <div class="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" required  id="exampleInputPassword1" placeholder="Password" onChange={
                            (event) => {
                                setPassword(event.target.value);
                            }
                        } />
                        </div>
                        <button onClick={handleStudentLogin} className="btn btn-primary" disabled={email && password ? false : true}>Log in As Student</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default StudentRegistration;