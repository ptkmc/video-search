import React from 'react';
import he from 'he';
import Shiitake from 'shiitake';
import './VideoDetail.css';

class VideoInfo extends React.Component {
  toggleShow = visibility => {
    return visibility ? 'show-content' : 'hide-content';
  };

  render() {
    let { title, channelTitle, description, truncState } = this.props;
    title = he.decode(title);
    channelTitle = he.decode(channelTitle);
    description = he.decode(description);
    return (
      <div>
        <h2 className="ui medium header">
          <Shiitake lines={2} className={this.toggleShow(truncState)}>
            {title}
          </Shiitake>
          <div className={this.toggleShow(!truncState)}>{title}</div>
          <div className="sub header">
            <Shiitake lines={1} className={this.toggleShow(truncState)}>
              {channelTitle}
            </Shiitake>
            <div className={this.toggleShow(!truncState)}>{channelTitle}</div>
          </div>
        </h2>
        <Shiitake lines={2} className={this.toggleShow(truncState)}>
          {description}
        </Shiitake>
        <div className={this.toggleShow(!truncState)}>{description}</div>
      </div>
    );
  }
}

export default VideoInfo;
