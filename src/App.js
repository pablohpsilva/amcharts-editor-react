import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Index from './components/Index/index.js'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Index />
      </Router>
    );
  }
}

// export default App;
