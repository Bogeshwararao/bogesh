// eslint-disable-next-line 
//  //
import React from "react";

const BlogCard = (props) => {
  return (
    <div className="col-md-5 col-10 mx-auto my-2" data-aos="flip-left">
      <div className="card blog-card">
        <a href={props.link}  >
        
          <img
            className="card-img-top Project-Card-img"
            src={props.imgsrc}
            alt="Card-img"
          />
        </a>
        <div className="card-body">
          <h5 className="card-title font-weight-bold">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <div className="published-date text-muted bold">
            {props.published} 
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
