import React, { Component } from 'react';
import '../css/Forum.css';

class Forum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            responseToPost: [],
            bool: 1
        }
    };

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({behavior: "smooth"});
    }
    
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
        this.scrollToBottom();
      };

    updateChat = async e => {
        
        try { 
            
        const response = await fetch('/server/chatUpdate');
        const body = await response.json();

        this.setState({
            responseToPost: body
        });

        console.log(this.state.bool);
        if (this.state.bool) {
            this.scrollToBottom();
        }

        this.setState({bool: 0});
        }catch (e) {
            console.log(e);
        }
    }

    componentDidMount() {
        this.updateChat();
        this.interval = setInterval(this.updateChat, 5000);
    }

    

    render() {
        var chat = [];
        for (var i = 0; i < this.state.responseToPost.length; i++) {
            chat.push(<p class="message">{this.state.responseToPost[i]}</p>)
        }
        
        return (
            <div id="chatBody">
                <h3 id="forumText">Forum</h3>
                <div id="invisibleBox"></div>
                <div id="chatBox">
                    {chat}
                    <div style={{ float:"left", clear: "both" }}
                        ref={(el) => { this.messagesEnd = el; }}>
                    </div>
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