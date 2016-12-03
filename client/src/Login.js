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

   render(){
      let loggedInText ='<i className="fa fa-facebook" aria-hidden="true"></i> Log in with facebook';
      let loggedOutText = 'Log out'
      return (
         <div className='fb-button' style={{float:"right"}}></div>
      )
   }
   
};

export default FacebookButton;