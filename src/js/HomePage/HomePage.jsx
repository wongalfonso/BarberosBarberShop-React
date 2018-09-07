import React, { Component } from 'react';
import Carousel from './Carousel';
import Info from './Info';
import Loading from '../Loading';
import NavBar from '../NavBar';
import Bio from './Bio';
import Footer from '../Footer';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enter: 'carousel',
      exit: '',
    }
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseExit = this.mouseExit.bind(this);
    this.scroll = this.scroll.bind(this);
    this.scroller = this.scroller.bind(this);
  }

  componentDidUpdate() {
    window.onscroll = () => this.scroller();
  }

  mouseEnter(page) {
    this.setState({
      enter: page
    })
  }
  mouseExit(page) {
    this.setState({
      exit: page
    })
  }
  scroll(target) {
    console.log(target);
    let page;
    if (target === '' || target === 'splash-carousel') { page = 'carousel' }
    if (target === 'info-page') { page = 'info' }
    if (target === 'bio-page') { page = 'bio' }
    if (this.state.enter === page) {
      return ;
    } else {
      var id = document.getElementById(target).offsetTop
      console.log(id);
      window.scrollTo({ top: id, behavior: 'smooth' })
      this.setState({ enter: page })
    }
  }


  scroller() {
    console.log('yes');
    const home = document.getElementById('home-page');
    const carousel = document.getElementById('splash-carousel');
    const info = document.getElementById('info-page');
    console.log(carousel.scrollHeight);
  }
  schedule() {
    window.location = 'https://www.schedulicity.com/scheduling/TBB65N'
  }
  render() {
    
    return (
      <div className='home-page' id = 'home-page'>        
        {/* <Loading/> */}
        <NavBar
          active={this.state.enter}
          menu={this.state.exit}
          isActive={this.mouseEnter}
          scroll={this.scroll} />
        <Carousel
          enter={this.mouseEnter}
          exit={this.mouseExit}
          schedule = {this.schedule} />
        <Info
          enter={this.mouseEnter}
          exit={this.mouseExit}
          schedule = {this.schedule} />
        <Bio
          enter={this.mouseEnter}
          exit={this.mouseExit}
          />
        <Footer />
      </div>
    )
  }
}