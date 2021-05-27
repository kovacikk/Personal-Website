import React, { Component } from 'react';
import '../css/Music.css';
import chair from '../img/Chair.jpg';

class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: '',
        }
    };

    render() {

        return (
            <div class="container text-dark">
                <div class="row mt-4">
                    <div class="col-sm-7 col-md-5 col-lg-3">
                        <div class="card text-white bg-secondary">
                            <div class="card-body align-items-center d-flex justify-content-center p-1">
                                <h3>Music</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-4 m-2">
                    <div class="card bg-light">
                        <div class="card-body">
                            <p>
                                &emsp; While mostly for fun, this music section showcases any music I have created and released. I only have
                                one album created, Chair, but I plan to create more in the future. I use the Cubase DAW and any VSTs 
                                I can get my hands on. Feel free to head to my Bandcamp to give it a listen. I've already got a few half-finished
                                songs created, so a new release is in progress.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-sm-6 col-md-4 col-lg-2">
                        <div class="card text-white bg-dark">
                            <div class="card-body align-items-center d-flex justify-content-center pt-1 p-0">
                                <h5>Releases:</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-3 m-2">
                    <div class="card bg-light">
                        <div class="card-body p-1">
                            <div class="col-3 float-start mt-1 me-3 ms-0 mb-2 card bg-secondary">
                                    <div class="card-body p-1">
                                        <img class="img-fluid" id="chair" src={chair} alt="Picture of Kyle Kovacik"></img>
                                    </div>
                            </div>
                            <p class="mt-3">
                                Chair is the first album created by me under the name Strom Tunes. It hosts a variety of 
                                genres and sounds with 12 different songs.
                            </p>
                            <p class="mt-4">
                                Check it out with the link below:
                            </p>
                            <a href="https://stromtunes.bandcamp.com/releases" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-outline-dark">https://stromtunes.bandcamp.com/releases</button></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Music;