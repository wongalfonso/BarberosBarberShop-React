import React, { Component } from 'react';


export default class NavBar extends Component {
  render() {
    const { active, scroll } = this.props;
    console.log(active);
    return (
      <div>
        <ul className='navBar'>
          <li>
            {
              (active === 'carousel') ?
                <a className = 'pages'>
                  Top
                <img id='top-active' src='./images/barberos-seal.png' onClick = {scroll.bind(this, 'splash-carousel')}/>
                </a> :
                <a >
                  <img id='top-menu' src='./images/barberos-seal-white.png' onClick = {scroll.bind(this,'splash-carousel')}/>
                </a>
            }
          </li>

          <li>
            {
              (active === 'info') ?
                <a className = 'pages'>
                  Shop
                  <img id='info-active' src='./images/barber-pole-gold.png' onClick = {scroll.bind(this, 'info-page')}/>
                </a> :
                <a >
                  <img id='info-menu' src='./images/barber-pole-white.png' onClick = {scroll.bind(this, 'info-page')}/>
                </a>
            }
          </li>

          <li>
            {
              (active === 'bio') ?
                <a className = 'pages'> 
                  Barbers
                  <img id = 'bio-active' src='./images/mustache-gold.png' onClick = {() => scroll.bind(this, 'bio-page')}/>
                </a> :
                <a >
                  <img id = 'bio-menu' src='./images/mustache-white.png' onClick = {scroll.bind(this, 'bio-page')}/>
                </a>
            }
          </li>
        </ul>
      </div>
    )
  }
}