import React from 'react';
import './css/SearchList.css';
import ReactHtmlParser from 'react-html-parser';

const SearchList = ({results}) => {
  const messageList = results.map((item, index) => {
    return(
      <a href={`https://en.wikipedia.org/?curid=${item.pageid}`} 
        target='bkank_' key={index} className='search-item'>
        <div className="ui message" >
          <div className="header">
            {item.title}
          </div>
          <p>{ReactHtmlParser(item.snippet)}</p>
        </div>
      </a>
     
    )
  });

  return(
    <div className='search-list'>
      {messageList}
    </div>
  )
}

export default SearchList;