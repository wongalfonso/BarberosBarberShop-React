import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className="container footer-container">
          <div className="row footer-row">
            <div className="col-lg-12 text-center">
              <span className = 'footer-span'>FOLLOW US!</span>
            </div>

            <div className="col-4 text-center">
              <a href='https://www.instagram.com/thebarberosbarbershop/' target = '_blank'>
                <img src='./images/insta-icon.png' className = 'footer-icons' />
              </a>
            </div>

            <div className="col-4 text-center">
              <a href = ''>
                <img src='./images/facebook-icon.png' className = 'footer-icons' id = 'facebook-icon'/>
              </a>
            </div>

            <div className="col-4 text-center">
              <a href=''>
                <img src='./images/yelp-icon.png' className = 'footer-icons'/>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}