import React, { Component } from 'react';
import googleMaps from './../../../public/images/googleMaps.jpg';

export default class Info extends Component {
  render() {
    return (
      <div className='fullPage'>
        <div className="container infoContainer">
          <div className="row infoTopRow">
            <div className="col-12 text-center">
              <h1 id='barberosHeader'>The Barberos Barber Shop</h1>
            </div>
          </div>
          <div className="row infoMiddleRow">
            <div className="col-md-4 col-sm-12 text-center hours">
              <span id='hoursTitle'>HOURS</span>
              <table className='table hoursTable'>
                <tbody>
                  <tr>
                    <td scope='row'>Monday</td>
                    <td>10am - 7pm</td>
                  </tr>
                  <tr>
                    <td scope='row'>Tuesday</td>
                    <td>10am - 7pm</td>
                  </tr>
                  <tr>
                    <td scope='row'>Wednesday</td>
                    <td>10am - 7pm</td>
                  </tr>
                  <tr>
                    <td scope='row'>Thursday</td>
                    <td>10am - 7pm</td>
                  </tr>
                  <tr>
                    <td scope='row'>Friday</td>
                    <td>10am - 7pm</td>
                  </tr>
                  <tr>
                    <td scope='row'>Saturday</td>
                    <td>10am - 7pm</td>
                  </tr>
                  <tr>
                    <td scope='row'>Sunday</td>
                    <td>closed</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-8 col-sm-12 text-center map">
              <span id='locationTitle'>Location</span>
              <a href='https://www.google.com/maps/search/?api=1&query=2637 UniversityAve,San Diego,Ca,92104' target='_blank'>
                <img src='./images/googleMaps.jpg' />
              </a>
            </div>
          </div>
          <div className="row infoBotRow">
            <div className="col-12 text-center">
              <table className='infoTable'>
                <tbody>
                  <tr>
                    <td className='left'>Address: </td>
                    <td></td>
                    <td className='right'><a href='https://www.google.com/maps/search/?api=1&query=2637 UniversityAve,San Diego,Ca,92104' target='_blank'>2637 University Ave Unit B, San Diego, Ca 92104</a></td>
                  </tr>
                  <tr>
                    <td className='left'>Call: </td>
                    <td></td>
                    <td className='right'><a href='tel:+16193664149'>1 (619) 366-4149</a></td>
                  </tr>
                  <tr>
                    <td className='left'>Email: </td>
                    <td></td>
                    <td className='right'><a href='mailto:Thebarberos619@gmail.com' target='_blank'>Thebarberos619@gmail.com</a></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="col-xl-12 text-center btnCol">
              <button 
                id='apptBtn' 
                className='btn btn-danger form-control form-control-lg'
                onClick = {this.schedule}>
                Schedule an Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}