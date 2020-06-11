# Personal Portfolio

This is my first attempt at creating my own personal website for two reasons:

1. To demonstrate my coding abilities.
2. To serve as a personal portfolio.
3. To continue to learn and develop my development skills.

## Development Journal

### Planning

I decided to create this project using React, as I enjoy this technology and find it very powerful for building simple applications that may not need a database.

### Getting the ball rolling

To start I simply created a repository on GitHub, and then I used the following command to build the project on my local machine:
```
npx create-react-app personal-portfolio
cd personal-portfolio
npm start
```
At this point react is up and running.

### Creating a Hello World

First I cut out all files except ```index.html```, ```App.js``` and ```index.js```.
Then I cut down the code to a bare minimum so it just shows a hello world.

This looks like this:

App.js
```JavaScript
import React from 'react';

class App extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}

export default App;
```
index.js
```JavaScript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```
index.html
```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport"
      content="width=device-width, initial-scale=1" />
    <title>Personal Portfolio</title>
  </head>
  <body>

    <div id="root"></div>

  </body>
</html>
```