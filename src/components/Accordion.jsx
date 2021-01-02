import React, { useState } from 'react';
import './Accordion.css';


const Accordion = ({items}) => {
  // null is used only once, on initialization
  const [activeIndex, setIndex] = useState(null);

  const onTitleClick = (index) => {
    setIndex(index);
  }

  const itemsList = items.map((item, index) => {
    const active = activeIndex === index? 'active': '';
    return(
      <React.Fragment key={index}>
        <div className={`title ${active}`} onClick={()=>onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    )
  });

  return(
    <div className="ui styled accordion">
     {itemsList}
    </div>
  )
}

export default Accordion;