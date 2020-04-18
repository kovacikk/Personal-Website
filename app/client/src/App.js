import React, { Component, Fragment } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import './css/App.css';
import Main from './js/Main.js';
import About from './js/About.js';
import Forum from './js/Forum.js';
import Contact from './js/Contact.js';

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
            page: props.page,
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
        return(

            
            //Main body of HTML
            <html lang="en">
                <head>
                    <link href="https://fonts.googleapis.com/css?family=Spectral" rel="stylesheet"></link>
                </head>
                <body id="lowBody">
                    <Router>
                    <div id="header">
                        <p>Kyle Website</p>
                    </div>

                    <div id="bar"></div>
                    <div id="midSection">
                        <ul id="sidebar">
                            <li>
                                <Link to="/"><button>Main</button></Link>
                            </li>
                            <li>
                                <Link to="/about"><button>About</button></Link>
                            </li>
                            <li>
                                <Link to="/forum"><button>Forum</button></Link>
                            </li>
                            <li>
                                <Link to="/contact"><button>Contact Information</button></Link>
                            </li>
			            </ul>
			            <div id="main">
                            <Switch>
                                <Route path="/about">
                                    <About />
                                </Route>
                                <Route path="/forum">
                                    <Forum/>
                                </Route>
                                <Route path="/contact">
                                    <Contact/>
                                </Route>
                                <Route path="/">
                                    <Main />
                                </Route>
                            </Switch>
			            </div>
                    </div>
                    <div id="bar"></div>
		            <div id="footer">
			            <p>To learn more about Kyle, visit his github and Linkedin pages in the Contact Information tab</p>
		            </div>
                    </Router>>
                </body>
            </html>
        );
    }
}

export default App;