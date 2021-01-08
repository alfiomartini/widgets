import React from 'react';
import './css/NavbarCss.css';
const NavbarCss = ({setSelection, current, options}) => {

  const menuList = options.map((item, index) => {
    return (
      <li key={index} 
          onClick={() => setSelection(item.option)}
          > 
        <span href="/"
        className={`${current === item.option?'active':''}`}
        >
          {item.option}
        </span>
      </li>
    )
  })
  return(
    <ul className='menu-list'>
      {menuList}
    </ul>
  )
}

export default NavbarCss;