import React from 'react';
import './css/NavbarCss.css';
const NavbarCss = ({options}) => {
  const menuList = options.map((item, index) => {
    return (
      <li key={index}> 
        <a href={window.location.origin + item.path}>
          {item.option}
        </a>
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