import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SetToken } from '../utilities/setToken';

const SeeUserProfile = () => {
    let { _id } = useParams();
    useEffect(() => {
        SetToken(localStorage.getItem('companyToken'));
        axios.get(`https://iiuc-campus-recuitement-system.herokuapp.com/profile/${_id}`)
            .then(response => {

                console.log(response)

            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div>

        </div>
    );
};

export default SeeUserProfile;