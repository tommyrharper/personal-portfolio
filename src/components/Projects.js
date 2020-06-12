import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sent: "" };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    this.props.history.push("/bank");
  }
  render() {
    return(
      <div class="projects-container">
        <div class="paddingBlock">
          <div class="projects">
            <div class="project" onClick="www.google.com">Mission-Ctrl
            </div>
            <div class="project" onClick={() => { this.handleClick() }}>
              Bank
            </div>
            <div class="project">
            <NavLink to="/thermostat">Thermostat</NavLink>
            </div>
            <div class="project">
            <NavLink to="/bowling-scorecard">Bowling-Scorecard</NavLink>
            </div>
            <div class="project">
              Acebook-myspace
            </div>
            <div class="project">
              Twitter
            </div>
            <div class="project">
              Rock Paper Scissors
            </div>
            <div class="project">
              Takeaway-Service
            </div>
            <div class="project">
              Airport
            </div>
          </div>
        </div>
      </div>
    ) 
  }
}

export default withRouter(Projects);
