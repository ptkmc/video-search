import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const re = /([^/]+$)/;
  const videoSrc = `https://player.vimeo.com/video/${re.exec(video.uri)[0]}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.name}</h4>
        <p>{video.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
