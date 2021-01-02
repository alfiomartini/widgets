import React from 'react';
import './SearchList.css';
import ReactHtmlParser from 'react-html-parser';

const SearchList = ({results}) => {
  const messageList = results.map((item, index) => {
    return(
     <div class="ui message" key={index}>
       <div className="header">
         {item.title}
       </div>
       <p>{ReactHtmlParser(item.snippet)}</p>
     </div>
    )
  });

  return(
    <div className='search-list'>
      {messageList}
    </div>
  )
}

export default SearchList;