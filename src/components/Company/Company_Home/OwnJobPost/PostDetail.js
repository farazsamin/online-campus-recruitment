
import React from 'react';
import AppliedUsers from './AppliedUsers';


const PostDetail = (props) => {

    const { title, description, _id } = props.post;

    return (
        <div className="container">
            <div class="card w-75 mt-3">
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                    <a href="f" class="btn btn-danger">Delete</a>
                    {/* <a style={{ marginLeft: '3%' }} href="f" class="btn btn-primary">Edit</a> */}
                    <div>
                        <h2 className="text-center mt-2 mb-2">Applied Users</h2>
                        <AppliedUsers _id={_id}></AppliedUsers>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default PostDetail;