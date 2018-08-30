import React, { Component } from 'react';

export default class Carousel extends Component {

  componentDidMount() {
    const page = document.getElementById('splash-carousel');
    page.onmouseenter = () => this.props.enter('carousel');
    page.onmouseleave = () => this.props.exit('carousel');
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
            <img className="d-block w-100" src='./images/BalboaPark.jpg' alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src='./images/Downtown.jpg' alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src='./images/PointLomaCemetary.jpg' alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src='./images/CoronadoBridge.jpg' alt="Fourth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src='./images/OceanBeachPier.jpg' alt="Fifth slide"/>
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
      </div>
    )
  }
}