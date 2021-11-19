import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SeeUserProfile from '../../../SeeUserProfile/SeeUserProfile';
import { SetToken } from '../../../utilities/setToken';

const AppliedUsers = (props) => {
    const { _id } = props;
    const [appliedUsers, setAppliedUsers] = useState([])
    useEffect(() => {
        SetToken(localStorage.getItem('companyToken'));
        axios.get(`https://iiuc-campus-recuitement-system.herokuapp.com/job/${_id}/appliedUser`)
            .then(response => {
                setAppliedUsers(response.data[0].appliedUsers)
                console.log(response.data[0])

            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <>
            {
                appliedUsers ?

                    <div>
                        {
                            appliedUsers.map(au => {

                                const { name, _id } = au.user
                                {/* console.log(au.user) */ }
                                return (
                                    <div>

                                        <div className="row mt-3">
                                            <div className="col-md-8">
                                                <p className="text-center">{name}</p>
                                            </div>
                                            <div className="col-md-4">
                                                <Link to={`/see-user-profile/${_id}`}><button className="btn btn-success text-center">See Profile</button></Link>
                                                {/* <SeeUserProfile _id={_id}></SeeUserProfile> */}
                                            </div>
                                        </div>
                                        {/* <p>{user.name}</p> */}
                                    </div>
                                )
                            })
                        }

                    </div>
                    :
                    <div>
                        <p className="text-center mt-3">No Applied User</p>
                    </div>

            }
        </>
    );
};

export default AppliedUsers;