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
                    languages={"HTML, CSS, BootStrap, Python, Django, MySQL"}
                    description="BigBox was a group project of five where we created an odd job posting website targeted towards younger ages.
                        Users could create accounts and post job offers as well as accept other's offers. I primarily focused on the HTML, CSS, and Bootstrap 
                        elements of the site with some database querying."
                    link="https://github.com/kovacikk/BigBox"
                />
                <Project 
                    name={"Perceptron and Naive Bayes Project"}
                    languages={"Python"}
                    description="Using a movie review dataset, I created both the perceptron and naive bayes algorithms to generate models. Then, these models were used to
                        classify ratings for movies for users."
                    link="-1"
                />
                <Project 
                    name={"Chord Creator"}
                    languages={"HTML, CSS, JavaScript"}
                    description="Chord Creator is a website where you can specify certain criteria and musical chord progressions would be generated. It was built with Tone.js
                        to play the chord progressions."
                    link="https://github.com/kovacikk/Chord-Creator"
                />
                <Project 
                    name={"Strombot"}
                    languages={"Python"}
                    description="A discord bot written for my friends personal discord server. It mostly serves to post images and videos uploaded that are uploaded by users to a
                        google drive. Includes basic searching, music playback, and command statistic tracking."
                    link="https://github.com/kovacikk/stromBot"
                />
                <Project 
                    name={"PAC-VS"}
                    languages={"HTML, CSS, JavaScript, Python, Django"}
                    description="PAC-VS is an online versus game of Pacman where one player plays as Pacman and the other all four ghosts. It was built with a team of three in Django
                        with the game logic written in JavaScript. Used peer-to-peer connections between both players."
                    link="https://github.com/kovacikk/PAC-VS"
                />
                <Project 
                    name={"CS-251 Projects 1-4"}
                    languages={"Java"}
                    description="A collection of Projects that cover the implementation of common data structures. A Stack, an Infix Evaluator, HashTables, Quick Sort, and Graph Searching."
                    link="https://github.com/kovacikk/CS-251---Project-1 https://github.com/kovacikk/CS-251-Project-2 https://github.com/kovacikk/CS-251-Project-3 https://github.com/kovacikk/CS-251-Project-4"
                />

                
                
                <div class="row mt-3 mb-2">
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