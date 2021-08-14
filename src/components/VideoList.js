import React from "react";

import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  return (
    <div className="container">
      <div className="text-center">
        <h3>Awesome Health Course</h3>
      </div>
      <div className="row">{renderedList}</div>
    </div>
  );
};

export default VideoList;
