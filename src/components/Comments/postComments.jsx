import React, { Component } from 'react';
import axios from 'axios';

class CommentsBar extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            comments: [],    
        }
     }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    
    async PostCommentData() {
        await axios.post('http://127.0.0.1:8000/comments/', {
            comments: this.state.comments.comment
        })
        .then(response => this.setState({
            comments: [...this.state.comments, response.data]
        }))
    }

    handleSubmit(event) {
        event.preventDefault()
        this.PostCommentData.bind(this)
            
    }

    render() { 
        return ( 
            <div>
                <h1>Commments</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type='text' name='comments' onChange={this.handleChange.bind(this)} placeholder='Enter Comment' />
                    <input type='submit' value='Submit comments' />
                </form>
            </div>
         );
    }
}
 
export default CommentsBar ;