import React, { Component } from 'react';
import googleMaps from './../../../public/images/googleMaps.jpg';

export default class Info extends Component {

  componentDidMount() {
    const page = document.getElementById('info-page');
    page.onmouseenter = () => this.props.enter('info');
    page.onmouseleave = () => this.props.exit('info');
    page.hasFocus = () => console.log('yes');
  }

  infoEnterAnimation() {

  }

  infoExitAnimatino() {

  }

  

  render() {
    return (
      <div className='full-page' id='info-page'>
        <div className="container info-container">

          <div className="row info-top-row">
            <div className="col-12 text-center">
              <img src='./images/title-large-screen.png' id='info-title-lg' />
              <img src='./images/title-small-screen.png' id='info-title-sm' />
            </div>
          </div>

          <div className="row info-middle-row">

            <div className="col-xl-4 col-lg-12 text-center info-hours">
              <img src='./images/hours-title.png' id='info-hours-title' />
              <table className='table info-table'>
                <tbody>
                  <tr>
                    <td className='days'>Monday</td>
                    <td className='hours'>10am - 7pm</td>
                  </tr>
                  <tr>
                    <td className='days'>Tuesday</td>
                    <td className='hours'>10am - 7pm</td>
                  </tr>
                  <tr>
                    <td className='days'>Wednesday</td>
                    <td className='hours'>10am - 7pm</td>
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
                    <td className='hours'>10am - 7pm</td>
                  </tr>
                  <tr>
                    <td className='days'>Sunday</td>
                    <td className='hours'>closed</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-xl-8 col-lg-12 text-center info-map">
              <a href='https://www.google.com/maps/search/?api=1&query=2637 UniversityAve,San Diego,Ca,92104' target='_blank'>
                <img src='./images/googleMaps.jpg' />
              </a>
            </div>
          </div>

          <div className="row info-bottom-row">
            <div className="col-12 text-center">
              <table className='info-location-table'>
                <tbody>
                  <tr>
                    <td className='info-shop'><a href='https://www.google.com/maps/search/?api=1&query=2637 UniversityAve,San Diego,Ca,92104' target='_blank'>2637 University Ave Unit B, San Diego, CA 92104</a></td>
                  </tr>
                  <tr>
                    <td className='info-shop'><a href='tel:+16193664149'>1 (619) 366-4149</a></td>
                  </tr>
                  <tr>
                    <td className='info-shop'><a href='mailto:Thebarberos619@gmail.com' target='_blank'>Thebarberos619@gmail.com</a></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="col-xl-12 text-center info-btn-col">
              <button
                id='info-appt-btn'
                className='btn form-control'
                target="_blank"
                onClick={this.props.schedule}>
                Schedule an Appointment
              </button>
            </div>
          </div>

        </div>
      </div>
    )
  }
}