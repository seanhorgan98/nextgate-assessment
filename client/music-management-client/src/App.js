import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Search from './Search';
import Insert from './Insert';
import Results from './SingerResults';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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

  // render(){
  //   const {singers, isLoading} = this.state;

  //   if (isLoading){
  //     return <p>Loading...</p>
  //   }
  //   console.log(singers);
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <div className="App-intro">
  //           <h2>Singer List</h2>
  //           {singers.map(singer =>
  //             <div key={singer.id}>
  //               { singer.name }
  //             </div>
  //           )}
  //         </div>
  //       </header>
  //     </div>
  //   )
  // }

  //<Route path='/singers' exact={true} component={GroupList}/>
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/search' exact={true} component={Search}/>
          <Route path='/insert' exact={true} component={Insert}/>
          <Route path='/results' exact={true} component={Results}/>
        </Switch>
      </Router>
    )
  }

}

export default App;
