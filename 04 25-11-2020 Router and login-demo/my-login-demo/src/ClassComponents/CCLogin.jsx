import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';

const Users = [
  { email: 'avi@a.com', pass: 'avi123', name: 'avi' },
  { email: 'ben@a.com', pass: 'ben123', name: 'ben' },
  { email: 'charlie@a.com', pass: 'charlie123', name: 'charlie' }
];

export default class CCLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  btnLogin = () => {
    let checkUser = Users.find(user => user.email === this.state.emailTxt &&
      user.pass === this.state.passTxt);
    this.props.sendData2Parent(checkUser);
  }

  chgEmail = (e) => {
    this.setState({ emailTxt: e.target.value });
  }

  chgPass = (e) => {
    this.setState({ passTxt: e.target.value });
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <TextField label="Email" onChange={this.chgEmail} /> <br /><br />
        <TextField label="Pass" onChange={this.chgPass} type="password" /> <br /><br />
        <Button variant="outlined" color="secondary"
          size="small" onClick={this.btnLogin}>Login</Button> <br />
        {this.state.message}
      </div>
    )
  }
}
