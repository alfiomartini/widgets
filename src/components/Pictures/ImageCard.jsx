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
  
  componentWillUnmount(){
    this.imageRef.current.removeEventListener('load', this.setSpans);
  }

  setSpans = () => {
    // console.log(this.imageRef);
    const height = this.imageRef.current.clientHeight;
    // 10 is the value of grid-auto-rows in ImageList.css
    const spans = Math.ceil((height / 10) + 1);
    this.setState({spans:spans});
  }

  render(){
    const { description, image_url, download } = this.props.image;
    return (
      <div style = {{gridRowEnd: `span ${this.state.spans}`}}>
        <a href={download} target="_blank" rel="noreferrer">
            <img ref={this.imageRef} src={image_url} alt={description}/>
        </a>
      </div>
    )
  }
}

export default ImageCard;