import React from 'react';

const Posts = (props) => {
  const { name, img } = props.post;
  return (
    <div>
      <div className="card mb-3" style={{ width: "80%" }}>

        <div className="card-body">
          <div className="row">
            <div className="col-md-2"> <img className="card-img-top" src={img} alt="Card  cap" /> </div>
            <div className="col-md-8"> <h5 className="card-title">{name}</h5></div>
          </div>

          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

        </div>
      </div>
    </div>
  );
};

export default Posts;