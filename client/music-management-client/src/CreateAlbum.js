import React, { Component } from 'react';
import AppNavbar from './AppNavbar';

class CreateAlbum extends Component{

    constructor(props) {
        super(props);
        this.state = {
          title: '',
          year: '',
          company: '',
          singer: '',
          singerData: []
        };
      }

      componentDidMount() {
        fetch("/singers")
          .then((response) => {
            return response.json();
          })
          .then(data => this.setState({singerData: data.content}));
      }

      myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }

      mySubmitHandler = (event) => {
        event.preventDefault();
        //Fetch using POST to send to database
        var slash = "/singers/";
        var urlString = slash.concat(this.state.singer, "/albums");
        fetch(urlString, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                year: this.state.year,
                company: this.state.company
            })
        });

      }

    render(){
        return (
            <div>
                <AppNavbar/>
                <form onSubmit={this.mySubmitHandler}>
                <h1>Create Album</h1>

                <p>Enter album title:</p>
                <input
                    type='text'
                    name='title'
                    onChange={this.myChangeHandler}
                />

                <p>Enter album year:</p>
                <input
                    type='text'
                    name='year'
                    onChange={this.myChangeHandler}
                />

                <p>Enter album's singer:</p>
                <select
                    name='singer' 
                    onChange={this.myChangeHandler}>
                    <option> Please Select...</option>
                    {this.state.singerData.map((item, index) => <option key={index} value={item.id}>{item.name}</option>)}
                </select>

                <p>Enter album's company:</p>
                <input
                    type='text'
                    name='company'
                    onChange={this.myChangeHandler}
                />


                <br/>
                <br/>
                <input type='submit' />
                </form>
            </div>
        );
    }
}

export default CreateAlbum;