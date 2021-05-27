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
                <iframe title={this.props.video_object.snippet.title} id="ytplayer" type="text/html" width="640" height="360"
                src={`https://www.youtube.com/embed/${this.props.video_object.id.videoId}`}
                frameBorder="0"></iframe>
                <h1>{this.props.video_object.snippet.title}</h1>
                <p>{this.props.video_object.snippet.description}</p>
            </div>
         );
    }
}
 
export default Video ;