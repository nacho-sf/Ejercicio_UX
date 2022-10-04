import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return <div className="nav-bar">
      <Link className="nav-link" to='/'>Login</Link>
      <p className="nav-link">About</p>      
      <Link className="nav-link" to='/form'>Book</Link>
      <p className="nav-link">Info</p>
    </div>;
  }
}

export default Nav;
