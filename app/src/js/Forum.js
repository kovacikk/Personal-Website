import React, { Component } from 'react';
import '../css/Forum.css';

class Forum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            responseToPost: []
        }
    };

    
    handleSubmit = async e => {
        e.preventDefault();
        const post = this.state.post;
        const response = await fetch('/server/chat/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ post: this.state.post }),
        });
        const body = await response.json();
        this.setState({ 
            responseToPost: body,
            post: ''
        });
      };


    

    render() {
        var chat = [];
        for (var i = 0; i < this.state.responseToPost.length; i++) {
            chat.push(<p>{this.state.responseToPost[i]}</p>)
        }
        return (
            <div id="chatBody">
                <h3 id="forumText">Forum</h3>
                <div id="invisibleBox"></div>
                <div id="chatBox">
                    {chat}
                </div>
				<form id="form" onSubmit={this.handleSubmit}>
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