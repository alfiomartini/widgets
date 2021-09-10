import React, {useState} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = ({options}) => {
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

export default Navbar;