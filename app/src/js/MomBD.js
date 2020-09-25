import React, { Component } from 'react';
import '../css/MomBD.css';

const delay = ms => new Promise(res => setTimeout(res, ms));

class MomBD extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rotation1: 0,
            rotation2: 0,
            rotation3: 0,
            isWin: "carousel__cell",
            spinning: false
        }
    };

    selectedIndex = 0;
    cellCount = 9;

    isHorizontal = true;
    rotateFN = this.isHorizontal ? 'rotateY' : 'rotateX';

    cellHeight = 0
    cellWidth = 0
    cellSize = 0
    radius = 0

    updateHeight = (carousel) => {
        this.cellHeight = carousel.offsetHeight;
        this.cellWidth = carousel.offsetWidth;
        this.cellSize = this.isHorizontal ? this.cellWidth : this.cellHeight;
        this.radius = Math.round( ( this.cellSize / 2) / Math.tan( Math.PI / this.cellCount ) );
    }


    rotateNext = () => {
        this.selectedIndex++;
        var angle = this.selectedIndex / this.cellCount * -360;
        this.setState({
            rotation1: angle
        })
    }

    rotatePrev = () => {
        this.selectedIndex--;
        var angle = this.selectedIndex / this.cellCount * -360;
        this.setState({
            rotation1: angle
        })
    }

    spin = () => {
        if (!this.state.spinning) {
            var index1 = Math.floor(Math.random() * (9) + 1)
            var index2 = Math.floor(Math.random() * (9) + 1)
            var index3 = Math.floor(Math.random() * (9) + 1)

            var angle1 = index1 / this.cellCount * -360 - 360 * 10;
            var angle2 = index2 / this.cellCount * -360 - 360 * 20;
            var angle3 = index3 / this.cellCount * -360 - 360 * 40;

            console.log(angle1)

            this.setState({
                rotation1: this.state.rotation1 + angle1,
                rotation2: this.state.rotation2 + angle2,
                rotation3: this.state.rotation3 + angle3,
                spinning: true
            })
        }
    }

    async componentDidUpdate() {
        console.log("update")
        console.log(this.state.rotation1, this.state.rotation2, this.state.rotation3)

        if (this.state.spinning) {
            document.getElementById("spin").style.backgroundColor = '#555';
            await delay(5300);
            this.setState({
                spinning: false
            })
        }else {
            document.getElementById("spin").style.backgroundColor = 'red';
            if ((this.state.rotation1 % 360) == (this.state.rotation2 % 360) && (this.state.rotation2 % 360) == (this.state.rotation3 % 360) && this.state.isWin == "carousel__cell") {
                this.setState({
                    isWin: "carousel__cell__win"
                })
    
                var carousel1 = document.getElementById("carousel1").querySelectorAll("." + this.state.isWin);
                for (var i = 0; i < carousel1.length; i++) {
                    carousel1[i].innerHTML = "W";
                }
                var carousel2 = document.getElementById("carousel2").querySelectorAll("." + this.state.isWin);
                for (var i = 0; i < carousel2.length; i++) {
                    carousel2[i].innerHTML = "I";
                }
                var carousel3 = document.getElementById("carousel3").querySelectorAll("." + this.state.isWin);
                for (var i = 0; i < carousel3.length; i++) {
                    carousel3[i].innerHTML = "N";
                }

                await delay(2000);

                document.getElementById("hidden").style.display = "block";

    
            }else if ((this.state.rotation1 % 360) == (this.state.rotation2 % 360) && (this.state.rotation2 % 360) == (this.state.rotation3 % 360) && this.state.isWin == "carousel__cell__win") {
                //Do Nothing
            }else if(this.state.isWin == "carousel__cell__win") {
                this.setState({
                    isWin: "carousel__cell"
                })
            }
        }
    }

    render() {
        return (
            <div id="mainBd">
                <h3>Mom Birthday</h3>
			    <p>Happy Birthday Mom!</p>
                <br></br>
                <div id="poem">
                <p>In a time of joy and splendor <br/> why not play a quick game of slots?</p>
                <p>You can win big and maybe <br/> even win a huge cheese wheel of motz!</p>
                </div>
                <br></br>
                <p>Enjoy your mozzarella cheese with a game of slots: <br/> Maybe you can even get a win???</p>
                <br></br>

                <div id="slots">
                   
                    <table>
                        <tr>
                            <td className="scene">
                            <div className="carousel" id="carousel1" style={ { transform: 'translateZ(-150px) rotateX(' + this.state.rotation1 + 'deg)' }}>
                                <div className={this.state.isWin}>1</div>
                                <div className={this.state.isWin}>2</div>
                                <div className={this.state.isWin}>3</div>
                                <div className={this.state.isWin}>4</div>
                                <div className={this.state.isWin}>5</div>
                                <div className={this.state.isWin}>6</div>
                                <div className={this.state.isWin}>7</div>
                                <div className={this.state.isWin}>8</div>
                                <div className={this.state.isWin}>9</div>
                            </div>
                            </td>
                            <td className="scene">
                            <div className="carousel" id="carousel2" style={ { transform: 'translateZ(-150px) rotateX(' + this.state.rotation2 + 'deg)' }}>
                                <div className={this.state.isWin}>1</div>
                                <div className={this.state.isWin}>2</div>
                                <div className={this.state.isWin}>3</div>
                                <div className={this.state.isWin}>4</div>
                                <div className={this.state.isWin}>5</div>
                                <div className={this.state.isWin}>6</div>
                                <div className={this.state.isWin}>7</div>
                                <div className={this.state.isWin}>8</div>
                                <div className={this.state.isWin}>9</div>
                            </div>
                            </td>
                            <td className="scene">
                            <div className="carousel" id="carousel3" style={ { transform: 'translateZ(-150px) rotateX(' + this.state.rotation3 + 'deg)' }}>
                                <div className={this.state.isWin}>1</div>
                                <div className={this.state.isWin}>2</div>
                                <div className={this.state.isWin}>3</div>
                                <div className={this.state.isWin}>4</div>
                                <div className={this.state.isWin}>5</div>
                                <div className={this.state.isWin}>6</div>
                                <div className={this.state.isWin}>7</div>
                                <div className={this.state.isWin}>8</div>
                                <div className={this.state.isWin}>9</div>
                            </div>
                            </td>
                        </tr>
                    </table>
            
                    {/*
                    <p>
                    <button className="previous-button" onClick={this.rotatePrev}>Previous</button>
                    <button className="next-button" onClick={this.rotateNext}>Next</button>
                    </p>
                    */}
                    <p id="hidden">
                        <img id="cheese" src={require('../img/cheese.jpg')}></img><img id="cheese" src={require('../img/cheese.jpg')}></img><img id="cheese" src={require('../img/cheese.jpg')}></img><img id="cheese" src={require('../img/cheese.jpg')}></img>
                    </p>
                    <p>
                        <a id="spin" onClick={this.spin}>SPIN</a>
                    </p>
                    <br></br>     

                </div>

                

            </div>
        );
    }
}

export default MomBD;