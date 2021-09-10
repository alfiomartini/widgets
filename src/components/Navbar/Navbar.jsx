import React, {useState} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = ({pathnames}) => {
  // console.log('pathname', window.location.pathname);
  const [current, setCurrent] = useState(window.location.pathname);
  const menuList = pathnames.map((item, index) => {
    const activeClass = (item) => {
      if (current === '/' && item.path === '/videos')  // youtube
         return 'active';
      if (current === item.path) return 'active';
      else return '';
      
    }
    return (
      <li key={index}> 
        <Link to={item.path} 
         className={` link ${activeClass(item)}`}
         onClick = {() => setCurrent(item.path)}
        >
          {item.routeName}
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

export default Navbar;