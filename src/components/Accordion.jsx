import React, { useState } from 'react';
import './Accordion.css';


const Accordion = ({items}) => {
  const [activeIndex, setIndex] = useState(null);

  const onTitleClick = (index) => {
    setIndex(index);
  }
  const itemsList = items.map((item, index) => {
    return(
      <React.Fragment key={index}>
        <div className="active title" onClick={()=>onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="active content">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    )
  });

  return(
    <div className="ui styled accordion">
     {itemsList}
     <h1>{activeIndex}</h1>
    </div>
  )
}

export default Accordion;