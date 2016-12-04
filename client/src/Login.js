//Login.js displays a facebook button
import React, {Component} from 'react';

class FacebookButton extends Component {
   constructor(props) {
    super(props);
    this.state = {};
  }

//fb icon = <i className="fa fa-facebook" aria-hidden="true"></i> Log in with facebook
   render(){
      
      return (
         <button onClick={this.props.onButtonClick} className='fb-button btn'><i className="fa fa-facebook" aria-hidden="true">  </i>{this.props.text}</button>
      )
   }
   
};

export default FacebookButton;