//Login.js displays a facebook button
import React, {Component} from 'react';

class FacebookButton extends Component {
   constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    };
  }
  componentDidMount() {
    // Not sure how to do this yet
    // axios.get(`/fb`)
    //   .then(res => {
    //     const projects = res.data
    //   	this.setState(loggedIn:true);
    //   });
  }
//fb icon = <i className="fa fa-facebook" aria-hidden="true"></i> Log in with facebook
   render(){
      let loggedInText = 'Log in with facebook';
      let loggedOutText = 'Log out';
      return (
         <button className='fb-button btn' style={{float:"right"}}>{loggedInText}</button>
      )
   }
   
};

export default FacebookButton;