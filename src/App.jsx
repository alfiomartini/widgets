import React from 'react';
import Youtube from './components/Youtube';
import Pictures from './components/Pictures';
import WikiSearch from './components/WikiSearch';
import Translator from './components/Translator';

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

const App = () => {
  return(
    <div>
       {showComponent(window.location.pathname)}
    </div>
  )
}

export default App;