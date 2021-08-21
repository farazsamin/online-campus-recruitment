import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { SetToken } from '../../utilities/setToken';
const JobPost = (props) => {

  const { title, description, Author, _id } = props.post;
  console.log(_id)
  const [like, setLike] = useState('')
  const [text, setText] = useState('Apply For The Job')
  const [disable, setDisable] = useState(false)
  useEffect(() => {
    SetToken(localStorage.getItem('userToken'));

  }, [])
  const handleApplyForJob = () => {
    axios.post(`https://iiuc-campus-recuitement-system.herokuapp.com/job/user/${_id}`, {

    }
    )
      .then((response) => {
        console.log(response)
        setText('Applied')
        setDisable(true)
      })
      .catch((error) => {
        console.log(error.response.data.err)
        setText(error.response.data.err)
      })
  }
  const handleLike = () => {
    const color = like ? '' : 'red'
    setLike(color)
  }

  return (
    <div className="row">
      <div style={{ border: 'none', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className="col-md-7 mx-auto mb-3">
        <div className="card mb-3 mx-auto mt-3" style={{ width: "60%" }}>
          <div className="card-body">

            <h3 className=" border-bottom ">{Author.name}</h3>
            <h4 className="mt-3 ">{title}</h4>

            <p className="card-text">{description}</p>
          </div>
          <hr />
          <button className="btn btn-success" onClick={handleApplyForJob} disabled={disable}>{text}</button>


        </div>
      </div>

    </div>
  );
};

export default JobPost;