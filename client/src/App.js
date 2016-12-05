//App.js is the top component. It stores all the main data within its state. 
//It renders 3 different views based on its state (described in detail below).
//It funnels down user data into its child components.
//The hierarchy is described below.

//                             App
//          /             /     |       \
//  NavBar    LandingPage     Groups    VolunteerRequestContainer
//       \     /                             |
//       FacebookButton                    Volunteer
//                                           |
//                                         Request

import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import NavBar from './NavBar';
import LandingPage from './LandingPage.js';
import Groups from './Groups.js';
import VolunteerRequestsContainer from './VolunteerRequestsContainer.js';


class Runner extends Component {
  constructor(props) {
    super(props);
//For now, username, picture, currentGroup, groups are all hard coded in.
//Eventually, we will get username and picture from fb
//And groups from the DB
//And currentGroup from selecting the button
//I forgot to add the currentGroup functionality we can maybe render it in the request/volunteer container later, 
//But right now, it does nothing
    this.state = {
      loggedIn: false,
      username: 'Debugger Duck',
      picture: 'http://squareonedsm.com/wp-content/uploads/2013/10/rubber-duck.jpg',
      groupChosen: false,
      currentGroup: 'Capital Factory',
      groups:['Capital Factory','Ducks'],
      //currentData holds all volunteers and requests from day.
      currentData:[],

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
    //flesh this out
  }
  selectDifferentGroup(){
    this.setState({groupChosen:false})
    //this rerenders the app to go back to option 2 (mentioned above)
  }  
  //Commented out for now.
  // login(){
  //   this.setState({loggedIn: true})
  //   //This needs to be changed once we get OAuth up and working. Right now, clicking logs you in without authentication
  //   }
  //getGroups requesta a list of all groups from the server.
    //Then updates groups in state.
  getGroups(){
    axios.get('/api/group')
      .then(function (response) {
        console.log('Getting Groups? ',response.body.data);
        this.setState({groups:response.body.data});
    })
  }
  login(){
    this.setState({loggedIn: true})
    //This needs to be changed once we get OAuth up and working. Right now, clicking logs you in without authentication
    }
  logOut(){
    this.setState({loggedIn: false})
    //This needs to be changed once we get OAuth up and working. Right now, clicking logs you in without authentication
    }

  //Gets all volunteers for today, and all associated requests.
    //updates currentData in state, which is then passed to VolunteerRequest Container.
  getCurrentData() {
    axios.get('/api/volunteer')
      .then(function(response) {
        console.log('Getting Current Data?', response.body.data);
        this.setState({currentData: response.body.data});
      })
  }
  //postLogin sends login data to the server.
    //Currently designed to get redirected to passport.  May need to be updated.
    //In progress.
  postLogin() {
    axios.get('/api/login') 
      .then(function(response) {
        console.log('Login successful? ', response);
        this.setState({LoggedIn: true});
      })
      .catch(function(error) {
        console.log('Error occurred during login ', error);

      })
  }
  //postVolunteer POSTS a new volunteer to the server.
    //Accepts a location, a time, and a username, all strings for simplicity.
  postVolunteer(username, location, time) {
    axios.post('/api/volunteer', {
    username: username,
    location: location,
    time:  time
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }

  render() {
    if (this.state.loggedIn===false){
      return (
        <div>
          <NavBar 
          //The navbar doesn't need to be sent any info at this level (I don't think?) besides whether it's logged in or not
          login={this.login.bind(this)}
          loggedIn={false} />
          <LandingPage login={this.login.bind(this)}/>
        </div>
        )
    } else {
      if (this.state.groupChosen===false){
        return (
          <div>
          <NavBar 
          //Funnel down info into the navbar
          loggedIn={true}
          logOut={this.logOut.bind(this)} 
          username={this.state.username} 
          picture={this.state.picture}/>
          <div className='greeting'> Hi, {this.state.username}.</div>
          <div className='group-select'>Please select a group.</div>
            {this.state.groups.map(group =>
              //This maps out all the groups into a list. 
              <Groups 
              //If I don't put a key in, react gets angry with me.
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
            //Again, funneling info to the navbar.
              loggedIn={true}
              logOut={this.logOut.bind(this)} 
              username={this.state.username} 
              picture={this.state.picture} />
            <VolunteerRequestsContainer 
            //This also needs to be funneled info
              username={this.state.username} 
              picture={this.state.picture}
              currentData={this.state.currentData}
              //We pass down the selectDifferentGroup function to this component since the button is rendered there
              selectDifferentGroup={this.selectDifferentGroup.bind(this)} />
          </div>
          )
        }
    }  
  }   
};


export default Runner;
