import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactGA from 'react-ga';

export default class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sign: false
    }
  }

  componentDidMount() {
    const page = document.getElementById('info-page');
    page.onmouseenter = () => this.props.enter('info');
    page.onmouseleave = () => this.props.exit('info');
    window.scroll = function() {scrollFunction()} 
    setInterval(() => {
      let show;
      if (this.state.sign) {
        show = false
      } else {
        show = true
      }
      this.setState({
        sign: show
      })
    }, 1000);
  }

  infoEnterAnimation() {

  }

  infoExitAnimatino() {

  }

  linkClick(link) {
    ReactGA.event({
      category: 'clicked link in info',
      action: `to ${link}`
    })
  }

  render() {
    return (
      <div className='full-page' id='info-page'>
        <div className="container info-container">
          <div className="row info-top-row">
            <div className="col-12 text-center">
              {/* <img src='./images/title-large-screen.svg' id='info-title-lg' alt = 'The Barberos Barbershop Header'/>
              <img src='./images/title-small-screen.svg' id='info-title-sm' alt = 'The Barberos Barbershop Header'/> */}
              {this.state.sign ? 
              <img src="./images/BarbersWantedBlack.png" alt="barber sign" className = 'barber-sign'/> 
              :
              <img src="./images/BarbersWantedWhite.png" alt="barber sign white" className = 'barber-sign'/>
            }
            </div>
          </div>
          <div className="row info-middle-row">
            <div className="col-12 text-center">
              <span id = 'barber-shop-tag' style={{ color: 'white' }}><u>The Barber Shop</u></span>
              <div className='about-shop'>
                This is a Barber Shop located in the North Park area of San Diego. At the Barberos Barbershop, we take pride in our clean haircuts and traditional hot towel shaves. Our mission is to provide top of the line customer service that is why every client gets a personalized consultation. Come visit us and experience it for yourself!
              </div>
            </div>
            <div className="col-xl-7 col-lg-12 text-center">
              <div className="info-map">
                <a href='https://www.google.com/maps/search/?api=1&query=2637 B UniversityAve,San Diego,Ca,92104' target='_blank'>
                  <img src='./images/google-maps.jpg' alt = 'The Barberos Barbershop Google Maps' />
                </a>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-5 info-hours">
              <img src='./images/info-hours-title.svg' alt = 'hours title' id='info-hours-title' />
              <table className='table info-table'>
                <tbody>
                  <tr>
                    <td className='days'>Monday</td>
                    <td className='hours'>10am - 7pm</td>
                  </tr>
                  <tr>
                    <td className='days'>Tuesday</td>
                    <td className='hours'>10am - 6pm</td>
                  </tr>
                  <tr>
                    <td className='days'>Wednesday</td>
                    <td className='hours'>10am - 6pm</td>
                  </tr>
                  <tr>
                    <td className='days'>Thursday</td>
                    <td className='hours'>10am - 7pm</td>
                  </tr>
                  <tr>
                    <td className='days'>Friday</td>
                    <td className='hours'>10am - 7pm</td>
                  </tr>
                  <tr>
                    <td className='days'>Saturday</td>
                    <td className='hours'>9am - 4:30pm</td>
                  </tr>
                  <tr>
                    <td className='days'>Sunday</td>
                    <td className='hours'>9a - 7pm</td>
                  </tr>
                </tbody>
              </table>              
            </div>
            <div className="col-xl-12 col-lg-6 col-md-7 info-location">
              <table className='info-location-table'>
                <tbody>
                  <tr>
                    <td className = 'icons'>
                      <a href='https://www.google.com/maps/search/?api=1&query=2637 B UniversityAve,San Diego,Ca,92104' target='_blank' onClick = {() => this.linkClick('google')}>
                      <FontAwesomeIcon icon = 'map-marker'/></a>
                    </td>
                    <td className='info-shop'>
                      <a  href='https://www.google.com/maps/search/?api=1&query=2637 B UniversityAve,San Diego,Ca,92104'           target='_blank' 
                          onClick = {() => this.linkClick('google')}>
                        2637 B University Ave, San Diego, CA 92104
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className = 'icons'>
                      <a href='tel:+16192463830' onClick = {() => this.linkClick('phone')}>
                      <FontAwesomeIcon icon = 'phone'/>
                      </a>
                    </td>
                    <td className='info-shop'>
                      <a  href='tel:+16192463830' 
                          onClick = {() => this.linkClick('phone')}>
                        1 (619) 246-3830
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className = 'icons'>
                      <a  href='mailto:Thebarberos619@gmail.com'               target='_blank' 
                          onClick = {() => this.linkClick('gmail')}>
                        <FontAwesomeIcon icon = 'envelope'/>
                      </a>
                    </td>
                    <td className='info-shop'>
                      <a  href='mailto:Thebarberos619@gmail.com'               target='_blank' 
                          onClick = {() => this.linkClick('gmail')}>
                        Thebarberos619@gmail.com
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
              

            <div className="col-12 text-center info-button">
              <button
                id='info-appt-btn'
                className='btn form-control'
                target="_blank"
                onClick={() => this.props.schedule('info')}>
                Schedule an Appointment
            </button>
            </div>

          </div>
        </div>
      </div>
    )
  }
}