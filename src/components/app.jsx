import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar/SearchBar';
import Video from './Video/Video';
import SearchResults from './SearchResults/SearchResults'


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            search_results: null,
        }
    }

    async get_SearchResults(search_query) {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search_query}&key=${process.env.REACT_APP_API_KEY}`)
        this.setState({
            search_results: response.data
        })
     }
     
    renderSearchResults(){
        return (
            this.state.search_results.items.map((item) =>
            <SearchResults item={item} />
            )
        )
    }

    render() {
        const renderSearchResults = this.renderSearchResults.bind(this);
        return (
            <div>
            
            <h1>Our React App Using a Component</h1>          
            <SearchBar get_SearchResults={this.get_SearchResults.bind(this)} />
            
            {this.state.search_results != null &&
            <table>
                <tbody>
                    {renderSearchResults()}
                </tbody>
            </table>
            }
            <Video />
            </div>
        );
    }
}

export default App;