import React, {useState} from 'react';
import SearchList from './SearchList';
import './SearchBox.css';

const SearchBox = () => {
   const [ input, setInput] = useState('');
   const [ results, setResults] = useState([]);

   const API_URL = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*`

   const onSearch = () => {
     fetch(`${API_URL}&srsearch=${input}`)
     .then(resp => resp.json())
     .then(data => {
       const results = data.query.search;
       console.log(results);
       setResults(results);
     })
     .catch(error => console.log(error));     
   }

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