import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarker, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import ReactGA from 'react-ga';
import ComingSoon from './js/ComingSoon';
import HomePage from './js/HomePage/HomePage';

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
        </Switch>
      </Router>
    )
  }
}