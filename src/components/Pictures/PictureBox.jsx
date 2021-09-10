import { React, Component } from 'react';
import './PictureBox.css';

class PictureBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input:this.props.input
    }
  }

  onInputChange = (event) => {
    const value = event.target.value;
    this.setState({input:value});

  }

  onKeyPressed = (event) => {
    if (event.key === 'Enter'){
      console.log('input', this.state.input);
    }
  }

  onClicked = () =>{
    const  input  = this.state.input;
    const { setInputText } = this.props;
    setInputText(input);
  }


  render(){
    return(
      // the author uses forms and onSubmit event listener
      <div className='search-box'>
        <div className="ui small action input">
          <input type="text" 
           placeholder="Search unsplash.com ..."
           onChange={this.onInputChange}
           value = {this.state.input} 
           />
          <button className="ui button"
           onClick = {this.onClicked}>Search</button>
        </div>
      </div>
    )
  }
}

export default PictureBox;
