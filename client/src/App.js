
//Runner.js is the page component for the volunteer/request page.
//It renders the VolunteerButton and the various Volunteer Components.
//It also renders the navbar.

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//Standard imports.

//Imports for components rendered by Runner.js.

import NavBar from './NavBar';
import VolunteerButton from './VolunteerButton';
import Volunteer from './Volunteer';
import FacebookButton from './Login.js';


//Component
class Runner extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: 'Debugger Duck',
      picture: 'http://squareonedsm.com/wp-content/uploads/2013/10/rubber-duck.jpg',
      currentGroup: 'Capitol Factory',
      groups:['Capitol Factory','Ducks'],

    };
  }
  
  render() {
    return ( 
      <div>
        <NavBar />
        <div className='request-container'>
          <VolunteerButton />
          <Volunteer />
        </div>
    </div>
  );
 }
   
};


export default Runner;
