import React from 'react';
import ClampLines from 'react-clamp-lines';

class VimeoVideoDetail extends React.Component {
  getVideoDescription = video => {
    if (video.description) {
      return video.description;
    }
    return '';
  };

  render() {
    const video = this.props.video;
    const re = /([^/]+$)/;

    if (!video) {
      return <div>Loading...</div>;
    }

    return (
      <div className="video-details">
        <div className="ui embed">
          <iframe
            title="video player"
            src={`https://player.vimeo.com/video/${re.exec(video.uri)[0]}`}
          />
        </div>
        <div className="ui segment">
          <h2 className="ui medium header">
            {video.name}
            <div className="sub header">{video.user.name}</div>
          </h2>
          <ClampLines
            text={this.getVideoDescription(video)}
            lines={1}
            ellipsis="..."
            moreText="Show more"
            lessText="Show less"
            className=""
          />
        </div>
      </div>
    );
  }
}

export default VimeoVideoDetail;
