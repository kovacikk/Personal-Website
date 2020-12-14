import React, { Component } from 'react';
import '../css/DadBD.css';

class DadBD extends Component {
    constructor(props) {
        super(props);
        this.state = {
           video1clicked: false,
           video1: <p></p>,
           video2clicked: false,
           video2: <p></p>,
           video3clicked: false,
           video3: <p></p>,
           video4clicked: false,
           video4: <p></p>,
           video5clicked: false,
           video5: <p></p>,
           video6clicked: false,
           video6: <p></p>,
           video7clicked: false,
           video7: <p></p>,
           video8clicked: false,
           video8: <p></p>,
           video9clicked: false,
           video9: <p></p>,
           video10clicked: false,
           video10: <p></p>,
        }
    };

    video1click = () => {
        this.setState({
            video1clicked: true
        });
    }
    video2click = () => {
        this.setState({
            video2clicked: true
        });
    }
    video3click = () => {
        this.setState({
            video3clicked: true
        });
    }
    video4click = () => {
        this.setState({
            video4clicked: true
        });
    }
    video5click = () => {
        this.setState({
            video5clicked: true
        });
    }
    video6click = () => {
        this.setState({
            video6clicked: true
        });
    }
    video7click = () => {
        this.setState({
            video7clicked: true
        });
    }
    video8click = () => {
        this.setState({
            video8clicked: true
        });
    }
    video9click = () => {
        this.setState({
            video9clicked: true
        });
    }
    video10click = () => {
        this.setState({
            video10clicked: true
        });
    }

   
    render() {

        if (this.state.video1clicked) {
            this.video1 = <video controls autoPlay>
                    <source src={require('../img/dadVideos/bobby.mp4')} type="video/mp4"></source> 
                    </video>
        }
        else {
            this.video1 = <img class="link" onClick={this.video1click} src={require('../img/dadVideos/bobby_axelrod_256.png')}></img>
        }
        if (this.state.video2clicked) {
            this.video2 = <video controls autoPlay>
                    <source src={require('../img/dadVideos/bosch.mp4')} type="video/mp4"></source> 
                    </video>
        }
        else {
            this.video2 = <img class="link" onClick={this.video2click} src={require('../img/dadVideos/bosch_256.png')}></img>
        }
        if (this.state.video3clicked) {
            this.video3 = <video controls autoPlay>
                    <source src={require('../img/dadVideos/saul.mp4')} type="video/mp4"></source> 
                    </video>
        }
        else {
            this.video3 = <img class="link" onClick={this.video3click} src={require('../img/dadVideos/saul_256.png')}></img>
        }
        if (this.state.video4clicked) {
            this.video4 = <video controls autoPlay>
                    <source src={require('../img/dadVideos/taryl.mp4')} type="video/mp4"></source> 
                    </video>
        }
        else {
            this.video4 = <img class="link" onClick={this.video4click} src={require('../img/dadVideos/taryl_dactl_256.png')}></img>
        }
        if (this.state.video5clicked) {
            this.video5 = <video controls autoPlay>
                    <source src={require('../img/dadVideos/walter.mp4')} type="video/mp4"></source> 
                    </video>
        }
        else {
            this.video5 = <img class="link" onClick={this.video5click} src={require('../img/dadVideos/walter_white_256.png')}></img>
        }
        
        
    

        return (
            <div>
                <h2>Happy Birthday Dad!!!!!!!</h2>
                <img src={require('../img/dadVideos/cake.jpg')}></img>

                <br></br>
			    <p>A birthday is only as exciting as there are people celebrating it,<br></br>So I rounded up some stars you might recognize to join this party pit.</p>
                <br></br>
                <p>From dramas to thrillers, they wish you a hoot,<br></br>and celebrating the night away so hard you'll say shoot!!</p>

                <br></br>
                <p>Click on the images of the TV Show Stars below for a special message from them:</p>  



                <table>
                    <tr>
    
                        <th>
                            {this.video1}
                        </th>
                        <th></th>
                        <th>
                            {this.video2}
                        </th>
                        <th></th>
                        <th>
                            {this.video3}
                        </th>
                        <th></th>
                    </tr>
                </table>
                <table>
                    <tr>
                        <th>

                        </th>
                        <th>
                            {this.video4}
                        </th>
                        <th>

                        </th>
                        <th>
                            {this.video5}
                        </th>
                        <th>

                        </th>
                    </tr>
                    
                </table>
                
                
            
            </div>
        );
    }
}


export default DadBD;