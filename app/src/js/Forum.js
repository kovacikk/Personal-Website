import React, { Component } from 'react';
//import '../css/Forum.css';

class Forum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: '',
        }
    };

    
    handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch('/server/chat3/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ post: this.state.post }),
        });
        const body = await response.text();
        
        this.setState({ responseToPost: body });
      };


    render() {
        return (
            <div>
                <h3 id="forumText">Forum</h3>
                <p>{this.state.responseToPost}</p>
				<form onSubmit={this.handleSubmit}>
                        <input 
                            type="text" 
                            value={this.state.post} 
                            onChange={e => this.setState({ post: e.target.value})}
                        ></input>
                        <button type="submit">Submit</button>
                    </form>
            </div>
        );
    }
}

export default Forum;