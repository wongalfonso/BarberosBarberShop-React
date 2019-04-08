import React, { Component } from 'react';
import ReactGA from 'react-ga';

export default class Bio extends Component {
  
  componentDidMount() {
    const page = document.getElementById('bio-page');
    page.onmouseenter = () => this.props.enter('bio');
    page.onmouseleave = () => this.props.exit('bio');
    window.scroll = function () { scrollFunction() }
    
  }

  clickLink(link) {
    ReactGA.event({
      category: 'clicked on social tabs',
      event: `clicked on Omar's ${link}`
    })
  }
  render() {
    return (
      <div className='full-page' id='bio-page'>
        <div className="container bio-container">
          <div className="row bio-top-row">
            <div className="col-lg-12 text-center">
              <img src='./images/barbers.svg' alt='The Barberos Barber Header' className='bio-title' />           
            </div>
          </div>
          <div className="row bio-row">
            <div className="col-lg-12">
              <div className="bio-header">
                <h3><u>Omar</u></h3>
              </div>
            </div>

            <div className="col-xl-4 col-md-12 bio-photo-div">
              <img src='./images/omar-profile-photo.jpg' alt='Omar Menenses profile photo' className='bio-photo' />
            </div>
            <div className="col-xl-7 col-md-12">
            <span className='bio-text'>Specializes in - Fades, all scissor haircuts, hot towel straight razor shaves.</span>
              <p className='bio-text'>
                I was raised in San Diego and originally became a barber as an extra source of income after my first son was born. The more I cut hair, the more I began to love it and I eventually quit my job to do this full-time. With time, I found out that my father and great grandfather were barbers at specific times of their lives. It has been 10 years since I switched my career paths and it has changed my life. The relationships that I have created my clients have encouraged me to open up this shop and I stand by my work as a Barber and Manager. 
                  </p>
            </div>
            <div className='col-xl-1 col-md-12 social-tags'>
              <a  href='https://www.instagram.com/omar_619_barber/'     target='_blank'
                  onClick={() => this.clickLink('instagram')}>
                <img src='./images/insta-icon.svg'
                  alt = 'the barberos instagram icon' className='footer-icons' />
              </a>
              <a  href='https://www.facebook.com/omar.meneses.1675'     target='_blank'
                  onClick={() => this.clickLink('facebook')}>
                <img src='./images/facebook-icon.svg'
                  alt = 'the barberos facebook icon'           className='footer-icons' id='facebook-icon' />
              </a>
            </div>
            
          </div>


          <div className="row bio-row">
            <div className="col-lg-12">
              <div className="bio-header">
                <h3><u>Noah</u></h3>
              </div>
            </div>

            <div className="col-xl-4 col-md-12  bio-photo-div">
              <img src='./images/noah-profile-photo.jpg' alt='Noahs profile photo' className='bio-photo' />
            </div>
            <div className="col-xl-7 col-md-12 social-tags">        
              <p className='bio-text'>
                Born and raised in Northern California, the Bay Area. I first became interested in cutting hair when my older cousin would cut my hair as a kid. When I got into high school I then started cutting my own hair. Soon enough I started cutting my brother's, cousin's,  friends and friends of friends hair. Giving that clean cut has always been an art that I have always appreciated. I put my heart and soul into my craft and to try to make you look good, as well as feel good! To me barbering is more than just cutting hair, but creating relationships and giving the next person a boost of confidence!
                  </p>
            </div>
            <div className='col-xl-1 col-md-12 social-tags'>
              <a  href='https://www.instagram.com/knowabarber/'         target='_blank'
                  onClick={() => this.clickLink('instagram')}>
                <img src='./images/insta-icon.svg'
                alt = 'barberos instagram icon' className='footer-icons' />
              </a>
            </div>
          </div>
          
        </div>
      </div>
    )
  }
}