import React from 'react';
import VideoItem from './VideoItem';
import PropTypes from 'prop-types';

const VideoList = ({ videos, onVideoSelect }) => {
  const videoItemList = videos.map(video => {
    const isYoutubeVideo = video.kind && video.kind === 'youtube#searchResult';
    return (
      <VideoItem
        key={isYoutubeVideo ? video.id.videoId : video.resource_key}
        onVideoSelect={onVideoSelect}
        video={video}
        contentAlign={isYoutubeVideo ? 'right' : 'left'}
      />
    );
  });
  return <div className="ui relaxed divided items">{videoItemList}</div>;
};

VideoList.propTypes = {
  onVideoSelect: PropTypes.func,
  videos: PropTypes.array
};

export default VideoList;
