import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Players from './Players';
import Teams from './Teams';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/players" component={Players} />
          <Route path="/teams" component={Teams} />
        </div>
      </Router>
    );
  }
}

export default App;
