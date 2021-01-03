import React, {useState, useEffect, useCallback } from 'react';
import SearchList from './SearchList';
import './SearchBox.css';

const SearchBox = () => {
   const [ input, setInput] = useState('programming languages');
   const [ debounced, setDebounced] = useState(input);
   const [ results, setResults] = useState([]);
   const [ timeoutId, setTimeoutId] = useState(null);
   

   const API_URL = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*`

  //see: https://stackoverflow.com/questions/62601538/react-useeffect-passing-a-function-in-the-dependency-array
   const getWiki = useCallback(
    () => {
      fetch(`${API_URL}&srsearch=${debounced}`)
      .then(resp => resp.json())
      .then(data => {
        const results = data.query.search;
        console.log(results);
        setResults(results);
      })
      .catch(error => console.log(error));  
     }, [API_URL, debounced]
   ) 

  
   function onSearch(){
     if (input.trim()) {
      getWiki();
     }
   }

   function onSearchDebounced(){
    if (debounced.trim()) {
      getWiki();
     }
   }

  //  when the array is empty: callback run at initial render
  // without array at all: run at initial render and after every rerendering
  // array with data: run at initial rendering and after every rerendering
  // if some state has changed since last rendering

   useEffect(onSearchDebounced, [debounced, getWiki]);

   const onChange = (event) => {
     const value = event.target.value;
     setInput(value);
     clearTimeout(timeoutId);
     setTimeoutId(setTimeout(()=>{setDebounced(value)}, 500));
   }

   return(
    <div>
      <div className='search-box'>
        <div className="ui large icon input">
          <input type="text" placeholder="Search..." value={input} 
          onChange={onChange}
          />
          <i className="inverted circular search link icon"
            onClick={onSearch}
            > 
          </i>
        </div>
      </div>
      <SearchList results={results}/>
    </div>
   )
}

export default SearchBox;