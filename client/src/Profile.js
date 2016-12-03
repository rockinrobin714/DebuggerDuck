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
      <div>
       <img src="https://static01.nyt.com/images/2011/11/13/magazine/13duck/13duck-jumbo.jpg"/>
     
      </div>
  );
 }
  
};


export default Profile;