import React from 'react';
import './VideoItem.css';

class VimeoVideoItem extends React.Component {
  getThumbnail = video => {
    for (let i = 3; i > -1; i--) {
      if (video.pictures.sizes[i]) {
        return video.pictures.sizes[i].link;
      }
    }
    return 'https://f.vimeocdn.com/images_v6/logo.png?DEV';
  };

  render() {
    return (
      <div
        onClick={() => this.props.onVideoSelect(this.props.video)}
        className="video-item item right"
      >
        <div className="video-row">
          <img
            className="ui image"
            src={this.getThumbnail(this.props.video)}
            alt={this.props.video.name}
          />
          <div className="content">
            <h4 className="ui small header">
              {this.props.video.name}
              <div className="sub header">{this.props.video.user.name}</div>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default VimeoVideoItem;
