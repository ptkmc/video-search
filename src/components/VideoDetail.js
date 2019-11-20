import React from 'react';
import PropTypes from 'prop-types';
import he from 'he';
import Shiitake from 'shiitake';
import './VideoDetail.css';

class VideoDetail extends React.Component {
  static propTypes = {
    video: PropTypes.object
  };

  state = { truncatedText: true };

  toggleTruncatedText = () => {
    this.setState({ truncatedText: !this.state.truncatedText });
  };

  render() {
    const video = this.props.video;

    if (video === undefined) {
      return (
        <h3 className="ui medium header not-found">
          No Results Found
          <div className="ui sub header">Try different keywords</div>
        </h3>
      );
    }

    if (!video) {
      return <div>Loading...</div>;
    }

    const isYoutubeVideo = video.kind && video.kind === 'youtube#searchResult';
    let title, username, description, videoSrc;

    if (isYoutubeVideo) {
      title = he.decode(video.snippet.title);
      username = he.decode(video.snippet.channelTitle);
      description = he.decode(video.snippet.description);
      videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    } else {
      title = he.decode(video.name);
      username = he.decode(video.user.name);
      description = video.description ? he.decode(video.description) : '';
      videoSrc = `https://player.vimeo.com/video/${
        /([^/]+$)/.exec(video.uri)[0]
        }`;
    }

    return (
      <div className="video-details">
        <div className="ui embed">
          <iframe title="video player" src={videoSrc} />
        </div>
        <div
          className={`ui segment video-description ${isYoutubeVideo ? 'youtube-detail' : 'vimeo-detail'}`}
          onClick={this.toggleTruncatedText}
        >
          {this.state.truncatedText ? (
            <div>
              <h2 className="ui medium header">
                <Shiitake lines={2}>{title}</Shiitake>
                <div className="sub header">
                  <Shiitake lines={1}>{username}</Shiitake>
                </div>
              </h2>
              <Shiitake lines={2}>{description}</Shiitake>
            </div>
          ) : (
              <div>
                <h2 className="ui medium header">
                  <div>{title}</div>
                  <div className="sub header">
                    <div>{username}</div>
                  </div>
                </h2>
                <div>{description}</div>
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default VideoDetail;
