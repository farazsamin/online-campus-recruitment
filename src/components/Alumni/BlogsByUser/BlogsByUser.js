import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { SetToken } from '../../utilities/setToken';
import { Link } from 'react-router-dom';
const Posts = (props) => {
    const { _id, title, description, image, Author } = props.post;

    let img = new Buffer.from(image.data).toString('base64');
    img = `data:image/jpg;base64,${img}`;

    const [like, setLike] = useState('')
    const [cmnt, setCmnt] = useState(false)
    const [comment, setComment] = useState('')
    const [userComments, setUserComments] = useState([])

    const handleAddComment = () => {
        axios.post(`https://iiuc-campus-recuitement-system.herokuapp.com/blog/user/${_id}/Alumnicomment`, {
            comment: comment
        })
            .then(res => {
                console.log(res)
                setComment('')
            })
            .catch(err => {
                console.log(err)
            })

        axios.get(`https://iiuc-campus-recuitement-system.herokuapp.com/blog/user/${_id}/allComments/alumni`)
            .then(response => {
                console.log(response)
                setUserComments(response.data)
            })
            .catch(err => {
                console.log(err.error)
            })
    }

    const handleComment = () => {
        setCmnt(!cmnt)
    }
    const handleLike = () => {
        const color = like ? '' : 'red'
        setLike(color)
    }

    useEffect(() => {
        SetToken(localStorage.getItem('alumniToken'));
        axios.get(`https://iiuc-campus-recuitement-system.herokuapp.com/blog/user/${_id}/allComments/alumni`)
            .then(response => {
                console.log(response)
                setUserComments(response.data)
            })
            .catch(err => {
                console.log(err.error)
            })
    }, [])

    return (
        <div className="m-2 p-3 " style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
            {/* <Link to={`/see-user-profile/${Author._id}`}></Link> */}
            <p style={{ color: 'black' }}>{Author.name}</p>
            <h5 className="mt-3 mb-3">{title}</h5>
            <img style={{ width: '100%' }} className="img-responsive" src={img} alt="Card  cap" />
            <p className="mt-2">{description}</p>
            <hr />

            <span>

                <FontAwesomeIcon onClick={handleComment} icon={faComment} size='2x' className="" style={{ marginLeft: '40%', marginRight: '1%', color: 'grey' }} />
                <span style={{ color: 'green', fontWeight: 'bolder' }}>{userComments.length}</span>
                {/* <button onClick={handleComment}></button> */}
            </span>
            <hr />
            <div className="row">
                <div className="col-md-10">
                    <input onChange={
                        (event) => {
                            setComment(event.target.value);
                        }
                    } placeholder="Write Your Comment" value={comment} style={{ width: '100%', border: 'none', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="p-2" type="textarea" name="" id="" />
                </div>
                <div className="col-md-2">
                    <button onClick={handleAddComment} className="btn btn-primary">Comment</button>
                </div>
            </div>
            {cmnt ? userComments.map(uc => {
                const { comment, alumniCommentMaker, userCommentMaker } = uc;

                return (
                    <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', marginTop: '1%', padding: '1%' }}>

                        {/* <p style={{ fontWeight: '500', fontSize: '20px' }}> {userCommentMaker.name}  <sup></sup></p> */}

                        {alumniCommentMaker ? <p>{alumniCommentMaker.name} <sup>alumni</sup></p> : <p>{userCommentMaker.name} <sup>student</sup></p>}


                        <p>{comment}</p>
                    </div>
                )
            }) : <></>}

        </div>
    );
};

export default Posts;