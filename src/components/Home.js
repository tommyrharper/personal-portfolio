import React from 'react';
import Projects from './Projects';

class Home extends React.Component {
  render() {
    return(
      <div>   
        <h1>Hey, I'm Tom.</h1>
        <h2>I'm a software developer who loves making things.</h2>
        <Projects/>
      </div>
    ) 
  }
}

export default Home;
