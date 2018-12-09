import React from 'react';

const YoutubeVideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="video-details">
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h2 className="ui medium header">
          {video.snippet.title}
          <div className="sub header">{video.snippet.channelTitle}</div>
        </h2>
        <p>{`${video.snippet.description.substring(0, 100)}...`}</p>
      </div>
    </div>
  );
};

export default YoutubeVideoDetail;
