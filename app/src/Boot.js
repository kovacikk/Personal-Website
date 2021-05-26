import React, { Component, Fragment } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './css/Boot.css';
import Home from './js/Home.js';
import About from './js/About.js';
import Forum from './js/Forum.js';
import Contact from './js/Contact.js';
import Serve from './js/Serve.js';
import Music from './js/Music.js';
import Projects from './js/Projects.js'

class Boot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    };

    render() {
        return (
            
            <div id="overall" class="container-fluid">
                <Router>
                <div class="row">
                    <div class="col-sm-4 col-md-3 col-lg-2 gy-5 gx-5" id="sidebar">
                        
                        <div class="row gx-1 p-3 text-light bg-dark sidebar">  
                            <a class="align-items-center text-light text-decoration-none" data-bs-toggle="collapse" href="#collapseSidebar" aria-expanded="true">
                                <span class="fs-4">Links</span>
                            </a>
                            <hr/>
                            <div class="collapse show" id="collapseSidebar" aria-expanded="true">
                            <ul class="nav nav-pills flex-column">
                            <Switch>
                                    <Route path="/projects">
                                    <li class="nav-item">
                                        <a href="/" class="nav-link text-light" aria-current="page">
                                            Home
                                        </a>
                                        </li>
                                        <li>
                                        <a href="/projects" class="nav-link text-light active">
                                            Projects
                                        </a>
                                        </li>
                                        <li>
                                        <a href="/music" class="nav-link text-light">
                                            Music
                                        </a>
                                        </li>
                                        <li>
                                        <a href="/about" class="nav-link text-light">
                                            About
                                        </a>
                                        </li>
                                    </Route>
                                    <Route path="/music">
                                    <li class="nav-item">
                                        <a href="/" class="nav-link text-light" aria-current="page">
                                            Home
                                        </a>
                                        </li>
                                        <li>
                                        <a href="/projects" class="nav-link text-light">
                                            Projects
                                        </a>
                                        </li>
                                        <li>
                                        <a href="/music" class="nav-link text-light active">
                                            Music
                                        </a>
                                        </li>
                                        <li>
                                        <a href="/about" class="nav-link text-light">
                                            About
                                        </a>
                                        </li>
                                    </Route>
                                    <Route path="/about">
                                        <li class="nav-item">
                                        <a href="/" class="nav-link text-light" aria-current="page">
                                            Home
                                        </a>
                                        </li>
                                        <li class="nav-item">
                                        <a href="/projects" class="nav-link text-light">
                                            Projects
                                        </a>
                                        </li>
                                        <li class="nav-item">
                                        <a href="/music" class="nav-link text-light">
                                            Music
                                        </a>
                                        </li>
                                        <li class="nav-item">
                                        <a href="/about" class="nav-link text-light active">
                                            About
                                        </a>
                                        </li>
                                    </Route>
                                    <Route path="/">
                                        <li class="nav-item">
                                        <a href="/" class="nav-link active" aria-current="page">
                                            Home
                                        </a>
                                        </li>
                                        <li>
                                        <a href="/projects" class="nav-link text-light">
                                            Projects
                                        </a>
                                        </li>
                                        <li>
                                        <a href="/music" class="nav-link text-light">
                                            Music
                                        </a>
                                        </li>
                                        <li>
                                        <a href="/about" class="nav-link text-light">
                                            About
                                        </a>
                                        </li>
                                    </Route>
                                </Switch>
                                <hr/>
                            </ul>
                            </div>
                        </div>
                        <div class="row p-3"></div>

                    </div>
                    <div class="col" id="center">
                        <div class="container d-flex flex-column h-100">
                            <div class="row align-items-start" id="header">
                                <nav class="navbar navbar-expand navbar-dark bg-dark gy-2">
                                    <div class="container-fluid">
                                            <div class="collapse navbar-collapse justify-content-md-center">
                                                <ul class="navbar-nav">
                                                    <li class="nav-item">
                                                        <h2><a class="nav-link active text-light" href="/" id="headerText">Kyle Kovacik</a></h2>
                                                    </li>
                                                </ul>
                                            </div>
                                    </div>
                                </nav>
                            </div>
                            <div class="row align-items-center">
                                <div class="col">
                                
                                <Switch>
                                    <Route path="/projects">
                                        <Projects/>
                                    </Route>
                                    <Route path="/about">
                                        <About/>
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
                                    <Route path="/">
                                        <Home />
                                    </Route>
                                </Switch>
                             

                                </div>
                            </div>
                            <div class="row" id="spacer">

                            </div>
                            <div class="row mt-auto mb-2 pt-3" id="footer">
                                <footer class="footer mt-auto py-3 bg-dark gy-5" id="footer">
                                    <div class="container-fluid">
                                        <div class="row bottom-align-text">
                                            <div class="col" align="center">
                                                <Switch>
                                                    <Route path="/about">
                                                        <p class="text-light mb-1">For more information, check out my Github and Link... oh wait you're already here. Check above.</p>
                                                    </Route>
                                                    <Route path="/">
                                                        <p class="text-light mb-1">For more information, check out my Github and LinkedIn pages in the About Tab</p>
                                                    </Route>
                                                </Switch>
                                            </div>
                                        </div>
                                    </div>
                                </footer>
                            </div>
                            <div class="row" id="footerSpace">
                            
                            </div>
                        </div>
                    </div>
                </div>
                </Router>
            </div>


    
        );
    }
}

export default Boot;