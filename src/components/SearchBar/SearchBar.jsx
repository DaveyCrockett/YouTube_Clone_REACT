import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search_query: '',       
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const search_query = this.state.search_query
        this.props.searchSongs(search_query);
        this.setState({
            search_term: ''
        })
    }

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='search_query' value={this.state.search_query} onChange={this.handleChange} placeholder='Enter Search' />
                <input type='submit' value='Search' />
            </form>
         );
    }
}
 
export default SearchBar;