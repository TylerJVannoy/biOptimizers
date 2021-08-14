import React from "react";

import VideoItemStyle from "./VideoItemStyle.css";

const VideoItem = ({ video, onVideoSelect }) => {
  //Same thing was done here we destructured onVideoSelect and added an onClick event handler and used an arrow function envoking the onVideoSelect and passed video as its argument
  //an arrow function was used so we can pass onVideoSelect with an argument, that argument was video.
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 mt-3">
      <div onClick={() => onVideoSelect(video)} className="item video-item">
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
    </div>
  );
};

export default VideoItem;

/*
            <p className="card-text">{video.snippet.description}</p>
                        <h5 className="card-title">{video.snippet.title}</h5>

*/
