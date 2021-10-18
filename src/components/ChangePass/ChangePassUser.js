

import axios from 'axios';
import React, { useState } from 'react';
import { SetToken } from '../utilities/setToken';


const ChangePassUser = () => {
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [btn, setBtn] = useState('Submit')
    const handleStudentLogin = (e) => {
        SetToken(localStorage.getItem('userToken'));
        setBtn('Submitting...')
        e.preventDefault();
        axios.post('https://iiuc-campus-recuitement-system.herokuapp.com/user/me/passwordChange', { params: { password: password } })
            .then((response) => {
                console.log(response)
                setBtn("Submit")

            })
            .catch((error) => {
                console.log(error)
                setError('Enter Valid Information')
                setBtn("Submit")
            })
    }
    return (
        <div className="row mt-5">
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
            </div>

        </div>
    );
};

export default ChangePassUser;