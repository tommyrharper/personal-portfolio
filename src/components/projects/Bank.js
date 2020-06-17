import React from 'react';

class Bank extends React.Component {
  render() {
    return(
    <div>
      <h1>Bank</h1>
      <h4><a href="https://github.com/tommyrharper/bank-tech-test">GitHub</a></h4>
      <h4><a href="https://github.com/tommyrharper/bank-tech-test#quick-start-guide">Quick Start Guide</a></h4>
      <h4><a href="https://github.com/tommyrharper/bank-tech-test/blob/master/development-journal/journal.md">Development Journal</a></h4>
      I developed this command line Ruby banking application with a focus on code quality, TDD and OOP.
      <img src="./images/bank-tech-test-demo.gif" alt=""></img>
      <h3>Technology</h3>
      Ruby, Testing - RSpec, Testing coverage - SimpleCov, Linting - RuboCop, Travis-CI
    </div>
    ) 
  }
}

export default Bank;
