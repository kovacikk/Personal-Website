import React, { Component } from 'react';
import '../css/Projects.css';
import Project from './Project.js'


// Main Project Body Class
class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    };

    render() {
        return (
            <div class="container text-dark">

                <div class="row mt-4 mb-4">
                    <div class="col-sm-7 col-md-5 col-lg-3">
                        <div class="card text-white bg-secondary">
                            <div class="card-body align-items-center d-flex justify-content-center p-1">
                                <h3>Projects</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <Project 
                    name={"Personal Website"} 
                    languages={"Node.js, React.js, HTML, CSS, MySQL, BootStrap"} 
                    description="This website you are on right now. This website is built to host information about myself while testing various web technologies.
                        Tests using node, react, and querying to a database as well as BootStrap to make everything look nice.t" 
                    link="https://github.com/kovacikk/Node-React-Test"
                />
                <Project 
                    name={"Mini Java Compiler"}
                    languages={"C, ARM Assembly, Lex, Yacc"}
                    description="A compiler written for a simpler specification of Java. It is written in C with lex and yacc and generates ARM assembly code
                        from Java code."
                    link="-1"
                />
                <Project 
                    name={"Xinu Project"}
                    languages={"C, AT&T Assembly"}
                    description="A project where I implemented core functions for the Xinu operating systems such as interrupt handling and context switching."
                    link="-1"
                />
                <Project 
                    name={"Shell Project"}
                    languages={"C, C++, Lex, Yacc"}
                    description="The Shell Project was a project where I created a complete shell using C, C++ and Lex and Yacc tools. The shell also has subshell, 
                        cursor movement, and other common features."
                    link="-1"
                />
                <Project 
                    name={"Model Filtering Project"}
                    languages={"Python"}
                    description="In this project, I created two different models for filtering and predicting food ratings. Built off a food dish rating dataset, 
                        one model used a memory-based collaborative filtering approach. Another model used a model-based filtering approach."
                    link="-1"
                />
                <Project 
                    name={"Malloc Project"}
                    languages={"C"}
                    description="A project where the malloc memory allocation program was implemented in C. Also, included memory error management."
                    link="-1"
                />
                <Project 
                    name={"BigBox"}
                    languages={"HTML, CSS BootStrap, Django, MySQL"}
                    description="BigBox was a group project of five where we created an odd job posting website targeted towards younger ages.
                        Users could create accounts and post job offers as well as accept other's offers. I primarily focused on the HTML, CSS, and Bootstrap 
                        elements of the site with some database querying."
                    link="https://github.com/kovacikk/BigBox"
                />
                <Project 
                    name={"Temp Project"}
                    languages={"c"}
                    description="very funny temp project"
                    link="-1"
                />
                <Project 
                    name={"Temp Project"}
                    languages={"c"}
                    description="very funny temp project"
                    link="-1"
                />

                
                
                <div class="row mt-2 mb-2">
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