import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div style={{backgroundColor : '#DAFCF3', height : '100vh'}}>
            
            <div className="row">
                <div className="col-md-6">
                    <Link to="/registration/student"><button type="button" className="btn btn-secondary btn-lg btn-block mb-3">Registration As Student</button></Link>
                    <Link to="/registration/admin"><button type="button" className="btn btn-secondary btn-lg btn-block mb-3">Registration As Admin</button></Link>
                    <Link to="/registration/alumni"><button type="button" className="btn btn-secondary btn-lg btn-block mb-3">Registration As Alumni</button></Link>
                    <Link to="/registration/company"><button type="button" className="btn btn-secondary btn-lg btn-block mb-3">Registration As Company</button></Link>

                </div>
                
                <div className="col-md-6 mt-5 pt-5 ">
                
                    <Link to="/login/student"><button type="button" className="btn btn-secondary btn-lg btn-block mb-3">Login As Student</button></Link>
                    <Link to="/login/alumni"><button type="button" className="btn btn-secondary btn-lg btn-block mb-3">Login As Alumni</button></Link>
                    <Link to="/login/company"> <button type="button" className="btn btn-secondary btn-lg btn-block mb-3">Login As Company</button></Link>
                    <Link to="/login/admin"><button type="button" className="btn btn-secondary btn-lg btn-block">Login As Admin</button></Link>
                </div>
                
                
            </div>
            
        </div>
        
    );
};

export default Login;