import React, { Component } from 'react';
import '../css/Dad.css';

class Dad extends Component {
    constructor(props) {
        super(props);
        this.canRef = React.createRef();
        this.state = {
            gravity: 0.8,
            bird: {
                x: 50,
                y: 100,
                velocity: 0,
                radius: 20
            }
        }
    };

    update = () => {
        var newV = (this.state.bird.velocity + this.state.gravity) * 0.9;
        this.setState({
            bird: {
                x: 50,
                y: Math.max(Math.min(
                    this.state.bird.y + newV, this.canRef.current.height - this.state.bird.radius),0),
                    velocity: newV,
                    radius: 20
            }
        });
    }

    draw = () => {
        const ctx = this.canRef.current.getContext("2d");
        // change this colour to change the colour of your 
        // "pen" in the canvas 
        ctx.fillStyle = "white";
        ctx.fillRect(0,0,this.canRef.current.width, this.canRef.current.height);
        ctx.fillStyle = "green";
        ctx.beginPath();
        ctx.arc(this.state.bird.x, this.state.bird.y,                        
                this.state.bird.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }

    componentDidMount() {
        setInterval( () => {
            this.update();
            this.draw();
        }, 1000 / 60);
    }

    render() {

        return (
            <div>
                <h2>Happy Father's Day!</h2>
                
			    <p>I hope you have a great Father's Day,</p>
                <p>Just don't get too excited and wear out your stay</p>

                <div id="game">
                    <canvas ref={this.canRef} width={450} height={650} />
                </div>       

                <p id="endcard">Happy Father's Day from Kyle</p>
            </div>
        );
    }
}

export default Dad;