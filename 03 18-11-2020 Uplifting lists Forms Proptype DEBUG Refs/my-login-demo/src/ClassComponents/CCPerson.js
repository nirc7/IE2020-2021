import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CCPerson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 7,
      name: props.name,
      age: 20
    }

    this.textInput2 = React.createRef();
  }

  btnAdd2Age = () => {
    this.setState((prev) => ({ age: prev.age + 1, eyeColor: 'green' }));
  }

  chgName = (e) => {
    let n = e.target.value.toString();
    n = n.replace('6', '');
    this.setState({ name: n.toUpperCase() });
  }

  btnSendNameToParent = () => {
    this.props.sendDatafromChild(this.state.name);
  }

  //componentDidMount() { }

  btnGetValueByRef = () => {
    this.setState({ txt2: this.textInput2.current.value });
  }

  render() {
    return (
      <div style={{ border: 'solid red 2px', margin: 5 }}>
        <h3>Person</h3>
        id={this.state.id} <br />
        name={this.state.name} <br />
        age={this.state.age} <br />
        eyeColor={this.state.eyeColor} <br />
        <button type="button"
          className="btn btn-success btn-sm"
          style={{ margin: 5 }} onClick={this.btnAdd2Age}>add 2 age</button> <br />
        <input type="text" onChange={this.chgName} value={this.state.name} /> <br />
        <input type="text" value={this.state.name} /> <br />
        <button type="button"
          className="btn btn-success btn-sm"
          style={{ margin: 5 }} onClick={this.btnSendNameToParent}>send name 2 parent</button> <br />
        <input type="text" ref={this.textInput2} />
        <button type="button"
          className="btn btn-success btn-sm"
          style={{ margin: 5 }} onClick={this.btnGetValueByRef}>get value by ref</button> <br />
        txt2= {this.state.txt2}
      </div>
    );
  }
}

CCPerson.propTypes = {
  name: PropTypes.string.isRequired
}