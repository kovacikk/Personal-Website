import React, { Component, Fragment } from 'react';
import './css/App.css';
import Main from './js/Main';

class Paragraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text,
        };
    }

    render() {
        return (
            <div>
                <p>{this.state.text}</p>
            </div>
        );
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "main",
        };
    }

    testParagraphs() {
        let objectP = []
        for (let i = 0; i < 10; i++) {
            let text = "Gamer" + i;
            objectP.push(<Paragraph text={text}></Paragraph>)
        }
        return (
            <Fragment>{objectP}</Fragment>
        );
    }

    render() {
        var midContent;

        if (this.state.page === "main") {
            midContent = <Main></Main>;
        }

        return(
            //Main body of HTML
            <html lang="en">
                <head>
                    <link href="https://fonts.googleapis.com/css?family=Spectral" rel="stylesheet"></link>
                </head>
                <body id="lowBody">
                    <div id="header">
                        <p>Kyle Website</p>
                    </div>

                    <div id="bar"></div>
                    <div id="midSection">
                        <ul id="sidebar">
                            <li>
                                <button onClick={() => {this.setState({page: "main"})}}>Main</button>
                            </li>
                            <li>
                                <button onClick={() => {this.setState({page: "about"})}}>About</button>
                            </li>
                            <li>
                                <button onClick={() => {this.setState({page: "forum"})}}>Forum</button>
                            </li>
                            <li>
                                <button onClick={() => {this.setState({page: "contact"})}}>Contact Information</button>
                            </li>
			            </ul>
			            <div id="main">
                            {midContent}
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

export default App;