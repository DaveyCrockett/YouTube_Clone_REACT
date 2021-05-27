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
            selected_video_object: null,
        }
    }

    async get_SearchResults(search_query) {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${search_query}&key=${process.env.REACT_APP_API_KEY}`)
        this.setState({
            search_results: response.data,
            selected_video_object: null,
        })
     }
     
    renderSearchResults(){
        return (
            this.state.search_results.items.map((item) =>
            <SearchResults item={item} select_video={this.select_video.bind(this)} />
            )
        )
    }

    select_video(video_object){
        this.setState({
            search_results: null,
            selected_video_object: video_object,
        })
    }

    view_video(){
        <Video />
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
            {this.state.selected_video_object != null &&
            <Video video_object={this.state.selected_video_object} />
            }        
            </div>
        );
    }
}

export default App;