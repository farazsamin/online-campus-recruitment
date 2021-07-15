import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { SetToken } from '../../utilities/setToken';
const JobPost = (props) => {
 
  const { title,description,Author,_id} = props.post;
  console.log(_id)
  const [like, setLike] = useState('')
  const [text, setText] = useState('Apply For The Job')
  const [disable, setDisable] = useState(false)
  useEffect(() => {
    SetToken(localStorage.getItem('userToken'));
   
  }, [])
  const handleApplyForJob=()=>{
      axios.post(`https://iiuc-campus-recuitement-system.herokuapp.com/job/user/${_id}`, {
          
        }
        )
            .then((response) => {
                console.log(response)
                setText('Already Applied')
                setDisable(true)
            })
            .catch((error)=>{
                console.log(error.response.data.err)
            })
  }
  const handleLike =() =>{
    const color = like ? '' : 'red'
    setLike(color)
  }
  return (
    <div className="d-flex justify-content-center">
      <div className="card mb-3" style={{ width: "60%" }}>
        <div className="card-body">
          <div className="row">
            <div className="col-md-8"> <h5 className="mt-3 border-bottom ">{Author.name}</h5></div>
            <div className="col-md-8"> <h3 className="mt-3 ">{title}</h3></div>
          </div>
          <p className="card-text">{description}</p>
        </div>
        <hr/>
        <button className="btn btn-success" onClick={handleApplyForJob} disabled={disable}>{text}</button>
        <span>
        <FontAwesomeIcon icon={faHeart} size='2x' className="" style={{marginLeft : '20%' ,marginBottom : '10px'}} onClick={handleLike} color={like}/>
        <FontAwesomeIcon icon={faComment} size='2x' className="" style={{marginLeft : '40%' ,marginBottom : '10px'}} />
        </span>
        
      </div>
    </div>
  );
};

export default JobPost;