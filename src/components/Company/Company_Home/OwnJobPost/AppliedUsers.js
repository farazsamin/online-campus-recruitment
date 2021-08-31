import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
        <div>
            {
                appliedUsers.map(au => {

                    const { name } = au.user
                    console.log(au.user)
                    return (
                        <div>

                            <div className="row mt-3">
                                <div className="col-md-8">
                                    <p className="text-center">{name}</p>
                                </div>
                                <div className="col-md-4">
                                    <button className="btn btn-success text-center">See Profile</button>
                                </div>
                            </div>
                            {/* <p>{user.name}</p> */}
                        </div>
                    )
                })
            }

        </div>
    );
};

export default AppliedUsers;