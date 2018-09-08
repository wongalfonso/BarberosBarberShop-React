import React, { Component } from 'react';

export default class Bio extends Component {
  componentDidMount() {
    const page = document.getElementById('bio-page');
    page.onmouseenter = () => this.props.enter('bio');
    page.onmouseleave = () => this.props.exit('bio');
    window.scroll = function () { scrollFunction() }
  }

  render() {
    return (
      <div className='full-page' id='bio-page'>
        <div className="container bio-container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="about-header">
                Barbers
              </div>
            </div>
          </div>

          <div className="row bio-row">
            <div className="col-md-12 col-lg-6 bio-columns">
              <div className="row">
                <div className="col-12">
                  <div className="bio-header">
                    Omar
                  </div>
                </div>
              </div>
              <div className="row bio-text-row">
                <div className="col-lg-6">
                  <p className='bio-text'>
                    I am a highly skilled barber with 9+ years of experience. I have always loved doing hair and I specialize in hot towel shaves. I have a passion for doing this wether its a fade or a scissor haircut, you can be confident that I will always deliver quality work.
                  </p>
                </div>
                <div className="col-lg-6 bio-photo-div">
                    <img src='./images/omar-profile-photo.jpg' className='bio-photo' />
                </div>
              </div>
            </div>
          </div>
          <div className="row bio-row">
            <div className="col-md-12 col-lg-6 bio-columns">
              <div className="row">
                <div className="col-12">
                  <div className="bio-header">
                    Noah
                  </div>
                </div>
              </div>
              <div className="row bio-text-row">
                <div className="col-lg-6">
                  <p className='bio-text'>
                    Born and raised in the Bay Area, I have been a barber for the better half of my adult life. Giving that clean cut has always been an art that I have always appreciated. That is I put my heart and soul into my craft to try and make you look good!
                  </p>
                </div>
                <div className="col-lg-6 bio-photo-div">
                    <img src='./images/noah-profile-photo.jpg' className='bio-photo' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}