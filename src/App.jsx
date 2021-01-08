import React from 'react';
import Youtube from './components/Youtube';
import Pictures from './components/Pictures';
import WikiSearch from './components/WikiSearch';
import Translator from './components/Translator';
import NavbarCss from './components/NavbarCss'


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
    this.state = {
      component: 'Videos'
    }
  }

  updateCurrent = (option) => {
    this.setState({component:option});
  }

  render(){
    const current = this.state.component;
    return(
      <div>
         <NavbarCss setSelection={this.updateCurrent} current={current} options={menu} />
         {current === 'Videos' && <Youtube />}
         {current === 'Translate' && <Translator />}
         {current === 'Articles' && <WikiSearch />}
         {current === 'Pictures' && <Pictures />}
      </div>
    )
  }
  
}

export default App;