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
        this.state = { showSingers: false, showAlbums: false, singerData: [], albumData: [] }
        this.hideComponent = this.hideComponent.bind(this);
    }

    componentDidMount() {
        this.setState({isLoading: true});
    
        fetch('/singers')
          .then(response => response.json())
          .then(data => this.setState({singerData: data.content, isLoading: false}));

        fetch('/albums')
          .then(response => response.json())
          .then(data => this.setState({albumData: data.content, isLoading: false}));
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
      const { showSingers, showAlbums, singerData, albumData, isLoading } = this.state;
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
        {showSingers && <SingerResults singers={singerData} isLoading={isLoading}/>}
        {showAlbums && <AlbumResults albums={albumData} isLoading={isLoading}/>}
      </div>
    );
  }
}

export default Search;