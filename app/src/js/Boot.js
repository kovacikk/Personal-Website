import React, { Component } from 'react';
import '../css/Boot.css';


class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    };

    render() {
        return (
            
            <div id="overall" class="container-fluid">
                <div class="row">
                    <div class="col-sm-4 col-md-3 col-lg-2 gy-5 gx-5" id="sidebar">
                        
                        <div class="row gx-1 p-3 text-light bg-dark sidebar">  
                            <a class="align-items-center text-light text-decoration-none" data-bs-toggle="collapse" href="#collapseSidebar" aria-expanded="true">
                                <span class="fs-4">Links</span>
                            </a>
                            <hr/>
                            
                            <ul class="nav nav-pills flex-column collapse show" id="collapseSidebar" aria-expanded="false">
                                <li class="nav-item">
                                <a href="#" class="nav-link active" aria-current="page">
                                    Home
                                </a>
                                </li>
                                <li>
                                <a href="#" class="nav-link text-light">
                                    Projects
                                </a>
                                </li>
                                <li>
                                <a href="#" class="nav-link text-light">
                                    Music
                                </a>
                                </li>
                                <li>
                                <a href="#" class="nav-link text-light">
                                    About
                                </a>
                                </li>
                                <hr/>
                            </ul>
                            
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
                                    <p>center</p>
                                    <p>d</p>
                                    <span>Pin a fixed-height footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS. Use the sticky footer with a fixed navbar if need be, too.</span>
                                    <span>Pin a fixed-height footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS. Use the sticky footer with a fixed navbar if need be, too.</span>
                                    <span>Pin a fixed-height footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS. Use the sticky footer with a fixed navbar if need be, too.</span>
                                    <span>Pin a fixed-height footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS. Use the sticky footer with a fixed navbar if need be, too.</span>
                                    <span>Pin a fixed-height footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS. Use the sticky footer with a fixed navbar if need be, too.</span>
                                    <span>Pin a fixed-height footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS. Use the sticky footer with a fixed navbar if need be, too.</span>
                                    <span>Pin a fixed-height footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS. Use the sticky footer with a fixed navbar if need be, too.</span>
                                    <span>Pin a fixed-height footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS. Use the sticky footer with a fixed navbar if need be, too.</span>
                                    <span>Pin a fixed-height footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS. Use the sticky footer with a fixed navbar if need be, too.</span>
                                    <hr/>
                                        <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            Link with href
                                        </a>
                                        <div class="collapse" id="collapseExample">
                                        <div class="card card-body">
                                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                        </div>
                                        </div>

                                    <hr/>



                                </div>
                            </div>
                            <div class="row" id="spacer">

                            </div>
                            <div class="row mt-auto mb-2" id="footer">
                                <footer class="footer mt-auto py-3 bg-dark gy-5" id="footer">
                                    <div class="container-fluid">
                                        <div class="row bottom-align-text">
                                            <div class="col" align="center">
                                                <p class="text-light mb-1">For more information, check out my Github and LinkedIn pages in the About Tab</p>
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
                
            </div>


    
        );
    }
}

export default About;