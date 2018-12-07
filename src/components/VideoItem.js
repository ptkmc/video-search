import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item right">
      <div className="video-row">
        <img
          className="ui image"
          src={video.pictures.sizes[3].link}
          alt={video.name}
        />
        <div className="content">
          <div className="ui header">{video.name}</div>
          {video.user.name}
          {/* <p>{video.description}</p> */}
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
