import React from "react";
import "./YoutubeComponent.css";

const YoutubeComponent = (props) => {
  return (
    <div className="youtube-wrapper">
      <div className="img-thumb">
        <img src="https://wallpaperaccess.com/full/359092.jpg" alt="" />
        <p className="time">{props.time}</p>
      </div>
      <p className="title">{props.title}</p>
      <p className="desc">{props.desc}</p>
    </div>
  );
};

YoutubeComponent.defaultProps = {
  //buat kasih nilai default
  time: "00.00",
  title: "No title",
  desc: "No desc",
};

export default YoutubeComponent;
