import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  //Same thing was done here we destructured onVideoSelect and added an onClick event handler and used an arrow function envoking the onVideoSelect and passed video as its argument
  //an arrow function was used so we can pass onVideoSelect with an argument, that argument was video.
  return (
    <div className="col mt-3">
      <div onClick={() => onVideoSelect(video)} className="item video-item">
        <div className="card border-0">
          <img
            className=" image"
            loading="lazy"
            src={video.snippet.thumbnails.high.url}
            alt={video.snippet.channelTitle}
          ></img>
          <div className="card-body">
            <h5 className="card-title">{video.snippet.title}</h5>
            <p className="card-text">{video.snippet.description}</p>
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
