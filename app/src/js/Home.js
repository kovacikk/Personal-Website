import React, { Component } from 'react';
import '../css/Home.css';

class Home extends Component {
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
                                <h3>Welcome</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-4 m-2">
                    <div class="card bg-light">
                        <div class="card-body">
                            &emsp; Hello, welcome to my website. This website is dedicated to me, Kyle Kovacik, as a way to showcase different projects, music, and ways to contact me.
                            Also, it serves as a good vehicle to test out different web technologies in a practical way. 
                        </div>
                    </div>
                </div>
                <div class="row mt-4 m-2 pt-2">
                    <div class="card bg-light">
                        <div class="card-body">
                            &emsp; Feel free to look around and enjoy your stay.
                        </div>
                    </div>
                        
                </div>
            </div>
        );
    }
}

export default Home;