import React, { Component } from 'react';
import '../css/Plot.css';

class Plot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: '',
        }
    };

    componentDidMount() {
        this.callServer().then(res => {
            this.setState({response: res.express});
        }).catch(err => console.log(err));
    }

    callServer = async () => {
        const response = await fetch('/plot');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);
        return body;
    };

    render() {

        return (
            <div>
                <h3>Python Time!</h3>
                <p>{this.state.response}</p>
                <img src={this.state.response}></img>
            </div>
        );
    }
}

export default Plot;