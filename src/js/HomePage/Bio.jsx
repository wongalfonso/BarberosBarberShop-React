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
          <div className="row bio-top-row">
            <div className="col-12 text-center">
              <div className="about-header">
                Barbers
              </div>
            </div>
          </div>
        <div className="container bio-container">
          <div className="row bio-row">
            <div className="col-md-12 col-lg-6 bio-columns">
              <div className="row">
                <div className="col-12">
                  <div className="bio-header">
                    <h3><u>Omar</u></h3>                    
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
            <div className="col-md-12 col-lg-10 bio-columns">
              <div className="row">
                <div className="col-12">
                  <div className="bio-header">
                    <h3><u>Noah</u></h3>
                  </div>
                </div>
              </div>
              <div className="row bio-text-row">
                <div className="col-lg-9">
                  <span>Starting Sept. 23rd</span>
                  <p className='bio-text'>
                  Born and raised in Northern California, the Bay Area. I first became interested in cutting hair when my older cousin would cut my hair as a kid. When I got into high school I then started cutting my own hair. Soon enough I started cutting my brother's, cousin's,  friends and friends of friends hair. Giving that clean cut has always been an art that I have always appreciated. I put my heart and soul into my craft and to try to make you look good, as well as feel good! To me barbering is more than just cutting hair, but creating relationships and giving the next person a boost of confidence!
                  </p>
                </div>
                <div className="col-lg-3 bio-photo-div">
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