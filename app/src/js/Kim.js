import React, { Component } from 'react';
import '../css/Kim.css';

class Kim extends Component {
    constructor(props) {
        super(props);
        this.state = {
           dad1clicked: false,
           dad1: <p></p>,
           dad2clicked: false,
           dad2: <p></p>,
           dad3clicked: false,
           dad3: <p></p>,
           dad4clicked: false,
           dad4: <p></p>,
           dad5clicked: false,
           dad5: <p></p>,
           dad6clicked: false,
           dad6: <p></p>,
           dad7clicked: false,
           dad7: <p></p>,
           dad8clicked: false,
           dad8: <p></p>,
           dad9clicked: false,
           dad9: <p></p>,
           dad10clicked: false,
           dad10: <p></p>,
        }
    };

    dad1click = () => {
        this.setState({
            dad1clicked: true
        });
    }
    dad2click = () => {
        this.setState({
            dad2clicked: true
        });
    }
    dad3click = () => {
        this.setState({
            dad3clicked: true
        });
    }
    dad4click = () => {
        this.setState({
            dad4clicked: true
        });
    }
    dad5click = () => {
        this.setState({
            dad5clicked: true
        });
    }
    dad6click = () => {
        this.setState({
            dad6clicked: true
        });
    }
    dad7click = () => {
        this.setState({
            dad7clicked: true
        });
    }
    dad8click = () => {
        this.setState({
            dad8clicked: true
        });
    }
    dad9click = () => {
        this.setState({
            dad9clicked: true
        });
    }
    dad10click = () => {
        this.setState({
            dad10clicked: true
        });
    }

   
    render() {

        if (this.state.dad1clicked) {
            this.dad1 = <video controls autoPlay>
                    <source src={require('../img/dadDame.mp4')} type="video/mp4"></source> 
                    </video>
        }
        else {
            this.dad1 = <img class="link" onClick={this.dad1click} src={require('../img/dad2_256.jpg')}></img>
        }
        if (this.state.dad2clicked) {
            this.dad2 = <video controls autoPlay>
                    <source src={require('../img/yourMomFinished.mp4')} type="video/mp4"></source> 
                    </video>
        }
        else {
            this.dad2 = <img class="link" onClick={this.dad2click} src={require('../img/mom2_256.jpg')}></img>
        }
        if (this.state.dad3clicked) {
            this.dad3 = <video controls autoPlay>
                    <source src={require('../img/harleyBigTime.mp4')} type="video/mp4"></source> 
                    </video>
        }
        else {
            this.dad3 = <img class="link" onClick={this.dad3click} src={require('../img/harley256.jpg')}></img>
        }
        if (this.state.dad4clicked) {
            this.dad4 = <video controls autoPlay>
                    <source src={require('../img/momLife.mp4')} type="video/mp4"></source> 
                    </video>
        }
        else {
            this.dad4 = <img class="link" onClick={this.dad4click} src={require('../img/mom256.jpg')}></img>
        }
        if (this.state.dad5clicked) {
            this.dad5 = <video controls autoPlay>
                    <source src={require('../img/fligFinished.mp4')} type="video/mp4"></source> 
                    </video>
        }
        else {
            this.dad5 = <img class="link" onClick={this.dad5click} src={require('../img/kim256.jpg')}></img>
        }
        if (this.state.dad6clicked) {
            this.dad6 = <video controls autoPlay>
                    <source src={require('../img/yourDad.mp4')} type="video/mp4"></source> 
                    </video>
        }
        else {
            this.dad6 = <img class="link" onClick={this.dad6click} src={require('../img/dad256.jpg')}></img>
        }
        if (this.state.dad7clicked) {
            this.dad7 = <video controls autoPlay>
                    <source src={require('../img/yourDogFinished.mp4')} type="video/mp4"></source> 
                    </video>
        }
        else {
            this.dad7 = <img class="link" onClick={this.dad7click} src={require('../img/harley256.jpg')}></img>
        }
        if (this.state.dad8clicked) {
            this.dad8 = <video controls autoPlay>
                    <source src={require('../img/dadOcean.mp4')} type="video/mp4"></source> 
                    </video>
        }
        else {
            this.dad8 = <img class="link" onClick={this.dad8click} src={require('../img/dad256.jpg')}></img>
        }
        if (this.state.dad9clicked) {
            this.dad9 = <video controls autoPlay>
                    <source src={require('../img/yourYouFinished.mp4')} type="video/mp4"></source> 
                    </video>
        }
        else {
            this.dad9 = <img class="link" onClick={this.dad9click} src={require('../img/kim256.jpg')}></img>
        }
        if (this.state.dad10clicked) {
            this.dad10 = <video controls autoPlay>
                    <source src={require('../img/dadNuma.mp4')} type="video/mp4"></source> 
                    </video>
        }
        else {
            this.dad10 = <img class="link" onClick={this.dad10click} src={require('../img/dad256.jpg')}></img>
        }
        
    

        return (
            <div>
                <h2>Happy Birthday Kim!!!!!</h2>
                <br></br>
			    <p>Another Birthday for Another Kim,<br></br> I hope your excited for an exciting night.</p>
                <br></br>
                <p>I rounded up a couple of your family members,<br></br> who will all start this party right!!!!</p>

                <br></br>
                <p>Click on the images of the members below for a special message from them:</p>  



                <table>
                    <tr>
                        <th>
                            {this.dad1}
                        </th>
                        <th>
                            {this.dad2}
                        </th>
                        <th>
                            {this.dad3}
                        </th>
                    </tr>
                    <tr>
                        <th>
                            {this.dad4}
                        </th>
                        <th>
                            {this.dad5}
                        </th>
                        <th>
                            {this.dad6}
                        </th>
                    </tr>
                    <tr>
                        <th>
                            {this.dad7}
                        </th>
                        <th>
                            {this.dad8}
                        </th>
                        <th>
                            {this.dad9}
                        </th>
                    </tr>
                </table>
                
                <p>Bonus Dad (Personal Favorite):</p>
            <table><tr><th>{this.dad10}</th></tr></table>
            
            </div>
        );
    }
}


export default Kim;