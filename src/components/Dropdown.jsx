import React, { useState, useEffect, useRef } from 'react';
import './Dropdown.css';

const options = [
  {
    label: 'Red',
    value: 'red'
  },
  {
    label: 'Green',
    value: 'green'
  },
  {
    label: 'Blue',
    value: 'blue'
  }
];

const Dropdown = () => {
  const [selected, setSelection] = useState(options[0]);
  const [openMenu, setOpen] = useState(false);
  const elemRef = useRef();

  // run only once
  useEffect(() => {
    const onBodyClick = (event) => {
      //  if elemRef is the form element (hence inside Dropdown.jsx)
        if (elemRef.current.contains(event.target)){
          // do nothing. Follow what the code tells
          return;
        }
        // we are clicking in the body. Close the dropdown.
        else setOpen(false);
     }

     document.body.addEventListener('click', onBodyClick, {capture:true});
    //  clean up function that runs when the component is rendered for the first time
    //  and that is rendered in the app's next rendering
     return () => {
       document.body.removeEventListener('click', onBodyClick);
     }
  },[]);

  const optionsMenu = options.map((item, index) => {
    if (selected.value === item.value){
      return null; // shows nothing on the screen
    }
    return (
      <div key={index} onClick={()=>setSelection(item)}
           className="item"> 
        {item.label}
      </div>
    )
  });
  return(
    // ref.current is a reference (pointer) to the div bellow
    <div ref={elemRef} className="ui form">
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

