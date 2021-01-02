import React from 'react';
import Accordion from './components/Accordion';
import SearchBox from './components/SearchBox'

const items = [
  {
    title: 'What is React',
    content: 'React is a front-end JavaScript framework'
  },
  {
    title:'Why use React',
    content: 'React is a favourite JavaScript library among engineers'
  },
  {
    title: 'How do you use React',
    content: 'You use React by creating components'
  }
]

const App = () => {
  return(
    // <Accordion  items={items}/>
    <SearchBox />
  )
}

export default App;