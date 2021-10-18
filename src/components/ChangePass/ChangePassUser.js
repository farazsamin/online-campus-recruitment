

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { SetToken } from '../utilities/setToken';


const ChangePassUser = () => {
    let { _id } = useParams();
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [btn, setBtn] = useState('Submit')
    const [success, setSuccess] = useState('')
    const [tokenStatus, setTokenStatus] = useState(false)

    useEffect(() => {
        // console.log({ _id })
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/user/forgotPassword', { params: { forget: _id } })
            .then(response => {
                console.log(response)
                localStorage.setItem('userToken', response.data.token)
                setTokenStatus(true)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    const handleStudentLogin = (e) => {
        SetToken(localStorage.getItem('userToken'));
        setBtn('Submitting...')
        e.preventDefault();
        axios.patch('https://iiuc-campus-recuitement-system.herokuapp.com/user/me/passwordChange', {
            password: password
        })
            .then((response) => {
                console.log(response)
                setBtn("Submit")
                setSuccess("Password Changed Successfully")

            })
            .catch((error) => {
                console.log(error.data)
                setError('Enter Valid Information')
                setBtn("Submit")
            })
    }
    return (
        <div className="row mt-5">
            <Link to="/"><button className="btn btn-success">Back To Home</button></Link>
            {
                tokenStatus ?
                    <div className="col-md-6 m-auto">
                        <h3 className="text-center mb-3">Student Password Change</h3>
                        <label for="exampleInputEmail1">Enter Your Password :</label>
                        <input type="password" class="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter " onChange={
                            (event) => {
                                setPassword(event.target.value);
                            }
                        } />
                        <button onClick={(e) => { handleStudentLogin(e) }} className="mt-3 btn btn-success" disabled={password ? false : true}>{btn}</button>
                        <h6 className="mt-2" style={{ color: 'red' }}>{error}</h6>
                        <h6 className="mt-2" style={{ color: 'green' }}>{success}</h6>
                    </div> :
                    <h1 className="m-auto">Invalid Token</h1>
            }


        </div>
    );
};

export default ChangePassUser;