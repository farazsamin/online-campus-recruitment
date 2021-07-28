import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="mt-5" style={{ height: '80vh' }}>

            <div className="row">
                <div className="col-md-5 mt-5 pt-5">
                    <div className=" h-100 d-flex justify-content-center align-items-center">
                        <div>
                            <h1>Connect with .....</h1>
                            <h4>In ONE place...</h4>

                        </div>
                    </div>



                </div>

                <div className="col-md-6 mt-5 pt-5 ">

                    <Link to="/login/student"><button type="button" className="btn btn-white border border-dark btn-lg btn-block mb-3">Login As Student</button></Link>
                    <Link to="/login/alumni"><button type="button" className="btn btn-white border border-dark btn-lg btn-block mb-3">Login As Alumni</button></Link>
                    <Link to="/login/company"> <button type="button" className="btn btn-white border border-dark btn-lg btn-block mb-3">Login As Company</button></Link>
                    <Link to="/login/admin"><button type="button" className="btn btn-white border border-dark btn-lg btn-block mb-3">Login As Admin</button></Link>
                </div>


            </div>

        </div>

    );
};

export default Login;



