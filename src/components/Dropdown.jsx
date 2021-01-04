import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = ({options, selected, onSelection}) => {

  const [openMenu, setOpen] = useState(false);
  const optionsMenu = options.map((item, index) => {
    if (selected.value === item.value){
      return null; // shows nothing on the screen
    }
    return (
      <div key={index} onClick={()=>onSelection(item)}
           className="item"> 
        {item.label}
      </div>
    )
  });
  return(
    <div className="ui form">
      <div className="field">
        <label htmlFor="" className="label">Select Color</label>
        <div onClick={()=>setOpen(!openMenu)}
           className={`ui selection dropdown ${openMenu?'visible active':''}`}>
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${openMenu?'visible transition':''}`}>
            {optionsMenu}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown;

