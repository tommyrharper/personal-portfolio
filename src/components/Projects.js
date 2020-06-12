import React from 'react';
import { withRouter } from 'react-router-dom';

class Projects extends React.Component {
  handleClick = (url) => {
    this.props.history.push(url);
  }

  render() {
    return(
      <div className="projects-container">
        <div className="paddingBlock">
          <div className="projects">
          <div className="project" onClick={() => {this.handleClick("/missionctrl")}}>
              Mission-Ctrl
            </div>
            <div className="project" onClick={() => {this.handleClick("/bank")}}>
              Bank
            </div>
            <div className="project" onClick={() => {this.handleClick("/thermostat")}}>
            Thermostat
            </div>
            <div className="project" onClick={() => {this.handleClick("/bowling")}}>
              Bowling-Scorecard
            </div>
            <div className="project" onClick={() => {this.handleClick("/acebook")}}>
              Acebook-myspace
            </div>
            <div className="project" onClick={() => {this.handleClick("/chitter")}}>
              Chitter
            </div>
            <div className="project" onClick={() => {this.handleClick("/rps")}}>
              Rock Paper Scissors
            </div>
            <div className="project" onClick={() => {this.handleClick("/takeaway")}}>
              Takeaway-Service
            </div>
            <div className="project" onClick={() => {this.handleClick("/airport")}}>
              Airport
            </div>
          </div>
        </div>
      </div>
    ) 
  }
}

export default withRouter(Projects);
