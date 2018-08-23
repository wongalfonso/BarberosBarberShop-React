import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ComingSoon from './js/ComingSoon';
import HomePage from './js/HomePage/HomePage';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={ComingSoon} />
          <Route exact path='/home' component={HomePage} />
        </Switch>
      </Router>
    )
  }
}