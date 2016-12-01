//Runner.js is the page component for the volunteer/request page.

//Standard imports.
import React from 'react';
import ReactDOM from 'react-dom';

//Imports for components rendered by Runner.js.
import VolunteerButton from './VolunteerButton';
import Profile from './Profile';
import Volunteer from './Volunteer';
import RequestButton from './RequestButton';

//Component
const Runner = () => {
  return ( 
   <div>
    'I am the volunteer/request page.'
    <VolunteerButton />
    <Profile />
    <RequestButton />
  </div>
  );
};


export default Runner;