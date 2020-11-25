import React from 'react';
import { Link ,withRouter } from 'react-router-dom';

function FCHeader() {
    return (
        <div style={{margin:20  }}>
            <Link to="/">HOME</Link> &nbsp;&nbsp;&nbsp; |  &nbsp;&nbsp;&nbsp;
            <Link to="/about">About</Link>   &nbsp;&nbsp;&nbsp;|  &nbsp;&nbsp;&nbsp;
            <Link to="/student/8">Student</Link>
        </div>
    )
}
export default withRouter(FCHeader);
