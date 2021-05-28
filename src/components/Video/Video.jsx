import React, { Component } from 'react';

function Video(props){
        return ( 
            <div>
                <iframe title={props.video_object.snippet.title} id="ytplayer" type="text/html" width="640" height="360"
                src={`https://www.youtube.com/embed/${props.video_object.id.videoId}`}
                frameBorder="0"></iframe>
                <h1>{props.video_object.snippet.title}</h1>
                <p>{props.video_object.snippet.description}</p>
            </div>
         );
    }
 
export default Video ;