import React from 'react';
import ClampLines from 'react-clamp-lines';

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
        <ClampLines
          text={video.snippet.description}
          lines={1}
          ellipsis="..."
          moreText="Show more"
          lessText="Show less"
          className=""
        />
      </div>
    </div>
  );
};

export default YoutubeVideoDetail;
