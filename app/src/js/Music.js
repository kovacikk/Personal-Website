import React, { Component } from 'react';
import '../css/Music.css';

class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: '',
        }
    };

    render() {

        return (
            <div>
                <h3>Music Time!</h3>
                <div id="contents">
                    <h4>Famous sniff album by 7/11 Scurvy Execution:</h4>
                    <a class="musicLink" href="https://711scurvyexecution.bandcamp.com/">https://711scurvyexecution.bandcamp.com/</a>
                    <div id="iframe">
                        <iframe src="https://711scurvyexecution.bandcamp.com/"></iframe>
                    </div>
                </div>
            </div>
        );
    }
}

export default Music;