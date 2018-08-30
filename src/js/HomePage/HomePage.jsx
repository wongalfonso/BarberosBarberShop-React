import React, { Component } from 'react';
import Carousel from './Carousel';
import Info from './Info';
import Loading from '../Loading';
import NavBar from '../NavBar';

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
  }

  componentDidMount() {

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
    // if (target === 'projectPage') { page = 'project' }
    if (this.state.enter === page) {
      return ;
    } else {
      var id = document.getElementById(target).offsetTop
      console.log(id);
      window.scrollTo({ top: id, behavior: 'smooth' })
      this.setState({ enter: page })
    }
  }


  render() {
    return (
      <div className='home-page'>
        {/* <Loading/> */}
        <NavBar
          active={this.state.enter}
          menu={this.state.exit}
          isActive={this.mouseEnter}
          scroll={this.scroll} />
        <Carousel
          enter={this.mouseEnter}
          exit={this.mouseExit} />
        <Info
          enter={this.mouseEnter}
          exit={this.mouseExit} />
      </div>
    )
  }
}