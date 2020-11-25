import React, { Component } from 'react'
import FCMessage from '../FunctionalComponents/FCMessage'
import CCLogin from './CCLogin'

export default class CCMain extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getDataFromChild = (userData) => {
    this.setState({ checkUser: userData });
  }

  render() {
    return (
      <div>
        <CCLogin sendData2Parent={this.getDataFromChild} />
        <FCMessage checkUser={this.state.checkUser} />
      </div>
    )
  }
}
