import React from 'react';
import './VideoDetails.css';
import ReactHtmlParser from 'react-html-parser';

const formatDate = (dateStr) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  let date = new Date(dateStr);
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate();
  return `${month} ${day}, ${year}`
}

const VideoDetails = ({selected}) => {
  const videoId = selected.id.videoId;
  return (
    <div className="video-details">
      <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={selected.title}>
      </iframe>
      <div className='vd-description'>
         <div>{ReactHtmlParser(selected.snippet.title)}</div>
         <div>{formatDate(selected.snippet.publishedAt)}</div>
      </div>
    </div>
  )
}

export default VideoDetails;