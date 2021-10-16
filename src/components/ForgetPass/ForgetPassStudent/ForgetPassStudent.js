import axios from 'axios';
import React, { useState } from 'react';
import { SetToken } from '../../utilities/setToken';

const ForgetPassStudent = () => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [btn, setBtn] = useState('Submit')
    const handleStudentLogin = (e) => {
        SetToken(localStorage.getItem('userToken'));
        setBtn('Submitting...')
        e.preventDefault();
        axios.post('https://iiuc-campus-recuitement-system.herokuapp.com/user/forgotPassword', {
            email: email,

        }
        )
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
                <h3 className="text-center mb-3">Student Forget Password</h3>
                <label for="exampleInputEmail1">Email Id Yours :</label>
                <input type="email" class="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter " onChange={
                    (event) => {
                        setEmail(event.target.value);
                    }
                } />
                <button onClick={(e) => { handleStudentLogin(e) }} className="mt-3 btn btn-success" disabled={email ? false : true}>{btn}</button>
                <h6 className="mt-2" style={{ color: 'red' }}>{error}</h6>
            </div>

        </div>
    );
};

export default ForgetPassStudent;