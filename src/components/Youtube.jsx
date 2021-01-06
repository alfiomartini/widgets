import React from 'react';
import SearchBox from './SearchBox';
import VideoList from './VideoList';
import './css/Youtube.css';
import VideoDetails from './VideoDetails';

class Youtube extends React.Component {
  constructor(){
    super();
    this.state = {
      videos:[],
      selected:''
    };
  }

  componentDidMount(){
    this.onSearchSubmit('haskell for the imperative programmer');
  }

  onVideoSelect = (video) => {
    this.setState({selected:video});
  }

  onSearchSubmit = (input) => {
    const API_URL='https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video';

    fetch(`${API_URL}&key=${process.env.REACT_APP_Y2B_KEY}&q=${input}`)
    .then(resp=>resp.json())
    .then(data=>{
      console.log(data.items);
      this.setState({
        videos:data.items,
        selected:data.items[0]
      })
    })
    .catch(error => console.log(error));
  }
  render(){
    return(
      <div className='youtube'>
        <SearchBox onSearchSubmit={this.onSearchSubmit} />
      {
        (this.state.selected) &&
        <VideoDetails selected={this.state.selected} />
      }
        <VideoList videos = {this.state.videos} onVideoSelect={this.onVideoSelect}/>
      </div>
    )
  }
}

export default Youtube;