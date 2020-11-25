import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class CCStudent extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }
    render() {
        return (
            <div>
                <h3>Student</h3>
               userId from params = {this.props.match.params.userId} <br />

               userId from userObj : {this.props.location.state.userBen.userId} <br />
               username from userObj : {this.props.location.state.userBen.userName}
            </div>
        )
    }
}
export default withRouter(CCStudent);
