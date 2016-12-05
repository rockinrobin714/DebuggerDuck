//NavBar.js displays the username and logout button in the upper right corner.
//Renders on Group and Runner.
//Stretch Goal:  Loads FB picture.

//Standard imports.
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FacebookButton from './FacebookButton.js'


//Component
class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      karma: 0
    };
  }

  //Note: Navbar does not rerender when the app renders. How can we change this??
  
  //Note: All this does is toggle loggedIn back and forth so I don't have to manually change App.js's state. 
  //Once we get OAUTH up, this button functionality will need to change.
  onButtonClick(){
  	this.setState({loggedIn: !this.state.loggedIn})
	  }

  render() { 
  	if(this.state.loggedIn===false){
  		return (
  			<div className='nav-bar'>
  				
    			<FacebookButton onButtonClick={this.onButtonClick.bind(this)} text={'Log in'}/>
    		</div>
    	)
  	} else {
  		return ( 
    	<div className='nav-bar'>
    		<FacebookButton onButtonClick={this.onButtonClick.bind(this)} text={'Log out'}/>
    		<div className='karma'>Karma: {this.state.karma}</div>
        <img className='nav-pic' src={this.props.picture}/>
        <div className='username'>{this.props.username} </div>
    	</div>
  		);
  	}
  	}   
};


export default NavBar;