import { React, Component } from 'react';
import unsplash from './api/unsplash';
import PictureBox from './PictureBox';
import ImageList from './ImageList';
import './Pictures.css';

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
    unsplash.get('/search/photos', {
      params:{
        query: input,
        per_page:30
      }
    })
    .then(resp => {
      const photos = resp.data.results;
      const photosList = photos.map(item => {
        return {
          image_url: item.urls.regular,
          description: item.alt_description,
          height:item.height,
          width:item.width
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
         <PictureBox  setInputText={this.onSearchSubmit} />
         <ImageList photos={this.state.photos} /> 
      </div>
    );
  }
}

export default Pictures;