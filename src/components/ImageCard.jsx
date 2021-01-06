import React from 'react';

  
class ImageCard extends React.Component{
  constructor(props){
    super(props);
    this.imageRef = React.createRef();
    this.state = { spans:0 };
  }

  componentDidMount(){
    const imgElem = this.imageRef.current;
    imgElem.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    // console.log(this.imageRef);
    const height = this.imageRef.current.clientHeight;
    // 10 is the value of grid-auto-rows in ImageList.css
    const spans = Math.ceil((height / 10) + 1);
    this.setState({spans:spans});
  }

  render(){
    const { description, image_url } = this.props.image;
    return (
      <div style = {{gridRowEnd: `span ${this.state.spans}`}}>
        <img ref={this.imageRef} src={image_url} alt={description}/>
      </div>
    )
  }
}

export default ImageCard;