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
        this.state = { showSingers: false, showAlbums: false, singerData: [], albumData: [], searchText: "" }
        this.hideComponent = this.hideComponent.bind(this);
        this.refreshSearch = this.refreshSearch.bind(this);
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

    refreshSearch(name){
      this.setState({ showSingers: false, showAlbums: false });

      this.hideComponent(name);
    }

    updateFilterText(e){
      this.setState({
        searchText: e.target.value
      });
    }
  render() {
      const { showSingers, showAlbums, singerData, albumData, isLoading } = this.state;
      const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
      let filteredSingers = singerData.filter((singer) => {
        return singer.name.indexOf(this.state.searchText) !== -1;
      });
      console.log(filteredSingers);
 
    return (
      <div>
        <AppNavbar/>
        <form>
            <h2>Search for Singer</h2>
            <input style={BarStyling} placeholder={"Search..."} value={this.state.searchText} onChange={this.updateFilterText.bind(this)}></input>
            <Button onClick={() => this.refreshSearch("showSingers")}>
                Search
            </Button>
        </form>
        
        
        <h2>Search for Album</h2>
        <SearchBar/>
        <Button onClick={() => this.refreshSearch("showAlbums")}>
            Search
          </Button>
        {showSingers && <SingerResults singers={filteredSingers} isLoading={isLoading}/>}
        {showAlbums && <AlbumResults albums={albumData} isLoading={isLoading}/>}
      </div>
    );
  }
}


export default Search;