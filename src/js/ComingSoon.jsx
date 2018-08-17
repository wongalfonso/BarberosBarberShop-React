import React, { Component } from 'react';

export default class ComingSoon extends Component {
  render() {
    return (
      <div className='overlay'>
        <img src='./images/LogoIcons.svg' id='main-logo' />
        <div className="container overlay-container">
          <div className="row overlay-padding"></div>
          <div className="row overlay-text-row">
            <div className='overlay-text'>
              <div className="col-lg-12 col-xs-12 overlay-text-columns top">
                <div className = 'coming'>
                  Coming Soon
                </div>
              </div>

              <div className='col-lg-12 col-xs-12 overlay-text-columns middle'>
              </div>

              <div className='col-lg-12 col-xs-12 overlay-text-columns bottom'>
                <a href = 'https://www.google.com/maps/search/?api=1&query=2637 UniversityAve,San Diego,Ca,92104' target='_blank'>
                  <div className="address">
                    2637 University Ave Unit B
                  </div>
                  <div className="city">
                    San Diego, California 92104
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="row overlay-padding"></div>
        </div>

      </div>
    )
  }
}