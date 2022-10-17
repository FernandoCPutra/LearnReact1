import React from "react";

const Post = (props) => {
    return(
        <div className="post">
        <div className="img-thumb">
            <img src="https://placeimg.com/200/150/animals/sepia" alt="dummy-1" />
        </div>
         <div className="content">
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
            <button className="remove" onClick={props.remove}>remove</button>
        </div>
    </div>
    )
}

export default Post;