import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Registration.css'

const Registration = () => {
    return (
        <div className="bannerImg">
            <div style={{ height: '100vh' }}>
                <div >
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <Link style={{ color: 'white' }} class="navbar-brand" to="/">IIUC Campus Recruitment System</Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ml-auto">
                                <li className="p-2">
                                    <Link className="text-light" to="/">Home</Link>
                                </li>
                                <li className="p-2" >
                                    <Link className="text-light" to="/login">Login</Link>
                                </li>
                                <li className="p-2">
                                    <Link className="text-light" to="/registration">Registration</Link>
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

                        <Link to="/registration/student"><button type="button" className="login-button btn btn-white border border-white btn-lg btn-block mb-3">Registration As Student</button></Link>
                        <Link to="/registration/alumni"><button type="button" className="login-button btn btn-white border border-white btn-lg btn-block mb-3">Registration As Alumni</button></Link>
                        <Link to="/registration/company"> <button type="button" className="login-button btn btn-white border border-white btn-lg btn-block mb-3">Registration As Company</button></Link>
                        <Link to="/registration/admin"><button type="button" className="login-button btn btn-white border border-white btn-lg btn-block mb-3">Registration As Admin</button></Link>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Registration;



