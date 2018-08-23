import React, { Component } from 'react';
import { HashRouter as Router, Route, hashHistory } from 'react-rouder-dom';
import ComingSoon from './js/ComingSoon';
import HomePage from './js/HomePage/HomePage';

export default class App extends Component {
  render() {
    return (
      <Router history = { hashHistory }>
        <Route exact path = '/' component = {ComingSoon}/>
        <Route path = '/home' component = {HomePage}/>
      </Router>      
    )
  }
}