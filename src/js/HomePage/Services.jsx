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
          <div className = 'text-center'><h4>Hair Cuts</h4></div>
            <table className = 'table text-center'>
              <tbody>
                <tr>
                  <td className = 'description'>Men's Hair Cut</td>
                  <td className = 'price color'>
                    <b>$25.00 || first TWO visits</b>
                  </td>
                </tr>
                <tr>
                  <td className = 'description'>Woman's Short Hair Cut</td>
                  <td className = 'price color'>
                    <b>$25.00 || first TWO visits</b>
                  </td>
                </tr>                
                <tr>
                  <td className = 'description'>
                    <div><i>Monday & Tues Special</i></div>
                    <div>Men's Long Hair Scissor Cut</div>
                  </td>
                  <td className = 'price'>
                      <div><i>First time visitor - By Online Appointment Only!</i></div>  
                      <div><b className = 'color'>$20.00</b></div>
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
              </tbody>
            </table>
            <div className = 'text-center'><h4>All About The Beard</h4></div>   
            <table className = 'table text-center'>
              <tbody>
                <tr>
                  <td className = 'description'>The Barberos Haircut and Classic Shave</td>
                  <td className = 'price'>
                    $50.00
                  </td>
                </tr>
                <tr>
                  <td className = 'description'>Cut and Beard Line Up with Hot Towel</td>
                  <td className = 'price'>
                    $40.00
                  </td>
                </tr>
                <tr>
                  <td className = 'description'>The Barberos Cut & Beard Line Up</td>
                  <td className = 'price'>
                    $35.00 - <i>Electric Shave</i>
                  </td>
                </tr>
                <tr>
                  <td className = 'description'>Classic Shave</td>
                  <td className = 'price color'>
                    <b>$30.00 || $5 off first time customer</b>
                  </td>
                </tr>                                
                <tr>
                  <td className = 'description'>Beard Line Up & trim with Hot Towel</td>
                  <td className = 'price'>
                    $25.00
                  </td>
                </tr>                               
                
                <tr>
                  <td className = 'description'>Beard Line Up & Trim</td>
                  <td className = 'price'>
                    $20.00 - <i>Electric Shave</i>
                  </td>
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
