import React from 'react';
import VideoInfo from './VideoInfo';
import './VideoDetail.css';

class YoutubeVideoDetail extends React.Component {
  state = { truncatedText: true };

  toggleTruncatedText = () => {
    const isToggled = this.state.truncatedText;
    this.setState({ truncatedText: !isToggled });
  };

  render() {
    if (!this.props.video) {
      return <div>Loading...</div>;
    }
    const { title, channelTitle, description } = this.props.video.snippet;
    const videoSrc = `https://www.youtube.com/embed/${
      this.props.video.id.videoId
    }`;

    return (
      <div className="video-details">
        <div className="ui embed">
          <iframe title="video player" src={videoSrc} />
        </div>
        <div
          className="ui segment video-description"
          onClick={this.toggleTruncatedText}
        >
          <VideoInfo
            title={title}
            channelTitle={channelTitle}
            description={description}
            truncState={this.state.truncatedText}
          />
        </div>
      </div>
    );
  }
}

export default YoutubeVideoDetail;
