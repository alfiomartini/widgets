import { React, Component } from 'react';
import './css/PictureBox.css';

class PictureBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input:''
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
           placeholder="Image Search..."
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
