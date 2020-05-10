import React, { Component } from 'react';
import '../css/Mom.css';

class Mom extends Component {
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
                <h2>Happy Mother's Day!</h2>
                
			    <p>I hope you have a great Mother's Day,</p>
                <p>Just don't get too excited and wear out your stay</p>

                <div id="images">
                    <img id="mom" src={require('../img/mom.jpg')}></img>
                    <img id="mom2" src={require('../img/mom2.jpg')}></img>
                </div>
                <div id="momButtonC">
                    <button id="momButton" onClick={this.addExtra}>Add Mom</button>
                    <p id="click">Click Above ^</p>
                </div>

                <div id="childrenC">
                    {children}    
                </div>                

                <p id="endcard">Happy Mother's Day from Kyle</p>
            </div>
        );
    }
}

export default Mom;