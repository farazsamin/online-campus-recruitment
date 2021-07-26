import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SetToken } from '../../../utilities/setToken';

const PostDetail = (props) => {
    const [appliedUsers, setAppliedUsers] = useState('')
    const { title, description, _id } = props.post;
    useEffect(() => {
        SetToken(localStorage.getItem('userToken'));
        axios.get(`https://iiuc-campus-recuitement-system.herokuapp.com/job/${_id}/appliedUser`)
            .then(response => {
                setAppliedUsers(response.data[0].appliedUsers[0].user.name)
                // console.log(response.data[0].appliedUsers[0].user.name)

            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div className="container">
            <div class="card w-75 mt-3">
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                    <a href="f" class="btn btn-danger">Delete</a>
                    <a style={{ marginLeft: '3%' }} href="f" class="btn btn-primary">Edit</a>
                    <div>
                        <h4>Applied Users : {appliedUsers}</h4>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PostDetail;