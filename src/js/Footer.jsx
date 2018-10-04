import React from 'react';

const Footer = ({event}) => {

    return (
      <div className='footer'>
        <div className="container footer-container">
          <div className="row footer-row">
            <div className="col-lg-12 text-center footer-title">
              <span className = 'footer-span'>FOLLOW US!</span>
            </div>

            <div className="col-12 text-center">
              <a  href='https://www.instagram.com/thebarberosbarbershop/'      target = '_blank'
                  onClick = {() => event('instagram')}
                  >
                <img src='./images/insta-icon.png' className = 'footer-icons' />
              </a>
              <a  href = 'https://www.facebook.com/thebarberosbarbershop'      target = '_blank'
                  onClick = {() => event('facebook')}>
                <img src='./images/facebook-icon.png' className = 'footer-icons' id = 'facebook-icon'/>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default Footer;