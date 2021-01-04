import React, {useState} from 'react';
// import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
// import SearchBox from './components/SearchBox';

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
];

const options = [
  {
    label: 'Red',
    value: 'red'
  },
  {
    label: 'Green',
    value: 'green'
  },
  {
    label: 'Blue',
    value: 'blue'
  }
];

const App = () => {
  const [dropSelection, setSelection] = useState(options[0]);
  return(
    // <Accordion  items={items}/>
    // <SearchBox />
    <Dropdown options={options} 
      selected={dropSelection} onSelection={setSelection} />
  )
}

export default App;