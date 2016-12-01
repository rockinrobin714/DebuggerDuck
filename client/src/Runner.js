//Runner.js is the page component for the volunteer/request page.
//It renders the VolunteerButton and the various Volunteer Components.
//It also renders Profile.

//Standard imports.
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//Imports for components rendered by Runner.js.
import Profile from './Profile';
import VolunteerButton from './VolunteerButton';
import Volunteer from './Volunteer';


//Component
class Runner extends Component {
  
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