//Profile.js displays the username and logout button in the upper right corner.
//Renders on Group and Runner.
//Stretch Goal:  Loads FB picture.

//Standard imports.
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FacebookButton from './Login.js'


//Component
class Profile extends Component {
  

  render() { 
    return ( 
    	<div className='nav-bar'>
    	<FacebookButton />
    	</div>
  );
 }
  
};


export default Profile;