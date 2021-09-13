import {React, Component} from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

class ImageList extends Component {

  photos = () => {
    const {photos} = this.props;
    const imgs = photos.map((item, index) => {
      return (
        <ImageCard image={item} key={index}/>
      )
    });
    return imgs
  }
  render(){
    return(
      <div className='imageList'>{this.photos()}</div>
    )
  }
}

export default ImageList;