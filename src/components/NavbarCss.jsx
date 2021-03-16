import React, {useState} from 'react';
import './css/NavbarCss.css';
import {Link} from 'react-router-dom';

const NavbarCss = ({options}) => {
  // console.log('pathname', window.location.pathname);
  const [current, setCurrent] = useState(window.location.pathname);
  const menuList = options.map((item, index) => {
    return (
      <li key={index}> 
        <Link to={item.path} 
         className={` link ${current === item.path?'active':''}`}
         onClick = {() => setCurrent(item.path)}
        >
          {item.option}
        </Link>
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