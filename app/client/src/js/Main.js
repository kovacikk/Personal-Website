import React, { Component } from 'react';
import '../css/Main.css';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    };

    render() {
        return (
            <div>
                <h3>Kyle Website</h3>
			    <p>Here at Kyle Website, you can learn all about Kyle. You can learn about all of his exploits and how to contact him. There will even be a message board coming soon!!!</p>
                <br></br>
                <h3>Status on Kyle</h3>
				<p>Kyle is currently a Computer Science major studying for his bachelor's at Purdue University. He plans to develop software and work with machine learning</p>
            </div>
        );
    }
}

export default Main;