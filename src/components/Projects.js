import React from 'react';
import { withRouter } from 'react-router-dom';

class Projects extends React.Component {
  handleClick = (url) => {
    this.props.history.push(url);
  }

  render() {
    return(
      <div className="projects-container">
        <div className="projects">
          <div className="project" onClick={() => {this.handleClick("/missionctrl")}}>
            <h3>Mission-Ctrl</h3>
            A fun game designed to help developers learn VSCode shortcuts!
          </div>
          <div className="project" onClick={() => {this.handleClick("/bank")}}>
            <h3>Bank</h3>
            A basic command line banking Application.
          </div>
          <div className="project" onClick={() => {this.handleClick("/thermostat")}}>
            <h3>Thermostat</h3>
            A simple thermostat application.
          </div>
          <div className="project" onClick={() => {this.handleClick("/bowling")}}>
            <h3>Bowling-Scorecard</h3>
            A small project that calculates Bowling scores.
          </div>
          <div className="project" onClick={() => {this.handleClick("/acebook")}}>
            <h3>Acebook-myspace</h3>
            A spin off from Facebook!
          </div>
          <div className="project" onClick={() => {this.handleClick("/chitter")}}>
            <h3>Chitter</h3>
            A spin off from Twitter.
          </div>
          <div className="project" onClick={() => {this.handleClick("/rps")}}>
            <h3>Rock Paper Scissors</h3>
            A rock paper scissors game.
          </div>
          <div className="project" onClick={() => {this.handleClick("/takeaway")}}>
            <h3>Takeaway-Service</h3>
            Order takeaways from your phone using the Twillio API.
          </div>
          <div className="project" onClick={() => {this.handleClick("/airport")}}>
            <h3>Airport</h3>
            A simple command line ruby application for a control center at an airport.
          </div>
        </div>
      </div>
    ) 
  }
}

export default withRouter(Projects);
