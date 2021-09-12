import React, {useState} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = ({pathnames}) => {
  // console.log('pathname', window.location.pathname);
  const [current, setCurrent] = useState(window.location.pathname);
  const menuList = pathnames.map((item, index) => {
    const activeClass = (item) => {
      if (current === '/' && item.pathname === '/videos')  // youtube
         return 'active';
      if (current === item.pathname) return 'active';
      else return '';
      
    }
    // clicking on a link also updates the path prop of Route component
    return (
      <li key={index}> 
        <Link to={item.pathname}
         className={` link ${activeClass(item)}`}
         onClick = {() => setCurrent(item.pathname)}
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