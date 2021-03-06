import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faMapMarker, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import ReactGA from 'react-ga';
import HomePage from './js/HomePage/HomePage';
import Err from './js/Err';

library.add(faPhone, faMapMarker, faEnvelope)

export default class App extends Component {
  componentDidMount() {
    this.initGA();
    this.logPageView();
  }
  initGA() {
    ReactGA.initialize('UA-126027263-1')    
  }

  logPageView() {
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname)
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='*' component={Err} />
        </Switch>
      </Router>
    )
  }
}