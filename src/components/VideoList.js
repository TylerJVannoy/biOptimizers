import React from "react";

import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(video => {
    return (
      <div className="columns">
        <VideoItem
          key={video.id.videoId}
          onVideoSelect={onVideoSelect}
          video={video}
        />
      </div>
    );
  });

  //Where Videolist is defined, videos was already destructured, we went ahead and destructured onVideoSelect that we passed down from App.js, then passed it on to VideoItem
  //Move to VideoItem.js now
  //props.videos
  return (
    <div className="container">
      <div className="row align-items-start">{renderedList}</div>
    </div>
  );
};

export default VideoList;
