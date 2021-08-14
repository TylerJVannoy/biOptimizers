import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
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
            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
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
