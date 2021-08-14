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

  //Where Videolist is defined, videos was already destructured, we went ahead and destructured onVideoSelect that we passed down from App.js, then passed it on to VideoItem
  //Move to VideoItem.js now
  //props.videos
  return (
    <section className="section">
      <div className="container">
        <div className="">{renderedList}</div>
      </div>
    </section>
  );
};

export default VideoList;
