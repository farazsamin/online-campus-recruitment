import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
const Posts = (props) => {
  // const [postImage, setPostImage] = useState(null)
  const { title,description ,image} = props.post;
  
  // console.log( title + description +)
  let img=new Buffer.from(image.data).toString('base64');           
  img=`data:image/jpg;base64,${img}`;
  // setPostImage(img)
  
  const [like, setLike] = useState('')
  const handleLike =() =>{
    const color = like ? '' : 'red'
    setLike(color)
  }
  return (
    <div>
      <div className="card mb-3" style={{ width: "80%" }}>

        <div className="card-body">
          <div className="row">
            <div className="col-md-2"> <img style={{width : '100%', height: '65%' }} className="rounded-circle" src={img} alt="Card  cap" /> </div>
            <div className="col-md-8"> <h5 className="mt-3">{title}</h5></div>
          </div>
          <img style={{width : '100%', height: '30rem', objectFit : 'cover'}} className="" src={img} alt="Card  cap" />
          <p className="card-text">{description}</p>

        </div>
        <hr/>
        <span>
        <FontAwesomeIcon icon={faHeart} size='2x' className="" style={{marginLeft : '20%' ,marginBottom : '10px'}} onClick={handleLike} color={like}/>
        <FontAwesomeIcon icon={faComment} size='2x' className="" style={{marginLeft : '40%' ,marginBottom : '10px'}} />
        </span>
        
      </div>
    </div>
  );
};

export default Posts;