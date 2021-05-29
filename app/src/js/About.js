/*
    About.js
    - Content Body of About Tab
*/

import React, { Component } from 'react';
import me from '../img/Kyle_Kovacik.jpg';

class About extends Component {
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
                                <h3>About</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-4 m-2">
                    <div class="col">
                        <div class="card bg-light">
                        <div class="card-body">
                                <div class="col-3 float-end mt-0 me-0 ms-3 mb-2 card bg-secondary">
                                    <div class="card-body p-1">
                                        <img class="img-fluid" id="me" src={me} alt="Picture of Kyle Kovacik"></img>
                                    </div>
                                </div>
                                    <p>
                                        &emsp; My name is Kyle Kovacik and I am a graduate of Purdue West Lafayette with a major in Computer Science 
                                        and a minor in Mathematics. I've primarily had an interest in Machine Learning, but have branched out and
                                        found interests in many of the other fields as well. In addition, I have also started to dabble a bit in music 
                                        production for a bit of fun.
                                    </p>
                                    <p class="mt-4">
                                        You can find my Github link below:
                                    </p>
                                        <a href="https://github.com/kovacikk" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-outline-dark">https://github.com/kovacikk</button></a>
                                    <p class="mt-3">
                                        As well as my LinkedIn Profile too:
                                    </p>
                                        <a href="https://www.linkedin.com/in/kyle-kovacik-078977149/" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-outline-dark">https://www.linkedin.com/in/kyle-kovacik-078977149/</button></a>
                            </div>
                    </div>
                    
                </div>
                </div>
            </div>
            
        );
    }
}

export default About;