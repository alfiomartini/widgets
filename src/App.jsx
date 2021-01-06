import React from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import WikiSearch from './components/WikiSearch';
import Translator from './components/Translator';

const showAccordion = () => {
  if (window.location.pathname === '/'){
    return <Accordion />
  } 
}

const showSearchBox = () => {
  if (window.location.pathname === '/wiki'){
    return <WikiSearch />
  } 
}

const showDropdown = () => {
  if (window.location.pathname === '/dropdown'){
    return <Dropdown />
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
      {showSearchBox()}
      {showDropdown()}
      {showTranslator()}
    </div>
  )
}

export default App;