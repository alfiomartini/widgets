import React from 'react';
import Youtube from './components/YoutubeFlask';
import Pictures from './components/PicturesFlask';
import WikiSearch from './components/WikiSearch';
import Translator from './components/Translator';
import NavbarCss from './components/NavbarCss';
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