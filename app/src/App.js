import React, { Component, Fragment } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";

import './css/App.css';
import Home from './js/Home.js';
import About from './js/About.js';
import Forum from './js/Forum.js';
import Contact from './js/Contact.js';
import Serve from './js/Serve.js';
import Music from './js/Music.js';
import Mom from './js/Mom.js';
import Dad from './js/Dad.js';
import DadWin from './js/DadWin.js';
import MomBD from './js/MomBD.js';
import Kim from './js/Kim.js';
import DadBD from './js/DadBD.js';

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
                <div id="lowhtml">
                <body id="lowBody">
                <head>
                    <link href="https://fonts.googleapis.com/css?family=Spectral" rel="stylesheet"></link>
                </head>
                    <div id="notFooter">
                    <Router>
                    <div id="header">
                        <p>Kyle Website</p>
                    </div>
                    <div id="bar"></div>
                        <div id="midSection">
                            
                        <ul id="sidebar">
                            <li>
                                <Link to="/"><button>Home</button></Link>
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
                            <li>
                                <Link to="/serve/"><button>Server</button></Link>
                            </li>
                            <li>
                                <Link to="/music"><button>Music</button></Link>
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
                                <Route path="/serve/">
                                    <Serve/>
                                </Route>
                                <Route path="/music">
                                    <Music/>
                                </Route>
                                <Route path="/momDay">
                                    <Mom/>
                                </Route>
                                <Route path="/dadDay">
                                    <Dad/>
                                </Route>
                                <Route path="/dadWin">
                                    <DadWin/>
                                </Route>
                                <Route path="/momBD">
                                    <MomBD/>
                                </Route>
                                <Route path="/kimBD">
                                    <Kim/>
                                </Route>
                                <Route path="/dadBD">
                                    <DadBD/>
                                </Route>
                                <Route path="/">
                                    <Home />
                                </Route>
                            </Switch>
			            </div>
                    </div>
                    </Router>
                    <div id="clearFooter">
                        
                    </div>
                    </div>
		            <div id="footer">
                        <div id="bar"></div>
			            <p>To learn more about Kyle, visit his github and Linkedin pages in the Contact Information tab</p>
		            </div>
                </body>
                </div>
            </html>
        );
    }
}

export default App;

