import React, { Component } from 'react';
//import '../css/Serve.css';
const json = require('./projects.json')

class Serve extends Component {
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
        const response = await fetch('/server/');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);
        return body;
    };

    // Submit 
    handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch('/server/projects/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ post: this.state.post }),
        });
        // Wait for Promise to Resolve
        (await response).json().then(data => {
            console.log(data);

            
        })
        this.setState({ responseToPost: "got" });
      };

    render() {

        return (
            <div>
                <h3>Server Time!</h3>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type="text" 
                            value={this.state.post} 
                            onChange={e => this.setState({ post: e.target.value})}
                        ></input>
                        <button type="submit">Submit</button>
                    </form>
                    <p>{this.state.responseToPost}</p>
                <p>{this.state.response}</p>
            </div>
        );
    }
}

export default Serve;