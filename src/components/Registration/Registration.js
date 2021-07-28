import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className="mt-5" style={{ height: '80vh' }}>

            <div className="row ml-4">
                <div className="col-md-6 mt-5 pt-5">
                    <Link to="/registration/student"><button type="button" className="btn btn-white border border-dark btn-lg btn-block mb-3">Registration As Student</button></Link>
                    <Link to="/registration/admin"><button type="button" className="btn btn-white border border-dark btn-lg btn-block mb-3">Registration As Admin</button></Link>
                    <Link to="/registration/alumni"><button type="button" className="btn btn-white border border-dark btn-lg btn-block mb-3">Registration As Alumni</button></Link>
                    <Link to="/registration/company"><button type="button" className="btn btn-white border border-dark btn-lg btn-block mb-3">Registration As Company</button></Link>
                </div>
                <div className="col-md-5 mt-5 pt-5 ">
                    <div className=" h-100 d-flex justify-content-center align-items-center">
                        <div>
                            <h1>Connect with .....</h1>
                            <h4>In ONE place...</h4>

                        </div>

                    </div>


                </div>


            </div>



        </div>
    );
};

export default Registration;