import React, { Component } from 'react';
import './App.css';

const Users = [
  { id: 1, name: 'avi' },
  { id: 2, name: 'ben' },
  { id: 3, name: 'charlie' },
];

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: Users
    }
  }

  btnRemove = (e) => {
    //console.log(this.state.users);
    let newUsers = this.state.users.filter(user => user.id !== parseInt(e.target.dataset.userid));
    //console.log(newUsers);
    this.setState({ users: newUsers });
  }

  btnRemove2 = (id) => {
    console.log(this.state.users);
    let newUsers = this.state.users.filter(user => user.id !== id);
    this.setState({ users: newUsers },
      ()=>{
        console.log('this state was updated!');
        console.log('from callback function '  , this.state.users);
      });
      console.log(this.state.users);
  }

  render() {
    console.log(this.state.users);

    let showUsers = this.state.users.map(user =>
      <li key={user.id}>id={user.id} name={user.name}
        <a href="#" onClick={this.btnRemove} data-userid={user.id}> X </a> </li>);


    let showUsers2 = this.state.users.map(user =>
      <li key={user.id}>id={user.id} name={user.name}
        <a href="#" onClick={() => { this.btnRemove2(user.id) }} > X </a> </li>);

    return (
      <div className="App" >
        <header className="App-header">
          <ul>
            {showUsers}
          </ul>
          <span style={{ color: 'red' }}>_______________</span>
          <ul>
            {showUsers2}
          </ul>
        </header>
      </div>
    );
  }
}
