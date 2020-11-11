import React, { Component } from 'react';


export default class CCDriver extends Component {
    constructor(props) {
        super(props);

    }

    send2Parent = () => {
        this.props.sendData(7);
    }

    render() {
        return (
            <button onClick={this.send2Parent} >send to parent</button>
        );
    }
} 