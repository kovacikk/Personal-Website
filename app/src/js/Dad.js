import React, { Component } from 'react';
import '../css/Dad.css';
import { useHistory } from 'react-router-dom';

class Dad extends Component {
    constructor(props) {
        super(props);
        this.canRef = React.createRef();
        this.state = {
            b1: false,
            b2: false,
            dChip: false,
            qChip: false,
            guacWin: false,
            chips: 0,
            chipsMod: 1,
            chipX: 350 - 50,
            chipY: 350 - 50,
            gravity: 0.8,
            drag: 0.2,
            lift: -2,
            speed: 1,
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
                x: Math.max(Math.min(this.state.bird.x + newX_V, this.canRef.current.width - this.state.bird.radius),this.state.bird.radius),
                y: Math.max(Math.min(
                    this.state.bird.y + newV, this.canRef.current.height - this.state.bird.radius),this.state.bird.radius),
                    x_velocity: newX_V, y_velocity: newV,
                    radius: 20
            }
        });

        var chipCoord = {x: this.state.chipX, y: this.state.chipY, width: 50, height: 50}
        var playerCoord = {x: this.state.bird.x - this.state.bird.radius, y: this.state.bird.y - this.state.bird.radius, width: this.state.bird.radius * 2, height: this.state.bird.radius * 2}

        if (this.checkChipCollision(chipCoord, playerCoord)) {
            this.setState({
                chips: this.state.chips + (1 * this.state.chipsMod)
            })
            this.randomizeChip();
        }

        this.checkPurchases();
    }

    checkPurchases = () => {
        if (!this.state.b1) {
            if (this.state.chips >= 10) {
                document.getElementById("b1").style.backgroundColor = "green";
            }else {
                document.getElementById("b1").style.backgroundColor = "rgb(137, 137, 212)";
            }
        }

        if (!this.state.b2) {
            if (this.state.chips >= 30 && this.state.b1) {
                document.getElementById("b2").style.backgroundColor = "green";
            }else {
                document.getElementById("b2").style.backgroundColor = "rgb(137, 137, 212)";
            }
        }

        if (!this.state.dChip) {
            if (this.state.chips >= 30) {
                document.getElementById("dChip").style.backgroundColor = "green";
            }else {
                document.getElementById("dChip").style.backgroundColor = "rgb(137, 137, 212)";
            }
        }

        if (!this.state.qChip) {
            if (this.state.chips >= 60 && this.state.dChip) {
                document.getElementById("qChip").style.backgroundColor = "green";
            }else {
                document.getElementById("qChip").style.backgroundColor = "rgb(137, 137, 212)";
            }
        }

        if (!this.state.guacWin) {
            if (this.state.chips >= 200) {
                document.getElementById("guacWin").style.backgroundColor = "green";
            }else {
                document.getElementById("guacWin").style.backgroundColor = "rgb(137, 137, 212)";
            }
        }
    }

    checkChipCollision = (rect1, rect2) => {

        if (rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.y + rect1.height > rect2.y) {
            
            return true;
         }
        return false;
    }

    randomizeChip = () => {
        var maxWidth = this.canRef.current.width;
        var maxHeight = this.canRef.current.height;

        do {
            var x = Math.floor(Math.random()*(maxWidth - 50));
            var y = Math.floor(Math.random()* (maxHeight - 50));

            var rect1 = {x: x, y: y, width: 50, height: 50}
            var rect2 = {x: this.state.bird.x - this.state.bird.radius, y: this.state.bird.y - this.state.bird.radius, width: this.state.bird.radius * 2, height: this.state.bird.radius * 2}
    
        } while (this.checkChipCollision(rect1, rect2));
        this.setState({
            chipX: x,
            chipY: y,
        })
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

        var image = document.getElementById("chip");
        ctx.drawImage(image, this.state.chipX, this.state.chipY, 50, 50);
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
            e.preventDefault();
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

    timeout = 0;


    componentWillUnmount() {
        clearInterval(this.timeout);
    }

    startGame = () => {
        document.getElementById("startMessage").style.display = "none";
        document.getElementById("gameScreen").style.display = "block";
        
        this.timeout = setInterval( () => {
            this.update();
            this.draw();
        }, 1000 / 60);

        document.addEventListener("keydown", this.keyDownHandler, false);
        document.addEventListener("keyup", this.keyUpHandler, false);
    }

    //Shop Functions:
    b1Click = () => {
        if (this.state.chips >= 10) {
            if (this.state.speed < 1.5) {
                this.setState({
                    b1: true,
                    chips: this.state.chips - 10,
                    speed: 1.5,
                    lift: -3,
                });
            }
            document.getElementById("b1").innerHTML = "Purchased";
            document.getElementById("b1").style.backgroundColor = "grey";
        }
    }

    b2Click = () => {
        if (this.state.chips >= 30 && this.state.b1) {
            if (this.state.speed < 2.5) {
                this.setState({
                    b2: true,
                    chips: this.state.chips - 30,
                    speed: 2.5,
                    lift: -5,
                });
            }
            document.getElementById("b2").innerHTML = "Purchased";
            document.getElementById("b2").style.backgroundColor = "grey";
        }
    }

    dChipClick = () => {
        if (this.state.chips >= 30) {
            this.setState({
                dChip: true,
                chips: this.state.chips - 30,
                chipsMod: 2,
            });
            document.getElementById("dChip").innerHTML = "Purchased";
            document.getElementById("dChip").style.backgroundColor = "grey";
        }
    }

    qChipClick = () => {
        if (this.state.chips >= 60 && this.state.dChip) {
            this.setState({
                qChip: true,
                chips: this.state.chips - 60,
                chipsMod: 4,
            });
            document.getElementById("qChip").innerHTML = "Purchased";
            document.getElementById("qChip").style.backgroundColor = "grey";
        }
    }

    guacWinClick = () => {
        if (this.state.chips >= 200) {
            this.setState({
                guacWin: true,
                chips: this.state.chips - 200,
            });
            document.getElementById("guacWin").innerHTML = "Purchased";
            document.getElementById("guacWin").style.backgroundColor = "grey";

            window.location.href='/dadWin';
        }
    }

    render() {

        return (
            <div>
                <h2>Happy Father's Day!</h2>
                

                <div id="startMessage">
                    <p>Uh oh, I thought I had prepared everything to make this a great father's day, <br></br>but I forgot something really important!<br></br><br></br>
                    I prepared all this guacamole, but forgot to buy chips!!!
                    </p>
                    <img id="guac" src={require('../img/guac.jpg')}></img>
                    <p>
                        I'm gonna need your help to round up some chips<br></br>
                        Click Start to to begin collecting chips:
                    </p>
                    <a><button class="momButton" onClick={this.startGame}>Start</button></a>
                </div>
                
                <div id="gameScreen" style={{display: "none"}}>
                    <p id="chips">Chips: {this.state.chips}
                    <img id="chipper" src={require('../img/chip.png')}></img></p>
                    <div id="gameCont">
                        <div id="tips">
                           
                            <p>Use the arrow keys to move:</p>
                            
                            <p>Up to jump</p>
                                <img id="up" src={require('../img/keysUp.png')}></img>
                            
                            <p>Left and Right to move side to side</p>
                                <img id="side" src={require('../img/keysSide.png')}></img>

                        </div>
                        <div id="game">
                            
                                <canvas ref={this.canRef} width={350} height={350} />
                            
                        </div>
                        <div id="shop">
                            <div id="shopper">
                                <p class="shop">Shop</p>
                                
                                <p class="item">Speed Buff</p>
                                <button class="momButton" id="b1" onClick={this.b1Click}>10 Chips</button>

                                <p class="item">Speed Buff 2</p>
                                <button class="momButton" id="b2" onClick={this.b2Click}>30 Chips</button>

                                <p class="item">Double Chip</p>
                                <button class="momButton" id="dChip" onClick={this.dChipClick}>30 Chips</button>

                                <p class="item">Quadruple Chip</p>
                                <button class="momButton" id="qChip" onClick={this.qChipClick}>60 Chips</button>

                                <br></br>
                                <p class="item">Enjoy your Guac!!!</p>
                                <button class="momButton" id="guacWin" onClick={this.guacWinClick}>200 Chips</button>
                                
                            </div>
                        </div>
                    </div>
      
                    
                </div>
               
                
                <div id="images">
                    <img id="chip" style={{display: "none"}} src={require('../img/chip.png')}></img>
                </div>
            </div>
        );
    }
}

export default Dad;