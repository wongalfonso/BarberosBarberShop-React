import React, { Component } from 'react';

export default class Loading extends Component {
  render() {
    return (
      <div className='loading-overlay'>
        <div id='loading-text' >
          <span>Loading</span>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
        <img src='./images/Logo.svg' id='loading-img'></img>
      </div>
    )
  }
}