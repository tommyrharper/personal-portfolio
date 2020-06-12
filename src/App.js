import React from 'react';
import Projects from './components/Projects';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home'

class App extends React.Component {
  render() {
    return(
      <div>
        <BrowserRouter>
          <div>
            <Navigation/>
              <Switch> 
                <Route exact path="/" component={Home}/>
                <Route path="/Projects" component={Projects}/>
              </Switch>
          </div> 
        </BrowserRouter>
      </div>
    ) 
  }
}

export default App;
