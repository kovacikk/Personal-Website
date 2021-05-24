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
            
            <div id="overall" class="bg-secondary">
                <div class="row">
                    <div class="col-2" id="sidebar" style={{backgroundColor: "red"}}>
                        <p>sidebar</p>
                        <div>
                            <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
                            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                <svg class="bi me-2" width="40" height="32"><use href="#bootstrap"/></svg>
                                <span class="fs-4">Sidebar</span>
                            </a>
                            <hr/>
                            <ul class="nav nav-pills flex-column mb-auto">
                                <li class="nav-item">
                                <a href="#" class="nav-link active" aria-current="page">
                                    <svg class="bi me-2" width="16" height="16"><use href="#home"/></svg>
                                    Home
                                </a>
                                </li>
                                <li>
                                <a href="#" class="nav-link text-white">
                                    <svg class="bi me-2" width="16" height="16"><use href="#speedometer2"/></svg>
                                    Dashboard
                                </a>
                                </li>
                                <li>
                                <a href="#" class="nav-link text-white">
                                    <svg class="bi me-2" width="16" height="16"><use href="#table"/></svg>
                                    Orders
                                </a>
                                </li>
                                <li>
                                <a href="#" class="nav-link text-white">
                                    <svg class="bi me-2" width="16" height="16"><use href="#grid"/></svg>
                                    Products
                                </a>
                                </li>
                                <li>
                                <a href="#" class="nav-link text-white">
                                    <svg class="bi me-2" width="16" height="16"><use href="#people-circle"/></svg>
                                    Customers
                                </a>
                                </li>
                            </ul>
                            <hr/>
                            <div class="dropdown">
                                <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2"/>
                                <strong>mdo</strong>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                                <li><a class="dropdown-item" href="#">New project...</a></li>
                                <li><a class="dropdown-item" href="#">Settings</a></li>
                                <li><a class="dropdown-item" href="#">Profile</a></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><a class="dropdown-item" href="#">Sign out</a></li>
                                </ul>
                            </div>
                        </div>
                        </div>




                    </div>
                    <div class="col" id="center">
                        <div class="container">
                            <div class="row align-items-start" id="header" style={{backgroundColor: "blue"}}>
                                <nav class="navbar navbar-expand navbar-dark bg-dark">
                                    <div class="container-fluid">
                                            <div class="collapse navbar-collapse justify-content-md-center">
                                                <ul class="navbar-nav">
                                                    <li class="nav-item">
                                                        <h2><a class="nav-link active" href="/">Kyle Kovacik</a></h2>
                                                    </li>
                                                </ul>
                                            </div>
                                    </div>
                                </nav>
                            </div>
                            <div class="row align-items-center" id="content">
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
                            <div class="row align-items-end" id="footer" style={{backgroundColor: "gray"}}>
                                <footer class="footer mt-auto py-3 bg-dark" id="footer">
                                    <div class="container-fluid">
                                        <div class="row">
                                            <p class="text-white bg-dark">Footer</p>
                                        </div>
                                    </div>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>


    
        );
    }
}

export default About;