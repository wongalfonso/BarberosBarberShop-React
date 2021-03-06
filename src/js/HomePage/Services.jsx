import React, { Component } from 'react';

export default class Services extends Component {

  componentDidMount() {
    const page = document.getElementById('services-page');
    page.onmouseenter = () => this.props.enter('services');
    page.onmouseleave = () => this.props.exit('services');
    window.scroll = function() {scrollFunction()}     
  }


  render() {
    return (
      <div className='full-page' id='services-page'>
        <div className="container services-container">        
          <div className="row services-top-row">
            <div className="col-lg-12 text-center">
            <img src = './images/services.svg' alt = 'Barber Shop Services Header' id = 'services-title'/>              
            </div>
          </div>

        <div className="row services-middle-row">
          <div className="col-12 services-col">       
            <div className = 'text-center services-desc'>Hair Cuts
            </div>
            <table className = 'table text-center services-table'>
              <tbody>
                <tr>
                  <td className = 'description'>Men's Hair Cut</td>
                  <td className = 'price color'>
                    <b>$30.00</b>
                  </td>
                </tr>
                <tr>
                  <td className = 'description'>Woman's Short Hair Cut</td>
                  <td className = 'price color'>
                    <b>$30.00</b>
                  </td>
                </tr>                
                <tr>
                  <td className = 'description'>                    
                    <div>Men's Long Hair Scissor Cut</div>
                  </td>
                  <td className = 'price'>                      
                      <div>$35.00</div>
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
            <div className = 'text-center services-desc'>All About The Beard
            </div>   
            <table className = 'table text-center services-table'>
              <tbody>
                <tr>
                  <td className = 'description'>The Barberos Haircut and Classic Shave</td>
                  <td className = 'price'>
                    $60.00
                  </td>
                </tr>
                <tr>
                  <td className = 'description'>Haircut and Beard razor Line Up with Hot Towel</td>
                  <td className = 'price'>
                    $45.00
                  </td>
                </tr>
                <tr>
                  <td className = 'description'>Haircut & Beard razor Line Up</td>
                  <td className = 'price'>
                    $40.00 - <i>Electric Shave</i>
                  </td>
                </tr>
                <tr>
                  <td className = 'description'>Classic Shave</td>
                  <td className = 'price'>
                    $35.00
                  </td>
                </tr>                                
                <tr>
                  <td className = 'description'>Beard Line Up & Trim with Hot Towel</td>
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
            <div className = 'text-center services-desc'>Payment Options
            </div>
          <div className = ''>
            <p className = 'text-center payment-desc'>This is a Cash Only Establishment... We do have an ATM onsite for your convenience</p>
          </div>
        </div>
          </div>
        </div>
      </div>
    )
  }
}
