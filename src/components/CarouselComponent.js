'use strict';

import React from 'react';
import SlidersItem from './SliderItem';
import SlidersArrows from './SliderArrpws';
import SlidersDots from './SlidierDots';

require('styles//Carousel.css');

class CarouselComponent extends React.Component {
  constructor(){
    super();
    this.state={index:0}
  }

  componentDidMount(){
    if(this.props.autoPlay){
      this.go();
    }
  }

  go=()=>{
    this.timer=setInterval(()=>{
      this.turn(1)
    },this.props.delay*3000)
  };
  turn=(step)=>{
    let index= this.state.index+step;
    if(index>=this.props.images.length){
      index=0;
    }
    if(index<0){
      index=this.props.images.length-1;
    }
    this.setState({index:index})
  };

  render(){
    return (
      <div className={'flex'}>
        <div
          className="wrapper"
          onMouseOver={()=>clearInterval(this.timer)}
          onMouseOut={this.go}
        >
          <SlidersItem
            images={this.props.images}
            speed={this.props.speed}
            index={this.state.index}
          />
          <SlidersDots
            images={this.props.images}
            turn={this.turn}
            index={this.state.index}
          />
        </div>
        <SlidersArrows
          turn={this.turn}
        />
        <div className={'content-d'}>
          <a href="https://music.163.com/#/download" className={'download'} target="_blank">
          </a>
          <span>PC 安卓 iPhone WP iPad Mac 六大客户端</span>
        </div>
      </div>
    )
  }
}

CarouselComponent.displayName = 'CarouselComponent';

// Uncomment properties you need
// CarouselComponent.propTypes = {};
// CarouselComponent.defaultProps = {};

export default CarouselComponent;
