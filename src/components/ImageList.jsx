import {React, Component} from 'react';
import ImageCard from './ImageCard';
import './css/ImageList.css';

class ImageList extends Component {

  photos = () => {
    const {photos} = this.props;
    // console.log(photos);
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