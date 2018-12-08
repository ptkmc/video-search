import React from 'react';
import './VideoItem.css';

const VimeoVideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item right">
      <div className="video-row">
        <img
          className="ui image"
          src={video.pictures.sizes[3].link}
          alt={video.name}
        />
        <div className="content">
          <h4 className="ui small header">
            {video.name}
            <div className="sub header">{video.user.name}</div>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default VimeoVideoItem;
