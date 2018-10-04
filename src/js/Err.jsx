import React, { Component } from 'react';

export default class Error extends Component {
  render() {
    return (
      <div className = 'full-page'>
        <div className="err">
          <div className ='err-code'>404</div>
          <div className ='err-message'>Welp! This page doesn't exist</div>
          </div>
      </div>
    )
  }
}