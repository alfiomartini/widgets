import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
  const { videos, onVideoSelect } = props;
  const videoList  = videos.map((video, index)=>{
    return <VideoItem video={video} key={index} onVideoSelect={onVideoSelect}/>
  })
  return(
    <div className="ui relaxed divided list video-list">
      {videoList}
    </div>
  )
}

export default VideoList;