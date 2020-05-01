import React, { Component } from 'react';
//import '../css/Forum.css';

class Forum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    };

    render() {
        return (
            <div>
                <h3 id="forumText">Forum</h3>
				<input id="userInput"></input>
				<button id="submitButton">Submit</button>
            </div>
        );
    }
}

export default Forum;