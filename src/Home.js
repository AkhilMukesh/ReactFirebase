import React, { Component } from 'react';
import fire from './config/Fire';
class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        fire.auth().signOut();
    }

render(){
    return(
        <div className = "col-md-6">
<h1>You Are Welcome to This Page</h1>
<button className="btn btn-success" onClick={this.logout}>Logout</button>
        </div>
    );
}
}

export default Home;