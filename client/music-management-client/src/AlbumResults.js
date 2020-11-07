import React, { Component } from 'react';
import { Container, Table } from 'reactstrap';

class AlbumResults extends Component {

    constructor(props){
        super(props);
        this.state = {albums: [], isLoading: true};
    }

    componentDidMount() {
        this.setState({isLoading: true});
    
        fetch('/albums')
          .then(response => response.json())
          .then(data => this.setState({albums: data.content, isLoading: false}));
    }

    render() {
        const {albums, isLoading} = this.state;
    
        if (isLoading) {
          return <p>Loading...</p>;
        }

        const albumList = albums.map(album => {
            console.log(album.singer);
          return <tr key={album.id}>
            <td style={{whiteSpace: 'nowrap'}}>{album.title}</td>
            <td>{album.year}</td>
            <td>{album.singer}</td>
            <td>{album.company}</td>

          </tr>
        });

        return (
            <div>
            <Container fluid>
                <Table className="mt-4">
                <thead>
                <tr>
                    <th width="20%">Title</th>
                    <th width="10%">Year</th>
                    <th>Singer</th>
                    <th width="30%">Company</th>
                </tr>
                </thead>
                <tbody>
                { albumList }
                </tbody>
                </Table>
            </Container>
            </div>
        );
    }
}

export default AlbumResults;