import React from 'react';
import YoutubeVideoItem from './YoutubeVideoItem';

const YoutubeVideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(video => {
    return (
      <YoutubeVideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  return <div className="ui relaxed divided items">{renderedList}</div>;
};

export default YoutubeVideoList;
