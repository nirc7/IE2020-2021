import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import CCDriver from './CCDriver';

export default class CCCar extends Component {
  constructor(props) {
    super(props);

    let num = 7; //local variable
    this.length = 10; //field

    this.state = //special filed  that create a render 
    {
      lisencePlatte: 'CE1234',
      automaticEngine: true,
      color: 'red',
      size: 7,
      name: 'no name'
    };
  }

  btnAddOne = () => {
    //this.setState( {size:8 } );//no dependancy!
    //this.setState( {size : this.state.size + 1 } ); //ERROR!
    this.setState((prev) => ({
      size: prev.size + 1,
      color: prev.color + ' :) ',
      seats: 5
    })); //the wright way
  }

  chgName = (e) => {
    this.setState({ name: e.target.value });
  }

  getData = (data) => {
    console.log('in parent data= ' + data);
  }

  render() {

    return (
      <div style={{ border: 'solid green 1px' }} >
        <h2>Car</h2>
        <h3>{this.props.model}</h3>
        lisencePlatte = {this.state.lisencePlatte} <br />
        automaticEngine = {this.state.automaticEngine ? 'yes' : 'no'} <br />
        color= {this.state.color} <br />
        size={this.state.size} <br />
        seats: {this.state.seats} <br />
        name = {this.state.name} <br />
        <Button variant="warning" onClick={this.btnAddOne} >add one</Button>
        <input type="text" onChange={this.chgName} /> <br />
        <CCDriver  sendData = {this.getData} />

      </div>
    );
  }
}