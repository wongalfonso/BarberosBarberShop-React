import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    const { active, scroll } = this.props;
    return (
      <div>
        <ul className='navBar'>
          <li>
            {
              (active === 'carousel') ?
                <a className = 'pages'>
                  Top
                  <img
                    id='top-active' 
                    src= './images/barber-seal.svg'
                    alt = 'barberos seal'
                    onClick = {scroll.bind(this, 'splash-carousel')}/>
                </a> :
                <a >
                  <img 
                    id='top-menu' 
                    src='./images/barber-seal-white.svg' 
                    alt = 'barberos seal'
                    onClick = {scroll.bind(this,'splash-carousel')}/>
                </a>
            }
          </li>

          <li>
            {
              (active === 'info') ?
                <a className = 'pages'>
                  Shop
                  <img 
                    id='info-active' 
                    src='./images/barber-pole-gold.svg' 
                    alt = 'barberos pole gold'
                    onClick = {scroll.bind(this, 'info-page')}/>
                </a> :
                <a >
                  <img 
                    id='info-menu' 
                    src='./images/barber-pole-white.svg' 
                    alt = 'barberos pole white'
                    onClick = {scroll.bind(this, 'info-page')}/>
                </a>
            }
          </li>

          <li>
            {
              (active === 'bio') ?
                <a className = 'pages'> 
                  Barbers
                  <img 
                    id = 'bio-active' 
                    src='./images/mustache-gold.svg' 
                    alt = 'barberos mustache gold'
                    onClick = {scroll.bind(this, 'bio-page')}/>
                </a> :
                <a >
                  <img 
                    id = 'bio-menu' 
                    src='./images/mustache-white.svg' 
                    alt = 'barberos mustache white'
                    onClick = {scroll.bind(this, 'bio-page')}/>
                </a>
            }
          </li>
          <li>
            {
              (active === 'services') ?
                <a className = 'pages'> 
                  Services
                  <img 
                    id = 'services-active' 
                    src='./images/knife-gold.svg' 
                    alt = 'barberos knife gold'
                    onClick = {scroll.bind(this, 'services-page')}/>
                </a> :
                <a >
                  <img 
                    id = 'services-menu' 
                    src='./images/knife-white.svg' 
                    alt = 'barberos knife white'
                    onClick = {scroll.bind(this, 'services-page')}/>
                </a>
            }
          </li>
        </ul>
      </div>
    )
  }
}