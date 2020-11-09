import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import Insert from './Insert';
import CreateSinger from './CreateSinger';
import CreateAlbum from './CreateAlbum';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

class App extends Component{
  state = {
    isLoading: true,
    singers: []
  };

  async componentDidMount(){
    const response = await fetch('/singers');
    const body = await response.json();
    
    this.setState ({ singers: body.content, isLoading: false });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/login' exact={true} component={Login}/>
          <Route path='/search' exact={true} component={Search}/>
          <Route path='/insert' exact={true} component={Insert}/>
          <Route path='/create_singer' exact={true} component={CreateSinger}/>
          <Route path='/create_album' exact={true} component={CreateAlbum}/>
        </Switch>
      </Router>
    )
  }

}

export default App;
