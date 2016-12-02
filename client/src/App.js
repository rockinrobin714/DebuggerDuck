
//Runner.js is the page component for the volunteer/request page.
//It renders the VolunteerButton and the various Volunteer Components.
//It also renders Profile.

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//Standard imports.

//Imports for components rendered by Runner.js.
<<<<<<< HEAD
//import Profile from './Profile';
//import VolunteerButton from './VolunteerButton';
//import Volunteer from './Volunteer';
import FacebookButton from './Login.js'
||||||| merged common ancestors
import Profile from './Profile';
import VolunteerButton from './VolunteerButton';
import Volunteer from './Volunteer';
=======
import Profile from './Profile';
import VolunteerButton from './VolunteerButton';
import Volunteer from './Volunteer';
import FacebookButton from './Login.js'
>>>>>>> db06b953da98696bae38f77fb40fc3a2fb30a3f9


//Component
class Runner extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    return ( 
     <div>
      'I am the volunteer/request page.'
      <Profile />
      <VolunteerButton />
      <Volunteer />
    </div>
  );
 }
   
};


export default Runner;
