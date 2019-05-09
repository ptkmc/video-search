import React from 'react';
import he from 'he';
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
              {he.decode(video.snippet.title)}
            </Shiitake>
          </span>
          <div className="ui meta">
            <span className="ui right floated">
              <Shiitake lines={1}>
                {he.decode(video.snippet.channelTitle)}
              </Shiitake>
            </span>
          </div>
        </div>
      </div>

      <div className="ui right floated small image">
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={he.decode(video.snippet.title)}
        />
      </div>
    </div>
  );
};

export default YoutubeVideoItem;
