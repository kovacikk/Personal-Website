import React, { Component } from 'react';
import '../css/DadWin.css';

class DadWin extends Component {
    constructor(props) {
        super(props);
        this.state = {
           numChildren: 0
        }
    };

    addExtra = () => {
        this.setState({
            numChildren: this.state.numChildren + 1
        });
    }

    render() {
        const children = [];
        for (var i = 0; i < this.state.numChildren; i++) {

            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            var randomPosition = Math.floor(Math.random()*3);
            var position;
            if (randomPosition == 0) {
                position = "left";
            }else if (randomPosition == 1) {
                position = "center";
            }else {
                position = "right";
            }

            var styler = {
                color: "#" + randomColor,
                'text-align': position,
            }

            children.push(<p style={styler} class="extra">Happy Mother's Day!!!!</p>);
        };

        return (
            <div>
                <h2>You Won!!!</h2>
                
			    <p>Enjoy Your Guac!!!</p>

                <div id="images">
                    <img id="dad" src={require('../img/guac.jpg')}></img>
                    <img id="dad2" src={require('../img/chip.png')}></img>
                </div>         

                <p id="endcard">Happy Father's Day from Kyle</p>
            </div>
        );
    }
}

export default DadWin;