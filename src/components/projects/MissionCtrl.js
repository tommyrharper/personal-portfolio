import React from 'react';

class MissionCtrl extends React.Component {
  render() {
    return(
    <div>
      <h1>Mission-Ctrl</h1>
      <h3><a href="http://mission-ctrl.surge.sh">Play now!</a></h3>
      <h4><a href="https://github.com/tommyrharper/mission-ctrl">Front-end GitHub</a></h4>
      <h4><a href="https://github.com/hturnbull93/mission-ctrl-api-node">Back-end API GitHub</a></h4>
      <h4><a href="https://medium.com/acebook-myspace">Project Blog</a></h4>
      <h4><a href="https://youtu.be/lOIWRXDolqM?t=735">Project Demo and Presentation</a></h4>
      Do you use VSCode? Ever knew there was a shortcut for exactly what you
      wanted to do, but just weren't sure what it was?
      Over are the days of hopelessly coding without
      knowing the best and most useful shortcuts.
      You can now learn them in our super fun game!
      <img src="./images/Mission-Ctrl-Demo-2.gif" alt=""></img>
      <h3>Technology</h3>
      <h4>Front-end</h4>
      React, HTML, CSS, Sass, Testing - Jest, Enzyme, Deployment - Surge, Travis-CI/CD
      <h4>Back-end</h4>
      Node, MongoDB, Mongoose, Testing - Mocha, Chai, Sinon, Deployemnt - Heroku, Travis-CI/CD
      <img src="./images/Mission-CtrlStack.png" alt=""></img>
      <h3>Process</h3>
      Team values included learning over "getting it done", kindness and openness.
      We followed strict TDD, maintaining high test coverage and used AGILE processes including:
      <ul>
        <li>Sprints</li>
        <li>Morning Stand-up</li>
        <li>Afternoon check in</li>
        <li>Merge parties</li>
        <li>Retrospectives</li>
      </ul>
    </div>
    ) 
  }
}

export default MissionCtrl;
