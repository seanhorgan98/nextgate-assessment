import React, { Component } from 'react';
import AppNavbar from './AppNavbar';

class CreateSinger extends Component{

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          dob: '',
          sex: 'MALE',
          company: ''
        };
      }

    mySubmitHandler = (event) => {
        event.preventDefault();
        //Fetch using POST to send to database
        console.log(this.state);

        fetch('/singers', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                dob: this.state.dob,
                sex: this.state.sex,
                company: this.state.company
            })
        });

      }

    //Update state onChange
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }

    render(){
        return (
            <div>
                <AppNavbar/>
                <form onSubmit={this.mySubmitHandler}>
                <h1>Create Singer</h1>

                <p>Enter singer's name:</p>
                <input
                    type='text'
                    name='name'
                    onChange={this.myChangeHandler}
                />

                <p>Enter singer's gender:</p>
                <select
                    name='sex' 
                    value={this.state.sex} 
                    onChange={this.myChangeHandler}
                >
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                </select>

                <p>Enter singer's date of birth (format: yyyyMMdd):</p>
                <input
                    type='text'
                    name='dob'
                    onChange={this.myChangeHandler}
                />

                <p>Enter singer's company:</p>
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

export default CreateSinger;