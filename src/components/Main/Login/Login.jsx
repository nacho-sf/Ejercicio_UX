import React, { Component } from "react";

class Login extends Component {
  render() {
    return <div className="loginContainer">
      <div className="loginForm">
      <form>
        <div id="username">
          <div className="labelContainer">
        <label className="label" htmlFor="user">Username</label>            
          </div>

        <input className="input" name="user" id="user" type="text"/>          
        </div>

        <div id="password">
          <div className="labelContainer">
        <label className="label" htmlFor="pass">Password</label>    
          </div>
        <input className="input" name="pass" id="pass" type="password"/>          
        </div>


        <button id="login" type="submit">Login</button>
      </form>        
      </div>

    </div>;
  }
}

export default Login;