import React from 'react';
import Youtube from './components/Youtube';
import Pictures from './components/Pictures';
import WikiSearch from './components/WikiSearch';
import Translator from './components/Translator';
import NavbarCss from './components/NavbarCss'

const showComponent = (pathname) => {
  if (pathname === '/'){
    return <Youtube />
  }
  if (pathname === '/translate'){
    return <Translator />
  }
  if (pathname === '/pictures'){
    return <Pictures />
  }
  if (pathname==='/wiki'){
    return <WikiSearch />
  }
}

const menu = [
  {
    option:'Videos',
    path:'/'
  },
  {
    option:'Translate',
    path:'/translate'
  },
  {
    option:'Articles',
    path:'/wiki'
  },
  {
    option:'Pictures',
    path:'/pictures'
  }
]

const App = () => {
  return(
    <div>
       <NavbarCss options={menu} />
       {showComponent(window.location.pathname)}
    </div>
  )
}

export default App;