//Profile.js displays the username and logout button in the upper right corner.
//Renders on Group and Runner.
//Stretch Goal:  Loads FB picture.

//Standard imports.
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


//Component
class Profile extends Component {
  

  render() { 
    return ( 
    	TODO:
    	<div class="navbar navbar-default navbar-static-top">
	  		<div class="container">
	    		<div class="navbar-header">
	      			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
	        		<span class="icon-bar"></span>
	        		<span class="icon-bar"></span>
	        		<span class="icon-bar"></span>
	      			</button>
	      			<a class="navbar-brand" href="#">Food Runner</a>
	    		</div>
	    	<div class="collapse navbar-collapse">
	      		<ul class="nav navbar-nav navbar-right">
			        <li>Rubber Duck Debugger</li>
			        <li>Karma: 0</li>
			        <li>Logout</li>
			    </ul>
	    	</div>
	    </div>
	    </div>
       // <img className='main-profile-pic'
       // src="https://static01.nyt.com/images/2011/11/13/magazine/13duck/13duck-jumbo.jpg"/>
  );
 }
  
};


export default Profile;