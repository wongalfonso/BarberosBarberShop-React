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
            <img className="d-block w-100 carousel-lg" src='./images/logo-color-lg.png' alt="First slide"/>
            <img className="d-block w-100 carousel-md" src='./images/logo-color-md.jpg' alt="First slide" />
            <img className="d-block w-100 carousel-sm" src='./images/logo-color-sm.jpg' alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 carousel-lg" src='./images/north-park-sign-lg.jpg' alt="Second slide" />
            <img className="d-block w-100 carousel-md" src='./images/north-park-sign-md.jpg' alt="Second slide" />
            <img className="d-block w-100 carousel-sm" src='./images/north-park-sign-sm.jpg' alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 carousel-lg" src='./images/barber-pole-lg.jpg' alt="Third slide" />
            <img className="d-block w-100 carousel-md" src='./images/barber-pole-sm.jpg' alt="Third slide" />
            <img className="d-block w-100 carousel-sm" src='./images/barber-pole-sm.jpg' alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 carousel-lg" src='./images/barber-chair-lg.jpg' alt="Fourth slide" />
            <img className="d-block w-100 carousel-md" src='./images/barber-chair-sm.jpg' alt="Fourth slide" />
            <img className="d-block w-100 carousel-sm" src='./images/barber-chair-sm.jpg' alt="Fourth slide" />
          </div>
          <div className="carousel-item ">
            <img className="d-block w-100 carousel-lg" src='./images/barber-shop-lg.jpg' alt="Fifth slide"/>
            <img className="d-block w-100 carousel-md" src='./images/chair-sm.jpg' alt="Fifth slide"/>
            <img className="d-block w-100 carousel-sm" src='./images/chair-sm.jpg' alt="Fifth slide"/>
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
        <button id = 'carousel-btn' onClick = {this.props.schedule}>Schedule Now</button>
      </div>
    )
  }
}