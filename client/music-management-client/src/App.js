import React, { Component } from 'react';
import './App.css';

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

  render(){
    const {singers, isLoading} = this.state;

    if (isLoading){
      return <p>Loading...</p>
    }
    console.log(singers);
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-intro">
            <h2>Singer List</h2>
            {singers.map(singer =>
              <div key={singer.id}>
                { singer.name }
              </div>
            )}
          </div>
        </header>
      </div>
    )
  }

}

export default App;
