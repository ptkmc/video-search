// https://react.semantic-ui.com/behaviors/visibility/#types-visibility
import React from 'react';
import Shiitake from 'shiitake';
import './VideoItem.css';

const YoutubeVideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      className="item right-floated-item"
      onClick={() => onVideoSelect(video)}
    >
      <div className="ui content">
        <div className="ui right floated">
          <span className="ui header">
            <Shiitake lines={2} className="clamp-header">
              {video.snippet.title}
            </Shiitake>
          </span>
          <div className="ui meta">
            <span className="ui right floated">
              <Shiitake lines={1}>{video.snippet.channelTitle}</Shiitake>
            </span>
          </div>
        </div>
      </div>

      <div className="ui right floated small image">
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
      </div>
    </div>
  );
};

export default YoutubeVideoItem;
