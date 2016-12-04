//NavBar.js displays the username and logout button in the upper right corner.
//Renders on Group and Runner.
//Stretch Goal:  Loads FB picture.

//Standard imports.
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FacebookButton from './Login.js'


//Component
class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      karma: 0
    };
  }


  //Note: Once we get OAUTH up, this button functionality will change
  onButtonClick(){
  	this.setState({loggedIn: !this.state.loggedIn})
	  }

  render() { 
  	if(this.state.loggedIn===false){
  		return (
  			<div className='nav-bar'>
  				
    			<FacebookButton onButtonClick={this.onButtonClick.bind(this)} text={'Sign up with Facebook'}/>
    		</div>
    	)
  	} else {
  		return ( 
    	<div className='nav-bar'>
    		<FacebookButton onButtonClick={this.onButtonClick.bind(this)} text={'Log out'}/>
    		<div className='karma'>Karma:{this.state.karma}</div>
    	</div>
  		);
  	}
  	}   
};


export default NavBar;