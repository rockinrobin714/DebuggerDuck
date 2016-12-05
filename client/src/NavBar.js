
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FacebookButton from './FacebookButton.js'



class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      //I have not yet done anything with the karma besides hard code it as 0 and display it.
      //This needs to be worked on.
      karma: 0
    };
  }

  //Note: Navbar does not rerender when the app renders. How can we change this??
  
  //Note: All this does is toggle loggedIn back and forth so I don't have to manually change App.js's state. 
  //Once we get OAUTH up, this button functionality will need to change.
  
  //login and logOut invoke the functions passed from App.
  login(){
    this.props.postLogin();
  	this.setState({loggedIn: true})
    this.props.postLogin();
	 }
  //logout updates local state and runs postLogout, inherited from App. 
  logOut(){
    this.setState({loggedIn: false})
    console.log('log out triggered')
    this.props.postLogout();
  }
  
  render() { 
    //This renders differently depending on whether logged in is true or false.
    //If I manually change true or false, it renders fine. Currently, it isn't rerendering when app.js rerenders, and it should.
  	if(this.state.loggedIn===false){
  		return (
  			<div className='nav-bar'>
    			<FacebookButton 
          login={this.login.bind(this)} 
          loggedIn={this.state.loggedIn} />
    		</div>
    	)
  	} else {
  		return ( 
    	<div className='nav-bar'>
    		<FacebookButton 
          logOut={this.logOut.bind(this)} 
          loggedIn={this.state.loggedIn}/>
    		<div className='karma'>Karma: {this.state.karma}</div>
        <img className='nav-pic' src={this.props.picture}/>
        <div className='username'>{this.props.username} </div>
    	</div>
  		);
  	}
  	}   
};


export default NavBar;