import React from 'react';
import VimeoVideoItem from './VimeoVideoItem';

const VimeoVideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(video => {
    return (
      <VimeoVideoItem
        key={video.resource_key}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VimeoVideoList;
