import React from 'react';

const VimeoVideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const re = /([^/]+$)/;
  const videoSrc = `https://player.vimeo.com/video/${re.exec(video.uri)[0]}`;

  return (
    <div className="video-details">
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h2 className="ui medium header">
          {video.name}
          <div className="sub header">{video.user.name}</div>
        </h2>
        <p>{`${video.description.substring(0, 100)}...`}</p>
      </div>
    </div>
  );
};

export default VimeoVideoDetail;
