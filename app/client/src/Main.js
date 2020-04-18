import React, { Component } from 'react';
import './css/Main.css';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "home",
        };
    }

    render() {
        return(
            //Main body of HTML
            <html lang="en">
                <head>
                    <link href="https://fonts.googleapis.com/css?family=Spectral" rel="stylesheet"></link>
                </head>
                <body>
                    <div id="header">
                        <p>Kyle Website</p>
                    </div>

                    <div id="bar"></div>
                    <div id="midSection">
                        <div id="sidebar">
				            <a href="websiteMain.html">Main</a>
				            <a href="websiteAbout.html">About</a>
				            <a href="websiteForum.html">Forum</a>
				            <a href="websiteContact.html">Contact Information</a>
			            </div>
			            <div id="main">
				            <h3>Status on Kyle</h3>
				            <p>Kyle is currently a Computer Science major studying for his bachelor's at Purdue University. He plans to develop software and work with machine learning</p>
				
				            <h3>Kyle Website</h3>
				            <p>Here at Kyle Website, you can learn all about Kyle. You can learn about all of his exploits and how to contact him. There will even be a message board coming soon!!!</p>
			            </div>
                    </div>
                    <div id="bar"></div>
		            <div id="footer">
			            <p>To learn more about Kyle, visit his github and Linkedin pages in the Contact Information tab</p>
		            </div>
                </body>
            </html>
        );
    }
}

export default Main;