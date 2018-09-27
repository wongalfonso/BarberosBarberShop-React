import React, { Component } from 'react';
import ReactGA from 'react-ga';

// const goldColor = {
//   background: '-webkit-linear-gradient(left, rgb(164, 139, 0) , rgb(230, 196, 5))',
//    background: '-o-linear-gradient(right, rgb(164, 139, 0), rgb(230, 196, 5))',
//    background: '-moz-linear-gradient(right, rgb(164, 139, 0), rgb(230, 196, 5))',
//    background: 'linear-gradient(to right, rgb(164, 139, 0), rgb(230, 196, 5))',
//   webkitBackgroundClip: 'text',
//   webkitTextFillColor: 'transparent',
//   // color: 'rgb(164, 139, 0)'
// }
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
          <div className = 'text-center color'><b>* $5 Dollars Off First Time customer</b></div>   
            <table className = 'table text-center'>
              <tbody>
                <tr>
                  <td className = 'description'>Mens Hair Cut</td>
                  <td className = 'price color'>
                      <b>* $30.00 </b></td>
                </tr>
                <tr>
                  <td className = 'description'>Womans Short Hair Cut</td>
                  <td className = 'price color'>
                      <b>* $30.00</b>
                  </td>
                </tr>                
                <tr>
                  <td className = 'description'>Mens Long Hair Scissor Cut</td>
                  <td className = 'price color'>
                      <b>* $35.00 </b>
                  </td>
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
                  <td className = 'description'>Cut and Beard</td>
                  <td className = 'price color'>
                      <b>* $40.00 </b>
                  </td>
                </tr>
                <tr>
                  <td className = 'description'>Haircut and Classic Shave</td>
                  <td className = 'price color'>
                      <b>$60.00 | $10 off first time customer</b>
                  </td>
                </tr>
                <tr>
                  <td className = 'description'>Classic Shave</td>
                  <td className = 'price color'>
                      <b>* $35.00 </b>
                  </td>
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
