import React from 'react';
import VideoInfo from './VideoInfo';
import './VideoDetail.css';

class VimeoVideoDetail extends React.Component {
  state = { truncatedText: true };

  toggleTruncatedText = () => {
    const isToggled = this.state.truncatedText;
    this.setState({ truncatedText: !isToggled });
  };

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
        <div
          className="ui segment video-description"
          onClick={this.toggleTruncatedText}
        >
          <VideoInfo
            title={video.name}
            channelTitle={video.user.name}
            description={this.getVideoDescription(video)}
            truncState={this.state.truncatedText}
          />
        </div>
      </div>
    );
  }
}

export default VimeoVideoDetail;
