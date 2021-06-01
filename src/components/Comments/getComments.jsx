import React, { Component } from 'react';
import axios from 'axios';

class Comments extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            comments: [],
        }
     }
    
    componentDidMount() {
        this.renderGetData();
    }
     
    renderGetData = async() => {
        try {
            let response = await axios.get('http://127.0.0.1:8000/comments/')
            // This is an object below. Want to use it in .map but it must be an array.
            this.setState({comments: response.data});
        } catch (err) {
            console.log(err);
        } 
    }

    render() {
        const CommentData = this.state.comments
        console.log(CommentData)
        const mapData = CommentData.map((comment, i) => (<td key={i}>{comment.comment}</td>));
        return (
            <tr>
                {mapData}
            </tr>
        );
    }

}

export default Comments;