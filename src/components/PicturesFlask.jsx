import { React, Component } from 'react';
import PictureBox from './PictureBox';
import ImageList from './ImageList';
import './css/Pictures.css';
import {URL_PROD} from './settings';

class Pictures extends Component {
  constructor(){
    super();
    this.state ={
      input:'',
      photos:[]
    };
  }

  componentDidMount = () =>{
    this.onSearchSubmit('night');
  }
  

  onSearchSubmit = (input) => {
    this.setState({input:input});
    fetch(`${URL_PROD}/unsplash/${input}`)
    .then(resp => resp.json())
    .then(resp => {
      // console.log('resp', resp);
      const photos = resp.results;
      const photosList = photos.map(item => {
        return {
          image_url: item.urls.regular,
          description: item.alt_description,
          height:item.height,
          width:item.width,
          download:item.links.html
        }
      });
      // console.log(photos);
      this.setState({photos:photosList});
    })
    .catch(error => console.log(error));
  }

  render(){
    return (
      <div className="pictures">
         <PictureBox  setInputText={this.onSearchSubmit} input={this.state.input}/>
         <ImageList photos={this.state.photos} /> 
      </div>
    );
  }
}

export default Pictures;