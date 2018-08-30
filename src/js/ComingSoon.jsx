import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Loading from './Loading';

export default class ComingSoon extends Component {
  constructor() {
    super();
    this.state = {
      image: false
    }
  }
  componentDidMount() {
    setTimeout(() => this.setState({ image: true }), 4000)
  }

  render() {

    if (this.state.image === true) return <Redirect to='/home' />;
    return (
      <div className='overlay'>
        <img src='./images/LogoIcons.svg' id='main-logo' />
        <div className="overlay-container"></div>
      </div>
    )
  }
}
