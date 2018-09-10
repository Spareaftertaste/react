import React,{Component} from 'react';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default class SlidersArrows extends Component{
  render(){
    return (
      <div
        className="arrows"
      >
                <span
                  className="arrow arrow-left"
                  onClick={()=>this.props.turn(-1)}
                >
                  	&lsaquo;
                </span>
        <span
          className="arrow arrow-right"
          onClick={()=>this.props.turn(1)}
        >
                    	&rsaquo;
                </span>
      </div>
    )
  }
}
