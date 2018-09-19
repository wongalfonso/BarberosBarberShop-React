import React, { Component } from 'react';

export default class Carousel extends Component {

  componentDidMount() {
    const page = document.getElementById('splash-carousel');
    page.onmouseenter = () => this.props.enter('carousel');
    page.onmouseleave = () => this.props.exit('carousel');
    window.scroll = function() {scrollFunction()} 
  }
  

  render() {
    return (
      <div id="splash-carousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#splash-carousel" data-slide-to="0" className="active"></li>
          <li data-target="#splash-carousel" data-slide-to="1"></li>
          <li data-target="#splash-carousel" data-slide-to="2"></li>
          <li data-target="#splash-carousel" data-slide-to="3"></li>
          <li data-target="#splash-carousel" data-slide-to="4"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block carousel-lg" src='./images/logo-icon.png' id = 'logos-lg' alt="The Barberos BarberShop Logo"/>
            <img className="d-block carousel-md" src='./images/logo-icon.png' id = 'logos-md' alt="The Barberos BarberShop Logo" />
            <img className="d-block w-100 carousel-sm" src='./images/logo-color-sm.png' id = 'logos-sm' alt="The Barberos BarberShop Logo" />
          </div>
          <div className="carousel-item">
            <img className="d-block  carousel-lg" src='./images/north-park-sign-lg.jpg' alt="North Park City Sign" />
            <img className="d-block carousel-md" src='./images/north-park-sign-lg.jpg' alt="North Park City Sign" />
            <img className="d-block carousel-sm" src='./images/north-park-sign-sm.jpg' alt="North Park City Sign" />
          </div>
          <div className="carousel-item">
            <img className="d-block carousel-lg" src='./images/barber-pole-lg.jpg' alt="The Barberos Barshop Pole" />
            <img className="d-block carousel-md" src='./images/barber-pole-lg.jpg' alt="The Barberos Barshop Pole" />
            <img className="d-block w-100 carousel-sm" src='./images/barber-pole-sm.jpg' alt="The Barberos Barshop Pole" />
          </div>
          <div className="carousel-item">
            <img className="d-block carousel-lg" src='./images/barber-chair-lg.jpg' alt="The Barberos BarberShop Chair" />
            <img className="d-block carousel-md" src='./images/barber-chair-sm.jpg' alt="The Barberos BarberShop Chair" />
            <img className="d-block w-100 carousel-sm" src='./images/barber-chair-sm.jpg' alt="The Barberos BarberShop Chair" />
          </div>
          <div className="carousel-item ">
            <img className="d-block carousel-lg" src='./images/barber-shop-lg.jpg' alt="The Barberos BarberShop Lobby"/>
            <img className="d-block carousel-md" src='./images/chair-sm.jpg' alt="The Barberos BarberShop Lobby"/>
            <img className="d-block w-100 carousel-sm" src='./images/chair-sm.jpg' alt="The Barberos BarberShop Lobby"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#splash-carousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#splash-carousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
        <div id = 'top-bar'>
          <img src = './images/barberos-full-text.png' alt = 'Barberos BarberShop Main Header' id = 'barberos-logo'/>
        </div>
          <button id = 'carousel-btn' onClick =   {() => this.props.schedule('carousel')}>Schedule Now</button>
        
      </div>
    )
  }
}