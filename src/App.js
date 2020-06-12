import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Projects from './components/Projects';
import Navigation from './components/Navigation';
import Home from './components/Home'
import MissionCtrl from './components/projects/MissionCtrl'
import Bank from './components/projects/Bank'
import Thermostat from './components/projects/Thermostat'
import Bowling from './components/projects/Bowling'
import Acebook from './components/projects/Acebook'
import Chitter from './components/projects/Chitter'
import RPS from './components/projects/RPS'
import Takeaway from './components/projects/Takeaway';
import Airport from './components/projects/Airport';

class App extends React.Component {
  render() {
    return(
      <div>
          <div>
            <Navigation/>
              <Switch> 
                <Route exact path="/" component={Home}/>
                <Route path="/Projects" component={Projects}/>
                <Route exact path="/missionctrl" component={MissionCtrl}/>
                <Route exact path="/bank" component={Bank}/>
                <Route exact path="/thermostat" component={Thermostat}/>
                <Route exact path="/bowling" component={Bowling}/>
                <Route exact path="/acebook" component={Acebook}/>
                <Route exact path="/chitter" component={Chitter}/>
                <Route exact path="/rps" component={RPS}/>
                <Route exact path="/takeaway" component={Takeaway}/>
                <Route exact path="/airport" component={Airport}/>
              </Switch>
          </div> 
      </div>
    ) 
  }
}

export default withRouter(App);
