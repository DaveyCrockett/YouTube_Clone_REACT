import React, { Component } from 'react';

class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            video_title: '',
            video_description: '',
        } 
     }
    render() { 
        return ( 
            <div>
                <iframe title={this.state.video_title} id="ytplayer" type="text/html" width="640" height="360"
                src={`https://www.youtube.com/embed/${this.props.video_id}`}
                frameBorder="0"></iframe>
                <h1>{this.state.video_title}</h1>
                <p>{this.state.video_description}</p>
            </div>
         );
    }
}
 
export default Video ;