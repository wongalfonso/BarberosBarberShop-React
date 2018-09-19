import React, { Component } from 'react';
import ReactGA from 'react-ga';

export default class Footer extends Component {

  clickLink(location) {
    ReactGA.event({
      category: 'click link in footer',
      action: `link in footer to ${location}`
    });
  }

  render() {
    return (
      <div className='footer'>
        <div className="container footer-container">
          <div className="row footer-row">
            <div className="col-lg-12 text-center footer-title">
              <span className = 'footer-span'>FOLLOW US!</span>
            </div>

            <div className="col-12 text-center">
              <a  href='https://www.instagram.com/thebarberosbarbershop/'      target = '_blank'
                  onClick = {() => this.clickLink('instagram')}
                  >
                <img src='./images/insta-icon.png' className = 'footer-icons' />
              </a>
              <a  href = 'https://www.facebook.com/thebarberosbarbershop'      target = '_blank'
                  onClick = {() => this.clickLink('facebook')}>
                <img src='./images/facebook-icon.png' className = 'footer-icons' id = 'facebook-icon'/>
              </a>
              <a href='https://www.yelp.com/biz/the-barberos-barber-shop-san-diego?osq=the+barberos+barbershop' 
                  target = '_blank'
                  onClick = {() => this.clickLink('yelp')}>
                <img src='./images/yelp-icon.png' className = 'footer-icons'/>
              </a>

            </div>
          </div>
        </div>
      </div>
    )
  }
}