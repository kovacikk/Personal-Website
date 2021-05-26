import React, { Component } from 'react';
import '../css/Projects.css';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    };

    render() {
        return (
            <div class="container text-dark">

                <div class="row mt-4">
                    <div class="col-sm-7 col-md-5 col-lg-3">
                        <div class="card text-white bg-secondary">
                            <div class="card-body align-items-center d-flex justify-content-center p-1">
                                <h3>Projects</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-4 m-2">
                    <div class="card bg-light">
                        <div class="card-body">
                            <p>
                                <a class="align-items-center text-dark text-decoration-none" data-bs-toggle="collapse" href="#personal-website-collapse" aria-expanded="true">
                                    <span class="fs-4">Personal Website</span><p>- Node.js, React.js, HTML, CSS, MySQL, BootStrap</p>
                                </a>
                            </p>
                            <div class="collapse show" id="personal-website-collapse">
                                <div class="card card-body">
                                    <p>
                                        This website you are on right now. This website is built to host information about myself while testing various web technologies.
                                        Tests using node, react, and querying to a database as well as BootStrap to make everything look nice.
                                    </p>
                                    <a href="https://github.com/kovacikk/Node-React-Test" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-outline-dark">https://github.com/kovacikk/Node-React-Test</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-2 m-2">
                    <div class="card bg-light">
                        <div class="card-body">
                            <p>
                                <a class="align-items-center text-dark text-decoration-none" data-bs-toggle="collapse" href="#collapseSidebar" aria-expanded="true">
                                    <span class="fs-4">Mini Java Compiler</span><p>- C, ARM Assembly, Lex, Yacc</p>
                                </a>
                            </p>
                            <div class="collapse show" id="collapseExample">
                                <div class="card card-body pb-0">
                                    <p>
                                        A compiler written for a simpler specification of Java. It is written in C with lex and yacc and generates ARM assembly code
                                        from Java code.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-2 m-2">
                    <div class="card bg-light">
                        <div class="card-body">
                            <p>
                                <a class="align-items-center text-dark text-decoration-none" data-bs-toggle="collapse" href="#collapseSidebar" aria-expanded="true">
                                    <span class="fs-4">Xinu Project</span><p>- C, AT&T Assembly</p>
                                </a>
                            </p>
                            <div class="collapse show" id="collapseExample">
                                <div class="card card-body pb-0">
                                    <p>
                                        A project where I implemented core functions for the Xinu operating systems such as interrupt handling and context switching.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-2 m-2">
                    <div class="card bg-light">
                        <div class="card-body">
                            <p>
                                <a class="align-items-center text-dark text-decoration-none" data-bs-toggle="collapse" href="#collapseSidebar" aria-expanded="true">
                                    <span class="fs-4">Shell Project</span><p>- C, C++, Lex, Yacc</p>
                                </a>
                            </p>
                            <div class="collapse show" id="collapseExample">
                                <div class="card card-body pb-0">
                                    <p>
                                        The Shell Project was a project where I created a complete shell using C, C++ and Lex and Yacc tools. The shell also has subshell, 
                                        cursor movement, and other common features.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-2 m-2">
                    <div class="card bg-light">
                        <div class="card-body">
                            <p>
                                <a class="align-items-center text-dark text-decoration-none" data-bs-toggle="collapse" href="#collapseSidebar" aria-expanded="true">
                                    <span class="fs-4">Model Filtering Project</span><p>- Python</p>
                                </a>
                            </p>
                            <div class="collapse show" id="collapseExample">
                                <div class="card card-body">
                                    <p>
                                        In this project, I created two different models for filtering and predicting food ratings. Built off a food dish rating dataset, 
                                        one model used a memory-based collaborative filtering approach. Another model used a model-based filtering approach.
                                    </p>
                                    <a href="https://github.com/kovacikk/CS473-Project-2" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-outline-dark">https://github.com/kovacikk/CS473-Project-2</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-4 mb-2">
                    <div class="col-sm-7 col-md-5 col-lg-3">
                        <div class="card text-white bg-secondary">
                            <div class="card-body align-items-center d-flex justify-content-center p-1">
                                <a class="text-decoration-none text-light" href="#overall"><h3>Back to Top</h3></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;