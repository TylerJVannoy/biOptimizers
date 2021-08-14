import React from "react";

import VideoItemStyle from "./VideoItemStyle.css";

const VideoItem = ({ video, onVideoSelect }) => {
  //Same thing was done here we destructured onVideoSelect and added an onClick event handler and used an arrow function envoking the onVideoSelect and passed video as its argument
  //an arrow function was used so we can pass onVideoSelect with an argument, that argument was video.
  return (
    <div className="columns">
      <div onClick={() => onVideoSelect(video)} className="column">
        <div className="card border-0 h-100 bg-dark">
          <img
            loading="lazy"
            src={video.snippet.thumbnails.high.url}
            alt={video.snippet.channelTitle}
          ></img>
          <div className="card-body">
            <a href="#" className="btn btn-primary">
              View
            </a>
          </div>
        </div>
      </div>
      <h2>{video.snippet.title}</h2>
    </div>
  );
};

export default VideoItem;

/*
            <p className="card-text">{video.snippet.description}</p>
                        <h5 className="card-title">{video.snippet.title}</h5>

*/
