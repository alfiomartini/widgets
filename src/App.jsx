import React from 'react';
import Youtube from './components/Youtube';
import Pictures from './components/Pictures';
import WikiSearch from './components/WikiSearch';
import Translator from './components/Translator';

const showYoutube = () => {
  if (window.location.pathname === '/'){
    return <Youtube />
  } 
}

const showWikiSearch = () => {
  if (window.location.pathname === '/wiki'){
    return <WikiSearch />
  } 
}

const showPictures = () => {
  if (window.location.pathname === '/pictures'){
    return <Pictures />
  } 
}

const showTranslator = () => {
  if (window.location.pathname === '/translate'){
    return <Translator />
  } 
}

const App = () => {
  return(
    <div>
      {showYoutube()}
      {showWikiSearch()}
      {showPictures()}
      {showTranslator()}
    </div>
  )
}

export default App;