import React from 'react';
import VideoBox from './VideoBox';
import VideoList from './VideoList';
import './Youtube.css';
import VideoDetails from './VideoDetails';
import {URL_PROD} from './../settings'

class Youtube extends React.Component {
  constructor(){
    super();
    this.state = {
      videos:[],
      selected:''
    };
  }

  componentDidMount(){
    this.onSearchSubmit('Nicole Cross');
  }

  onVideoSelect = (video) => {
    this.setState({selected:video});
  }

  onSearchSubmit = (input) => {
    fetch(`${URL_PROD}/youtube/${input}`)
    .then(resp=>resp.json())
    .then(data=>{
      // console.log(data.items);
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
        <VideoBox onSearchSubmit={this.onSearchSubmit} />
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