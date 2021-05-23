import React, { Component } from 'react';
//import '../css/About.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    };

    render() {
        return (
            
            <div class="container" style={{width: "50vw"}}>
                <div class="row">
                    <div class="col" style={{backgroundColor: "blue"}}>
                        <p>1</p>
                    </div>
                    <div class="col" style={{backgroundColor: "red"}}>
                        <p>2</p>
                    </div>
                    <div class="col" style={{backgroundColor: "green"}}>
                        <p>3</p>
                    </div>
                </div>
            </div>

        );
    }
}

export default About;