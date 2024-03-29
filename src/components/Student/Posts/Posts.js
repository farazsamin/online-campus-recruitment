import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faHeart, faQuoteLeft, faQuoteRight, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { SetToken } from '../../utilities/setToken';
import { userContext } from '../../../App';
import { Link } from 'react-router-dom';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { format } from 'timeago.js';

const Posts = (props) => {
  const { _id, title, description, image, Author, createdAt } = props.post;

  let img = new Buffer.from(image.data).toString('base64');
  img = `data:image/jpg;base64,${img}`;

  const [like, setLike] = useState('')
  const [cmnt, setCmnt] = useState(false)
  const [comment, setComment] = useState('')
  const [userComments, setUserComments] = useState([])
  const [dlt, setDlt] = useState(false)

  const [loggedInUser, setLoggedInUser] = useContext(userContext)

  const handleAddComment = () => {

    axios.post(`https://iiuc-campus-recuitement-system.herokuapp.com/blog/user/${_id}/usercomment`, {
      comment: comment
    })
      .then(res => {
        console.log(res)
        setComment('')
      })
      .catch(err => {
        console.log(err)
      })

    axios.get(`https://iiuc-campus-recuitement-system.herokuapp.com/blog/user/${_id}/allComments/user`)
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
    SetToken(localStorage.getItem('userToken'));

    console.log('log id ', loggedInUser.id)

    axios.get(`https://iiuc-campus-recuitement-system.herokuapp.com/blog/user/${_id}/allComments/user`)
      .then(response => {
        console.log(response)
        setUserComments(response.data)
      })
      .catch(err => {
        console.log(err.error)
      })


  }, [])

  return (
    <div className="m-2 p-3" style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
      {console.log(loggedInUser.name)}
      <p style={{ color: 'black' }}><FontAwesomeIcon icon={faUser} className="mr-2" />{Author.name ? Author.name : "My Profile"}</p>
      <p style={{ fontSize: "16px", letterSpacing: 1, color: "#5e5a5a" }} ><FontAwesomeIcon icon={faClock} style={{ fontSize: "100%" }} className="mr-2" />{format(createdAt)}</p>
      <h5 style={{ fontSize: "18px", fontWeight: "bolder" }} className="mt-3 mb-3">{title}</h5>
      <img style={{ width: '100%' }} className="img-responsive" src={img} alt="Card  cap" />
      <p style={{ lineHeight: 1.6, fontSize: "18px", letterSpacing: 1, color: "#5e5a5a" }} className="mt-2">{description}</p>
      <hr />

      <span>

        <FontAwesomeIcon onClick={handleComment} icon={faComment} className="" style={{ fontSize: "26px", marginLeft: '45%', color: 'grey' }} />
        <span style={{ color: 'green', fontWeight: 'bolder' }}>{userComments.length}</span>
        {/* <button onClick={handleComment}></button> */}
      </span>
      <hr />
      <div className="row">
        <div className="col-md-9">
          <input onChange={
            (event) => {
              setComment(event.target.value);
            }
          } placeholder="Write Your Comment" value={comment} style={{ width: '100%', border: 'none', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="p-2" type="textarea" name="" id="" />
        </div>
        <div className="col-md-3">
          <button onClick={handleAddComment} className="btn btn-primary"><FontAwesomeIcon icon={faComment} className="mr-2" />Comment</button>
        </div>
      </div>
      {
        cmnt ? userComments.map(uc => {
          const { comment, userCommentMaker, alumniCommentMaker } = uc;
          return (
            <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', marginTop: '1%', padding: '1%' }}>
              {alumniCommentMaker ? <p style={{ fontSize: "18px", fontWeight: "bolder" }}>{alumniCommentMaker.name} <sup>alumni</sup></p>
                : <p style={{ fontSize: "18px", fontWeight: "bolder" }}>{userCommentMaker.name} <sup style={{ fontSize: "18px", fontWeight: "bolder" }}>student</sup></p>}
              <p style={{ lineHeight: 1.6, fontSize: "18px", letterSpacing: 1, color: "#5e5a5a" }} >{comment}</p>

            </div>
          )
        }) : <></>
      }

    </div>
  );
};

export default Posts;