import React from 'react';
import Youtube from './components/Youtube';
import Pictures from './components/Pictures';
import WikiSearch from './components/WikiSearch';
import Translator from './components/Translator';
import NavbarCss from './components/NavbarCss'

const showComponent = (pathname) => {
   
  if (pathname.endsWith('/') || pathname === ''){
    return <Youtube />
  }

  if (pathname.endsWith('/translate') || pathname.endsWith('/translate/')){
    return <Translator />
  }

  if (pathname.endsWith('/pictures') || pathname.endsWith('/pictures/')){
    return <Pictures />
  }

  if (pathname.endsWith('/wiki') || pathname.endsWith('/wiki/')){
    return <WikiSearch />
  }
}

const menu = [
  {
    option:'Videos',
    path:'/'
  },
  {
    option:'Translate',
    path:'/translate'
  },
  {
    option:'Articles',
    path:'/wiki'
  },
  {
    option:'Pictures',
    path:'/pictures'
  }
]

class App extends React.Component {
  constructor(){
    super();
    this.URL_DEV = 'http://localhost:3000';
    this.URL_PROD = 'https://alfiomartini.github.io/widgets'
  }

  render(){
    return(
      <div>
         <NavbarCss options={menu} url={this.URL_PROD} />
         {showComponent(window.location.pathname)}
      </div>
    )
  }
  
}

export default App;