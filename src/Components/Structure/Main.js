import React, {Component} from 'react';
import Logo from '../Intro/Logo';
import {NavLink} from 'react-router-dom';

export default class Main extends Component {

  render() {
    return (
      <div className="Main">
        {/* <Logo /> */}
        <h2>Hi There! I'm Dan Hintz and I'm a full-stack web developer.</h2>
        <p>Take a look around. If you like what you see, let me know. You can find my contact information <NavLink to="/about" exact>here</NavLink>.</p>
      </div>
    )
  }
}