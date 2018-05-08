//Volunteer.js displays people that have volunteered to get food.
//It renders once for each user that has volunteered.
//Should show name, where the user is going for food, and the time they plan to leave.

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Request from './Request';
import RequestButton from './RequestButton';

//Component
class Volunteer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
  	return ( 
      <div>
        <img className='small-profile-pic' src='http://mypetforumonline.com/wp-content/uploads/2014/09/8055895_orig.jpg'/>
        Dog is going to Chipotle at 3:00.
        <Request />
        <RequestButton />
     </div>
  );
 }
 
};

export default NewVolunteer;