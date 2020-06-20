import React, { Component } from 'react';
import '../css/Dad.css';

class Dad extends Component {
    constructor(props) {
        super(props);
        this.canRef = React.createRef();
        this.state = {
            gravity: 0.8,
            drag: 0.2,
            lift: -5,
            speed: 2.5,
            bird: {
                x: 50,
                y: 100,
                x_velocity: 0,
                y_velocity: 0,
                radius: 20
            }
        }
    };

    updateKeyState = () => {
        var x_vel = this.state.bird.x_velocity;
        var y_vel = this.state.bird.y_velocity;

        if (this.keyPressed.jump) {
            y_vel = y_vel + this.state.lift;
        }
        if (this.keyPressed.left) {
            x_vel = x_vel - this.state.speed
        }
        if (this.keyPressed.right) {
            x_vel = x_vel + this.state.speed
        }

        this.setState({
            bird: {
                x: this.state.bird.x,
                y: this.state.bird.y,
                x_velocity: x_vel,
                y_velocity: y_vel,
                radius: this.state.bird.radius,
            }
        })
    }

    update = () => {
        this.updateKeyState();

        var newX_V = 0;
        if (this.state.bird.x_velocity > 0) {
            newX_V = Math.max(this.state.bird.x_velocity - this.state.drag, 0)
        }else {
            newX_V = Math.min(this.state.bird.x_velocity + this.state.drag, 0)
        }
        var newX_V = (newX_V * 0.9);
        var newV = (this.state.bird.y_velocity + this.state.gravity) * 0.9;
        this.setState({
            bird: {
                x: Math.max(Math.min(this.state.bird.x + newX_V, this.canRef.current.width - this.state.bird.radius),0),
                y: Math.max(Math.min(
                    this.state.bird.y + newV, this.canRef.current.height - this.state.bird.radius),0),
                    x_velocity: newX_V, y_velocity: newV,
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

    keyPressed = {
        right: false,
        left: false,
        jump: false,
    };

    keyDownHandler = (e) => {
        if (e.keyCode == 32) {
            this.keyPressed.jump = true;
        }else if (e.keyCode == 38) {
            this.keyPressed.jump = true;
        }else if (e.keyCode == 37) {
            this.keyPressed.left = true;
        }else if (e.keyCode == 39) {
            this.keyPressed.right = true;
        }
    }

    keyUpHandler = (e) => {
        if (e.keyCode == 32) {
            this.keyPressed.jump = false;
        }else if (e.keyCode == 38) {
            this.keyPressed.jump = false;
        }else if (e.keyCode == 37) {
            this.keyPressed.left = false;
        }else if (e.keyCode == 39) {
            this.keyPressed.right = false;
        }
    }

    componentDidMount() {
        setInterval( () => {
            this.update();
            this.draw();
        }, 1000 / 60);

        document.addEventListener("keydown", this.keyDownHandler, false);
        document.addEventListener("keyup", this.keyUpHandler, false);

        /*
        //Jump - Spacebar
        document.addEventListener("keydown", e => e.keyCode == 32 ? this.setState({
            bird: {
                x: this.state.bird.x,
                y: this.state.bird.y,
                x_velocity: this.state.bird.x_velocity,
                y_velocity: this.state.bird.y_velocity + this.state.lift,
                radius: 20
            }
            }) : null
        );

        //Left - Left Arrow Key
        document.addEventListener("keydown", e => e.keyCode == 37 ? this.setState({
            bird: {
                x: this.state.bird.x,
                y: this.state.bird.y,
                x_velocity: this.state.bird.x_velocity - this.state.speed,
                y_velocity: this.state.bird.y_velocity,
                radius: 20
            }
            }) : null
        );

        //Right - Right Arrow Key
        document.addEventListener("keydown", e => e.keyCode == 39 ? this.setState({
            bird: {
                x: this.state.bird.x,
                y: this.state.bird.y,
                x_velocity: this.state.bird.x_velocity + this.state.speed,
                y_velocity: this.state.bird.y_velocity,
                radius: 20
            }
            }) : null
        );
        */
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