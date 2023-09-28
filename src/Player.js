import React from 'react';
import ReactPlayer from 'react-player';

function Player({ video }) {
  return (
    <div className="video-player">
      <ReactPlayer url={video.url} controls={true} width="500px" height="500px" />
    </div>
  );
}

export default Player;
