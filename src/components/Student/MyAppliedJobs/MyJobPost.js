import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SetToken } from '../../utilities/setToken';

const MyJobPost = (props) => {
    const { title, description, Author, _id } = props.post;
    console.log(_id)
    const [like, setLike] = useState('')

    useEffect(() => {
        SetToken(localStorage.getItem('userToken'));

    }, [])



    return (
        <div className="row">
            <div style={{ border: 'none', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="col-md-7 mx-auto mb-3">
                <div className="card mb-3 mx-auto mt-3" style={{ width: "60%" }}>
                    <div className="card-body">

                        <Link to={`/see-company-profile/${Author._id}`}><h3 style={{ color: 'black' }} className=" border-bottom ">{Author.name}</h3></Link>
                        <h4 className="mt-3 ">{title}</h4>

                        <p className="card-text">{description}</p>
                    </div>
                    <hr />


                </div>
            </div>

        </div>
    );
};

export default MyJobPost;