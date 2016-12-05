//FacebookButton.js displays a facebook button
import React, {Component} from 'react';

class FacebookButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //This is only to distinguish between the two buttons.
    	loggedIn: this.props.loggedIn,
      position: this.props.position
    };
  }
  render(){
      if (this.props.position==='bottom'){
        //There are two different facebook buttons. Maybe we could make these two separate components? There's not a lot to them,
        //so I kept them together for and simply sent down some props saying 'bottom' for the second button.
      	return (
      		<div className='center'><button onClick={this.props.login} className='fb-button-big '><i className="fa fa-facebook" aria-hidden="true"></i> Sign up now with Facebook</button></div>
      		)
      } else{
        if (this.props.loggedIn===false){
          return (
           <button 
             onClick={this.props.login}
             className='fb-button'>
             <i className="fa fa-facebook" aria-hidden="true"></i>&nbsp;Log in
           </button>
          )
        }else {
          return (
           <button 
             onClick={this.props.logOut}
             className='fb-button'>
             <i className="fa fa-facebook" aria-hidden="true"></i>&nbsp;Log out
           </button>
          )
        }
	   }
	}
};

export default FacebookButton;