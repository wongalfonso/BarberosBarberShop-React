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
                <img id='top-active' src='./images/knifeGold.png' onClick = {scroll.bind(this, 'splash-carousel')}/>
                </a> :
                <a >
                  <img id='top-menu' src='./images/knifeWhite.png' onClick = {scroll.bind(this,'splash-carousel')}/>
                </a>
            }
          </li>

          <li>
            {
              (active === 'info') ?
                <a className = 'pages'>
                  Barber Shop
                  <img id='info-active' src='./images/barberPoleGold.png' onClick = {scroll.bind(this, 'info-page')}/>
                </a> :
                <a >
                  <img id='info-menu' src='./images/barberPoleWhite.png' onClick = {scroll.bind(this, 'info-page')}/>
                </a>
            }
          </li>

          {/* <li>
            {
              (active === 'about') ?
                <a className = 'pages'> 
                  Projects
                  <img id = 'about-active' src={Active} onClick = {() => scroll.bind(this, 'project-page')}/>
                </a> :
                <a >
                  <img src={Menu} onClick = {scroll.bind(this, 'about-page')}/>
                </a>
            }
          </li> */}
        </ul>
      </div>
    )
  }
}