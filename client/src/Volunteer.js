//Volunteer.js displays people that have volunteered to get food.
//It renders once for each user that has volunteered.
//Should show name, where the user is going for food, and the time they plan to leave.

//Standard Imports.
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//Import Relevant Components
import Request from './Request';
import RequestButton from './RequestButton';

//Component
class Volunteer extends Component {
  return ( 
   <div>
    'Volunteer'
    <Request />
    <RequestButton />
     
  </div>
  );
};

export default Volunteer;