'use strict';

import React from 'react';

require('styles//ToTop.css');

class ToTopComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {show:false};
    this.handleScroll=this.handleScroll.bind(this);
  }
  componentWillMount(){
    window.addEventListener('scroll',this.handleScroll,true)
  }

  handleScroll(){
    let scrollTop = document.body.scrollTop;
    if(scrollTop > 50){
      this.setState({
        show: true
      })
    }else {
      this.setState({
        show: false
      })
    }
  }

  go(){
    document.body.scrollTop = 0;
  }
  render() {
    if(this.state.show){
      return (
        <div className="to-top" onClick={this.go()}>233</div>
      );
    }else {
      return(
        null
      )
    }

  }
}

ToTopComponent.displayName = 'ToTopComponent';

// Uncomment properties you need
// ToTopComponent.propTypes = {};
// ToTopComponent.defaultProps = {};

export default ToTopComponent;
