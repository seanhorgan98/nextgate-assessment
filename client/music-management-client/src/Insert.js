import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './App.css';
import AppNavbar from './AppNavbar';

class Insert extends Component {
  render() {
    return (
      <div>
        <AppNavbar/>
        <Button href="/create_singer">
          Create Singer
        </Button>
        <Button href="/create_album">
          Create Album
        </Button>
        <h3>Upload from file</h3>
        <input type="file" name="file" onChange={this.onChangeHandler}/>
      </div>
    );
  }
}

export default Insert;