import React from 'react';
import Youtube from './components/Youtube/YoutubeFlask';
import Pictures from './components/Pictures/PicturesFlask';
import WikiSearch from './components/Wikipedia/WikiSearch';
import Translator from './components/Translator/Translator';
import Navbar from './components/Navbar/Navbar';
import {Route, Switch} from 'react-router-dom';


const pathnames = [
  {
    routeName:'Videos',
    path:'/videos'
  },
  {
    routeName:'Translate',
    path:'/translate'
  },
  {
    routeName:'Articles',
    path:'/articles'
  },
  {
    routeName:'Pictures',
    path:'/pictures'
  }
]

class App extends React.Component {

  componentDidMount(){
  }
  
  render(){
    return(
      <div>
         <Navbar pathnames = {pathnames}/>
         <Switch>
            <Route exact path = '/' component = {Youtube} />
            <Route path='/videos' component={Youtube} />
            <Route path='/translate' component={Translator} />
            <Route path='/articles' component={WikiSearch} />
            <Route path='/pictures' component={Pictures} />
         </Switch>
      </div>
    )
  }
  
}

export default App;