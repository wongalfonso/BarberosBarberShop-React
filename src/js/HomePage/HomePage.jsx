import React, { Component } from 'react';
import Carousel from './Carousel';
import Info from './Info';

export default class HomePage extends Component {
  render() {
    return (
      <div className = 'full-page'>
       <Carousel/>
       <Info/>
      </div>
    )
  }
}