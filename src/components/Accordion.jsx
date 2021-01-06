import React, { useState } from 'react';
import './Accordion.css';

const items = [
  {
    title: 'What is React',
    content: 'React is a front-end JavaScript framework'
  },
  {
    title:'Why use React',
    content: 'React is a favourite JavaScript library among engineers'
  },
  {
    title: 'How do you use React',
    content: 'You use React by creating components'
  }
];


const Accordion = () => {
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