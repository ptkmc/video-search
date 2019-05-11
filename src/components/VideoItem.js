import React from 'react';
import PropTypes from 'prop-types';
import he from 'he';
import Shiitake from 'shiitake';
import './VideoItem.css';

class VideoItem extends React.Component {
  static propTypes = {
    onVideoSelect: PropTypes.func,
    video: PropTypes.object,
    contentAlign: PropTypes.string
  };

  getThumbnail = video => {
    for (let i = 3; i > -1; i--) {
      if (video.pictures.sizes[i]) {
        return video.pictures.sizes[i].link;
      }
    }
    return 'https://f.vimeocdn.com/images_v6/logo.png?DEV';
  };

  render() {
    const video = this.props.video;
    let title, username, thumbnail;

    if (video.kind && video.kind === 'youtube#searchResult') {
      title = he.decode(video.snippet.title);
      username = he.decode(video.snippet.channelTitle);
      thumbnail = video.snippet.thumbnails.medium.url;
    } else {
      title = he.decode(video.name);
      username = he.decode(video.user.name);
      thumbnail = this.getThumbnail(this.props.video);
    }

    if (this.props.contentAlign === 'right') {
      return (
        <div
          className="item right-floated-item video-item"
          onClick={() => this.props.onVideoSelect(video)}
        >
          <div className="ui content">
            <div className="ui right floated">
              <span className="ui header">
                <Shiitake lines={2} className="clamp-header">
                  {title}
                </Shiitake>
              </span>
              <div className="ui meta">
                <span className="ui right floated">
                  <Shiitake lines={1}>{username}</Shiitake>
                </span>
              </div>
            </div>
          </div>

          <div className="ui right floated small image">
            <img src={thumbnail} alt={title} />
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="item video-item"
          onClick={() => this.props.onVideoSelect(video)}
        >
          <div className="ui small image">
            <img src={thumbnail} alt={title} />
          </div>
          <div className="ui content">
            <div className="ui header">
              <Shiitake lines={2}>{title}</Shiitake>
            </div>
            <span className="ui meta">
              <Shiitake lines={1}>{username}</Shiitake>
            </span>
          </div>
        </div>
      );
    }
  }
}

export default VideoItem;
