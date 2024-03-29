import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { SetToken } from '../../utilities/setToken';
import { Link } from 'react-router-dom';

const Posts = (props) => {
  const { _id, title, description, image, React, Author } = props.post;
  const [like, setLike] = useState('')
  const [comment, setComment] = useState('')
  const [alumniComments, setAlumniComments] = useState([])
  const [cmnt, setCmnt] = useState(false)

  let img = new Buffer.from(image.data).toString('base64');
  img = `data:image/jpg;base64,${img}`;

  const handleAddComment = () => {
    axios.post(`https://iiuc-campus-recuitement-system.herokuapp.com/blog/Alumni/${_id}/Alumnicomment`, {
      comment: comment
    })
      .then(res => {
        console.log(res)
        setComment('')
      })
      .catch(err => {
        console.log(err)
      })

    axios.get(`https://iiuc-campus-recuitement-system.herokuapp.com/blog/alumni/${_id}/allComments/alumni`)
      .then(response => {
        console.log(response)
        setAlumniComments(response.data)
      })
      .catch(err => {
        console.log(err.error)
      })
  }

  const handleComment = () => {
    setCmnt(!cmnt)
  }
  const handleLike = () => {
    SetToken(localStorage.getItem('alumniToken'));
    const color = like ? '' : 'red'
    if (color === 'red') {
      axios.post(`https://iiuc-campus-recuitement-system.herokuapp.com/blog/Alumni/${_id}/AlumniReact`, {
        comment: comment
      })
        .then(res => {
          console.log(res)

        })
        .catch(err => {
          console.log(err)
        })
    }
    setLike(color)
  }


  useEffect(() => {
    SetToken(localStorage.getItem('alumniToken'));
    axios.get(`https://iiuc-campus-recuitement-system.herokuapp.com/blog/alumni/${_id}/allComments/alumni`)
      .then(response => {
        console.log(response)
        setAlumniComments(response.data)
      })
      .catch(err => {
        console.log(err.error)
      })
  }, [])
  return (

    <div className="mt-2 p-3" style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
      <Link to={`/see-other-alumni-profile/${Author._id}`}><p style={{ color: "black" }}>{Author.name ? Author.name : "My Profile"}</p></Link>
      <h5 style={{ fontSize: "18px", fontWeight: "bolder" }} className="mt-3 mb-3">{title}</h5>
      <img style={{ width: '100%' }} className="img-responsive" src={img} alt="Card  cap" />
      <p style={{ lineHeight: 1.6, fontSize: "18px", letterSpacing: 1, color: "#5e5a5a" }} className="mt-2">{description}</p>
      <hr />
      <span>


        <FontAwesomeIcon icon={faComment} size='2x' className="" style={{ fontSize: "26px", marginLeft: '40%', marginBottom: '10px' }} onClick={handleComment} /> <span style={{ color: 'green', fontWeight: 'bolder' }}>{alumniComments.length}</span>
      </span>
      <hr />
      <div className="row">
        <div className="col-md-10">
          <input onChange={
            (event) => {
              setComment(event.target.value);
            }
          } placeholder="Write Your Comment" style={{ width: '100%', border: 'none', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} value={comment} className="p-2" type="textarea" name="" id="" />
        </div>
        <div className="col-md-2">
          <button onClick={handleAddComment} className="btn btn-primary">Comment</button>
        </div>
      </div>
      {cmnt ? alumniComments.map(ac => {
        const { comment, alumniCommentMaker, userCommentMaker } = ac;
        return (
          <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', marginTop: '1%', padding: '1%' }}>
            {alumniCommentMaker ? <p style={{ fontSize: "18px", fontWeight: "bolder" }}>{alumniCommentMaker.name} <sup>alumni</sup></p> : <p>{userCommentMaker.name} <sup>student</sup></p>}
            <p style={{ lineHeight: 1.6, fontSize: "18px", letterSpacing: 1, color: "#5e5a5a" }}>{comment}</p>
          </div>
        )
      }) : <></>}
    </div>


  );
};

export default Posts;