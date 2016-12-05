
//Runner.js is the page component for the volunteer/request page.
//It renders the VolunteerButton and the various Volunteer Components.
//It also renders the navbar.

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//Standard imports.

//Imports for components rendered by Runner.js.

import NavBar from './NavBar';
import LandingPage from './LandingPage.js';
import Groups from './Groups.js';
import VolunteerRequestsContainer from './VolunteerRequestsContainer.js';


//Component
class Runner extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      loggedIn: false,
      username: 'Debugger Duck',
      picture: 'http://squareonedsm.com/wp-content/uploads/2013/10/rubber-duck.jpg',
      groupChosen: false,
      currentGroup: 'Capital Factory',
      groups:['Capital Factory','Ducks'],

    };
  }
//There are three possible options when we reach the home page. 
//For each option a navbar is rendered regardless of state.
//1. LoggedIn is false -> render the Landing page component.
//2. LoggedIn is true but group chosen is false -> render the groups component.
//3. LoggedIn is true and groups chosen is true -> render the Volunteer button and volunteer component
// (Which in turn, will render the request component(s))
  selectGroup(){
    this.setState({groupChosen: true})
  }
  selectDifferentGroup(){
    this.setState({groupChosen:false})
  }
  login(){
    this.setState({loggedIn: true})
    }
  render() {
    if (this.state.loggedIn===false){
      return (
        <div>
          <NavBar loggedIn={false} />
          <LandingPage login={this.login.bind(this)}/>
        </div>
        )
    } else {
      if (this.state.groupChosen===false){
        return (
          <div>
          <NavBar loggedIn={true} username={this.state.username} picture={this.state.picture}/>
          <div className='greeting'> Hi, {this.state.username}.</div>
          <div className='group-select'>Please select a group.</div>
            {this.state.groups.map(group =>
              <Groups 
              key={group}
              selectGroup={this.selectGroup.bind(this)} 
              group={group} />
            )}
          </div>
          )
      } else {
        return ( 
          <div>
            <NavBar 
              loggedIn={true} 
              username={this.state.username} 
              picture={this.state.picture} />
            <VolunteerRequestsContainer 
              username={this.state.username} 
              picture={this.state.picture} 
              selectDifferentGroup={this.selectDifferentGroup.bind(this)} />
          </div>
          )
        }
    }  
  }   
};


export default Runner;
