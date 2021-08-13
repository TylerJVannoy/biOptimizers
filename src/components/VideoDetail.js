import React from "react";
import VideoDetailStyle from "./VideoDetailStyle.css";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div></div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <img
        src="https://fb-v1.cdn-bio.com/assets/logo-ahc-5c476361868b32bfadae268911ac58a0.png"
        className="imagebrand mt-2"
      ></img>

      <div className="embed-responsive embed-responsive-16by9 responsive-video mt-2">
        <iframe
          className="embed-responsive-item"
          src={videoSrc}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoDetail;

/*
    <div>
      <div className="embed-responsive embed-responsive 21by9">
        <iframe
          className="embed-responsive-item"
          title="video player"
          src={videoSrc}
          allowFullScreen
        />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>

    */
