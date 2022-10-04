import React, { Component } from "react";
import {Route, Routes} from 'react-router-dom'
import Form from './Form'
import Login from './Login'

class Main extends Component {
  render() {
    return <div className="main">
      <Routes>
        <Route element={<Login/>} path={"/"}/>
        <Route element={<Form/>} path={"/form"}/>        
      </Routes>

    </div>;
  }
}

export default Main;
