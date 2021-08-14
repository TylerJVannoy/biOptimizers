import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  //Same thing was done here we destructured onVideoSelect and added an onClick event handler and used an arrow function envoking the onVideoSelect and passed video as its argument
  //an arrow function was used so we can pass onVideoSelect with an argument, that argument was video.
  return (
    <div className="columns">
      <div className="column">
        <div className="card">
          <img
            className="card-image"
            loading="lazy"
            src={video.snippet.thumbnails.high.url}
            alt={video.snippet.channelTitle}
          ></img>
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

{
  /* <div className="column">
<div className="card" onClick={() => onVideoSelect(video)} className="">
  <img
    className="card-image"
    loading="lazy"
    src={video.snippet.thumbnails.high.url}
    alt={video.snippet.channelTitle}
  ></img>
  <div className="card-footer-item">
    <a href="#" className="btn btn-primary">
      View
    </a>
  </div>
</div>
</div> */
}
