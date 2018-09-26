import React, { Component } from 'react';
import ReactGA from 'react-ga';

export default class Services extends Component {

  componentDidMount() {
    const page = document.getElementById('services-page');
    page.onmouseenter = () => this.props.enter('services');
    page.onmouseleave = () => this.props.exit('services');
    window.scroll = function() {scrollFunction()} 
    // page.hasFocus = () => console.log('yes');
  }


  render() {
    return (
      <div className='full-page' id='services-page'>
        <div className="container services-container">        
          <div className="row services-top-row">
            <div className="col-lg-12 text-center">
            <img src = './images/services.png' alt = 'Services Header' id = 'services-title'/>              
            </div>
          </div>

        <div className="row services-middle-row">
          <div className="col-12">          
            <table className = 'table text-center'>
              <tbody>
                <tr>
                  <td className = 'description'>Mens Hair Cut</td>
                  <td className = 'price'>$35.00 | $5 off October & November</td>
                </tr>                
                <tr>
                  <td className = 'description'>Mens Long Hair Scissor Cut</td>
                  <td className = 'price'>$40.00</td>
                </tr>
                <tr>
                  <td className = 'description'>Kids Hair Cut</td>
                  <td className = 'price'>$25.00</td>
                </tr>
                <tr>
                  <td className = 'description'>Line Up</td>
                  <td className = 'price'>$15.00</td>
                </tr>
                <tr>
                  <td className = 'description'>Once a week client Mens Hair Cut</td>
                  <td className = 'price'>$30.00</td>
                </tr>
                <tr>
                  <td className = 'description'>Cut and Beard</td>
                  <td className = 'price'>$45.00</td>
                </tr>
                <tr>
                  <td className = 'description'>Haircut and Classic Shave</td>
                  <td className = 'price'>$65.00</td>
                </tr>
                <tr>
                  <td className = 'description'>Classic Shave</td>
                  <td className = 'price'>$40.00</td>
                </tr>
                <tr>
                  <td className = 'description'>Beard Trim and Beard Line-up</td>
                  <td className = 'price'>$25.00</td>
                </tr>
              </tbody>
            </table>
        </div>
          </div>
        </div>
      </div>
    )
  }
}
