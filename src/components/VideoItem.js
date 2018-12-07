import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        className="ui image"
        src={video.pictures.sizes[3].link}
        alt={video.name}
      />
      <div className="content">
        <div className="header">{video.name}</div>
      </div>
    </div>
  );
};

export default VideoItem;
