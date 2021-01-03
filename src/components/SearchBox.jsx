import React, {useState, useEffect } from 'react';
import SearchList from './SearchList';
import './SearchBox.css';

const SearchBox = () => {
   const [ input, setInput] = useState('programming languages');
   const [ results, setResults] = useState([]);
   const [ timeoutId, setTimeoutId] = useState(null);

   const API_URL = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*`

   const getWiki = () => {
    fetch(`${API_URL}&srsearch=${input}`)
    .then(resp => resp.json())
    .then(data => {
      const results = data.query.search;
      console.log(results);
      setResults(results);
    })
    .catch(error => console.log(error));  
   }

   function onSearchDelay(){
     if (!input.trim()){
       return;
     }

     if (input.trim() && !results.length){ // first time rendering
       getWiki()
     } 
     else{
      setTimeoutId(setTimeout(getWiki, 500));  
     }
   }

   function onSearch(){
     if (input.trim()) {
      getWiki();
     }
   }

  //  when the array is empty: callback run at initial render
  // without array at all: run at initial render and after every rerendering
  // array with data: run at initial rendering and after every rerendering
  // if some state has changed since last rendering

   useEffect(() =>{
     clearTimeout(timeoutId);
     onSearchDelay()
   }, [input]);

   const onChange = (event) => {
     setInput(event.target.value);
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