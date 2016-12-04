//Login.js displays a facebook button
import React, {Component} from 'react';

class FacebookButton extends Component {
   constructor(props) {
    super(props);
    this.state = {
    	position: this.props.position
    };
  }

   render(){
      if (this.props.position==='bottom'){
      	return (
      		<div className='center'><button onClick={this.props.onButtonClick} className='fb-button-big '><i className="fa fa-facebook" aria-hidden="true">  </i>{this.props.text}</button></div>
      		)
      } else{
	      return (
	         <button onClick={this.props.onButtonClick} className='fb-button'><i className="fa fa-facebook" aria-hidden="true">  </i>{this.props.text}</button>
	      )
	   }
	}
};

export default FacebookButton;