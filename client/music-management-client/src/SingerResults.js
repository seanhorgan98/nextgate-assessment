import React, { Component } from 'react';
import { Container, Table } from 'reactstrap';

class SingerResults extends Component {

    constructor(props){
        super(props);
        this.state = {singers: props.singers, isLoading: props.isLoading};
    }

    componentDidUpdate(prevProps) {
      if(prevProps.singers !== this.props.singers){
        this.setState({          
            singers: this.props.singers
        });
      } 
    }
    
    render() {
        const {singers, isLoading} = this.state;
    
        if (isLoading) {
          return <p>Loading...</p>;
        }

        const singerList = singers.map(singer => {
          return <tr key={singer.id}>
            <td style={{whiteSpace: 'nowrap'}}>{singer.name}</td>
            <td>{singer.dob}</td>
            <td>{singer.sex}</td>
            <td>{singer.company}</td>

          </tr>
        });

        return (
            <div>
            <Container fluid>
                <Table className="mt-4">
                <thead>
                <tr>
                    <th width="20%">Name</th>
                    <th width="10%">Date of Birth</th>
                    <th>Gender</th>
                    <th width="30%">Company</th>
                </tr>
                </thead>
                <tbody>
                { singerList }
                </tbody>
                </Table>
            </Container>
            </div>
        );
    }
}

export default SingerResults;