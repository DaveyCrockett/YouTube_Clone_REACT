import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar/SearchBar';
import Video from './Video/Video';
import SearchResults from './SearchResults/SearchResults';
import RelatedVideos from './RelatedVideos/RelatedVideos'


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            search_results: null,
            selected_video_object: null,
            related_videos: null,
        }
    }

    async get_SearchResults(search_query) {
        try{
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${search_query}&key=${process.env.REACT_APP_API_KEY}`);
            this.setState({
                search_results: response.data,
                selected_video_object: null,
                related_videos: null,
            });
        } catch (er){
            console.log('ERROR in get_SearchResults', er)
        }

    }

    async getRelatedVideos(videoId) {
        try{
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&key=${process.env.REACT_APP_API_KEY}`)
            console.log(response)
            this.setState({related_videos: response.data})
        } catch (er){
            console.log('ERROR in getRelatedVideos', er)
        }
    }

    async select_video(video_object) {
        await this.getRelatedVideos(video_object.id.videoId)
        this.setState({
            search_results: null,
            selected_video_object: video_object,
        })
        console.log('search',this.state.search_results)
        console.log('selected',this.state.selected_video_object)
        console.log('related',this.state.related_videos)
    }

    render() {
        return (
            <div>
                <h1>Our React App Using a Component</h1>          
                <SearchBar get_SearchResults={this.get_SearchResults.bind(this)} />
                
                {this.state.search_results != null &&
                    <SearchResults search_results={this.state.search_results} select_video={this.select_video.bind(this)} />
                }
                {this.state.selected_video_object != null &&
                    <div>
                        <Video video_object={this.state.selected_video_object} />
                        <RelatedVideos related_videos={this.state.related_videos} select_video={this.select_video.bind(this)} />
                    </div>
                }
            </div>
        );
    }
}

export default App;