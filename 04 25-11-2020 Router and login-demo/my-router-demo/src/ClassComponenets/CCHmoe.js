import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class CCHmoe extends Component {

    btngo2Student = () => {
        var userObj = {
            userId: '77',
            userName: 'avi'
        };

        this.props.history.push({
            pathname: '/student/9'  ,
            search: '?query=abc',
            state: { userBen: userObj }
        });

    }

    render() {
        return (
            <div>
                <h3>Home</h3> <br />
                <button onClick={this.btngo2Student}>go 2 sutdent page with data</button>
            </div>
        )
    }
}
export default withRouter(CCHmoe);
