import React from 'react';
import Shiitake from 'shiitake';

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
        className="item"
        onClick={() => this.props.onVideoSelect(this.props.video)}
        style={{ cursor: 'pointer' }}
      >
        <div className="ui small image">
          <img
            src={this.getThumbnail(this.props.video)}
            alt={this.props.video.name}
          />
        </div>

        <div className="ui content">
          <div className="ui header">
            <Shiitake lines={2}>{this.props.video.name}</Shiitake>
          </div>

          <span className="ui meta">
            <Shiitake lines={1}>{this.props.video.user.name}</Shiitake>
          </span>
        </div>
      </div>
    );
  }
}

export default VimeoVideoItem;
