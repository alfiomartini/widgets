import React from 'react';
import './css/VideoItem.css';
import ReactHtmlParser from 'react-html-parser';

const VideoItem = (props) => {
  const onVideoSelect = props.onVideoSelect;
  const video = props.video;
  const title = video.snippet.title.slice(0,60)
  return (
    <div className="video-item item" onClick={()=>{onVideoSelect(video)}}>
      <img className="ui image small"
           src={video.snippet.thumbnails.medium.url} 
           alt={title}
       />
      <div className="content">
        <span className="header">
          {ReactHtmlParser(`${title}...`)}
        </span>
        <div className="description">
          {video.snippet.channelTitle} 
        </div>
      </div>
    </div>
  )
}

export default VideoItem;