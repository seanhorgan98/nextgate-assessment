import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './App.css';
import AppNavbar from './AppNavbar';
import SingerResults from './SingerResults';
import SearchBar from './SearchBar';
import AlbumResults from './AlbumResults';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = { showSingers: false, showAlbums: false }
        this.hideComponent = this.hideComponent.bind(this);
    }

    hideComponent(name) {
        console.log(name);
        switch (name) {
          case "showSingers":
            this.setState({ showSingers: true });
            this.setState({ showAlbums: false });
            break;
          case "showAlbums":
            this.setState({ showAlbums: true });
            this.setState({ showSingers: false });
            break;
          default:
              return;
        }
    }

  render() {
      const { showSingers, showAlbums } = this.state;
    return (
      <div>
        <AppNavbar/>
        <h2>Search for Singer</h2>
        <SearchBar/>
        <Button onClick={() => this.hideComponent("showSingers")}>
            Search
          </Button>
        <h2>Search for Album</h2>
        <SearchBar/>
        <Button onClick={() => this.hideComponent("showAlbums")}>
            Search
          </Button>
        {showSingers && <SingerResults/>}
        {showAlbums && <AlbumResults/>}
      </div>
    );
  }
}

export default Search;