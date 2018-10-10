import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Error extends Component {
  render() {
    return (
      <div className = 'full-page'>
        <div className="err">
          <div className ='err-code'>404</div>
          <div className ='err-message'>Welp! This page doesn't exist</div>
            <Link to = "/"><button className = 'btn err-btn'>Back</button></Link>
          </div>
      </div>
    )
  }
}