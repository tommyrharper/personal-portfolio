import React from 'react';
import Projects from './components/Projects';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home'
import Bank from './components/projects/Bank'

class App extends React.Component {
  render() {
    return(
      <div>
          <div>
            <Navigation/>
              <Switch> 
                <Route exact path="/" component={Home}/>
                <Route path="/Projects" component={Projects}/>
                <Route exact path="/bank" component={Bank}/>
              </Switch>
          </div> 
      </div>
    ) 
  }
}

export default withRouter(App);
