import React, {useState} from 'react';
import './css/NavbarCss.css';
const NavbarCss = ({options}) => {
  
  const [active, setActive] = useState(window.location.pathname);

  const menuList = options.map((item, index) => {
    return (
      <li key={index} 
          onClick={() => setActive(window.location.pathname)}
          > 
        <a href={window.location.href + item.path}
        className={`${item.path === active?'active':''}`}
        >
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