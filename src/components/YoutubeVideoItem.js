import React from 'react';
import './VideoItem.css';

const YoutubeVideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <div className="video-row">
        <div className="content">
          <h4 className="ui small header">
            {video.snippet.title}
            <div className="sub header">{video.snippet.channelTitle}</div>
          </h4>
        </div>
        <img
          className="ui image"
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
      </div>
    </div>
  );
};

export default YoutubeVideoItem;
