import React from "react";

import VideoItemStyle from "./VideoItemStyle.css";

const VideoItem = ({ video, onVideoSelect }) => {
  //Same thing was done here we destructured onVideoSelect and added an onClick event handler and used an arrow function envoking the onVideoSelect and passed video as its argument
  //an arrow function was used so we can pass onVideoSelect with an argument, that argument was video.
  return (
    <div className="col">
      <div onClick={() => onVideoSelect(video)} className="item video-item">
        <div className="text-center">
          <img
            className=" image"
            width="1296"
            height="972"
            src={video.snippet.thumbnails.high.url}
            alt={video.snippet.channelTitle}
          ></img>
          <div className="">
            <h5 className="">{video.snippet.title}</h5>
            <p className="card-text">{video.snippet.description}</p>
            <a
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              className="btn btn-primary"
            >
              Watch
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
