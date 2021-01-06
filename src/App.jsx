import React from 'react';
import Accordion from './components/Accordion';
import Pictures from './components/Pictures';
import WikiSearch from './components/WikiSearch';
import Translator from './components/Translator';

const showAccordion = () => {
  if (window.location.pathname === '/'){
    return <Accordion />
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
      {showAccordion()}
      {showWikiSearch()}
      {showPictures()}
      {showTranslator()}
    </div>
  )
}

export default App;