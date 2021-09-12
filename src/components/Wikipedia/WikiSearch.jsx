import React from 'react';
import SearchList from './SearchList';
import './WikiSearch.css';

const API_URL = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*`

class  WikiSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input:'programming languages',
      results:[]
    }
  }
   
  getWiki = () => {
    fetch(`${API_URL}&srsearch=${this.state.input}`)
    .then(resp => resp.json())
    .then(data => {
      const results = data.query.search;
      this.setState({results:results});
    })
    .catch(error => console.log(error)); 
  }

  componentDidMount(){
     this.getWiki();
  }
   
  
  // user arrow function not to loose this binding
  // now is lexical (it binds to the class instance)
   onSearch = () =>{
     if (this.state.input.trim()) {
      this.getWiki();
     }
   }

    

   onChange = (event) => {
     const value = event.target.value;
     this.setState({input:value});
   }
   
   render(){
    return(
      <div className='search-box-body'>
        <div className='search-box'>
          <div className="ui large icon input">
            <input type="text" placeholder="Search wikipedia.org ..." value={this.state.input} 
            onChange={this.onChange}
            />
            <i className="inverted circular search link icon"
              onClick={this.onSearch}
              > 
            </i>
          </div>
        </div>
        <SearchList results={this.state.results}/>
      </div>
     )
   }
}

export default WikiSearch;