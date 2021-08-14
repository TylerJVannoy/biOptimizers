import React from "react";

import VideoItemStyle from "./VideoItemStyle.css";

const VideoItem = ({ video, onVideoSelect }) => {
  //Same thing was done here we destructured onVideoSelect and added an onClick event handler and used an arrow function envoking the onVideoSelect and passed video as its argument
  //an arrow function was used so we can pass onVideoSelect with an argument, that argument was video.
  return (
    <div class="col-sm-12 col-md-6 col-lg-4">
      <div class="card">
        <img
          class="card-img-top img-fluid"
          width="414"
          height="310.5"
          src={video.snippet.thumbnails.high.url}
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Video Title Here</h5>
          <p class="card-text">
            Some quick example text to build on the title and make up the bulk
            of the card's content.
          </p>
          <a
            href={`https://www.youtube.com/watch?v=${video.div.vieoId}`}
            class="btn btn-primary"
          >
            Watch Video
          </a>
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
  /* <div className="col-s-12 col-md-6 col-lg-2">
<div onClick={() => onVideoSelect(video)} className="item video-item">
  <div className="card text-center">
    <img
      className=" image"
      width="1296"
      height="972"
      src={video.snippet.thumbnails.high.url}
      alt={video.snippet.channelTitle}
    ></img>
    <div className="card">
      <h5 className="card-title">{video.snippet.title}</h5>
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
</div> */
}
