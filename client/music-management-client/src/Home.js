import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';

class Home extends Component {
  render() {
    return (
      <div>
        <AppNavbar/>
        <h3>Welcome to the music management website!</h3>
      </div>
    );
  }
}

export default Home;