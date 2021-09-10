import React from 'react';
import Youtube from './components/Youtube/YoutubeFlask';
import Pictures from './components/Pictures/PicturesFlask';
import WikiSearch from './components/Wikipedia/WikiSearch';
import Translator from './components/Translator/Translator';
import NavbarCss from './components/Navbar/Navbar';
import {Route, Switch} from 'react-router-dom';


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
  
  render(){
    return(
      <div>
         <NavbarCss   options={menu} />
         <Switch>
            <Route exact path='/widgets' component={Youtube} />
            <Route exact path='/widgets/'>
              {window.history.pushState(null,'','/widgets')}
            </Route>
            <Route path='/widgets/translate' component={Translator} />
            <Route path='/widgets/articles' component={WikiSearch} />
            <Route path='/widgets/pictures' component={Pictures} />
         </Switch>
      </div>
    )
  }
  
}

export default App;