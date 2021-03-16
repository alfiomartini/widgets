import React from 'react';
import Youtube from './components/YoutubeFlask';
import Pictures from './components/PicturesFlask';
import WikiSearch from './components/WikiSearch';
import Translator from './components/Translator';
import NavbarCss from './components/NavbarCss';
import {Route} from 'react-router-dom';


const menu = [
  {
    option:'Videos',
    path:'/widgets'
  },
  {
    option:'Translate',
    path:'/widgets/translate'
  },
  {
    option:'Articles',
    path:'/widgets/articles'
  },
  {
    option:'Pictures',
    path:'/widgets/pictures'
  }
]

class App extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     component: 'Videos'
  //   }
  // }

  // updateCurrent = (option) => {
  //   this.setState({component:option});
  // }

  render(){
    // const current = this.state.component;
    return(
      <div>
         <NavbarCss   options={menu} />
         <Route exact path='/widgets' component={Youtube} />
         <Route path='/widgets/translate' component={Translator} />
         <Route path='/widgets/articles' component={WikiSearch} />
         <Route path='/widgets/pictures' component={Pictures} />
      </div>
    )
  }
  
}

export default App;