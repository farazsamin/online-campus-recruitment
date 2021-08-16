import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div style={{ height: '100vh' }}>
            <div >
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a style={{ color: 'white' }} class="navbar-brand" href="#">IIUC Campus Recruitment System</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a class="nav-link login-nav-link" href="#">Home<span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link login-nav-link" href="#">CSE</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link login-nav-link" href="#">About Us</a>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
            <div className="row">
                <div className="col-md-6 mt-5 pt-5">
                    <div className=" h-100 d-flex justify-content-center align-items-center">
                        <div>
                            <h1>Connect with </h1>
                            <div className="row mt-1">
                                <div className="col-md-2">
                                    <FontAwesomeIcon icon={faCheckCircle} size='2x' className="inline-block" style={{ marginBottom: '10px' }} />
                                </div>
                                <div className="col-md-9">
                                    <h3 className="typing-demo">Student</h3>
                                </div>
                            </div>
                            <div className="row mt-1">
                                <div className="col-md-2">
                                    <FontAwesomeIcon icon={faCheckCircle} size='2x' className="inline-block" style={{ marginBottom: '10px' }} />
                                </div>
                                <div className="col-md-9">
                                    <h3 className="typing-demo">Company</h3>
                                </div>
                            </div>
                            <div className="row mt-1">
                                <div className="col-md-2">
                                    <FontAwesomeIcon icon={faCheckCircle} size='2x' className="inline-block" style={{ marginBottom: '10px' }} />
                                </div>
                                <div className="col-md-9">
                                    <h3 className="typing-demo">Alumni</h3>
                                </div>
                            </div>




                        </div>
                    </div>



                </div>

                <div className="col-md-4 mt-5 pt-5 ">

                    <Link to="/login/student"><button type="button" className="login-button btn btn-white border border-white btn-lg btn-block mb-3">Login As Student</button></Link>
                    <Link to="/login/alumni"><button type="button" className="login-button btn btn-white border border-white btn-lg btn-block mb-3">Login As Alumni</button></Link>
                    <Link to="/login/company"> <button type="button" className="login-button btn btn-white border border-white btn-lg btn-block mb-3">Login As Company</button></Link>
                    <Link to="/login/admin"><button type="button" className="login-button btn btn-white border border-white btn-lg btn-block mb-3">Login As Admin</button></Link>
                </div>


            </div>

        </div>

    );
};

export default Login;



