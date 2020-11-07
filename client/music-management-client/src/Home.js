import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';

class Home extends Component {
  render() {
    return (
      <div>
        <AppNavbar/>
        <h1>Home</h1>
      </div>
    );
  }
}

export default Home;