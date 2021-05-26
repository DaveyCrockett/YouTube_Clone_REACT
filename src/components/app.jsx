import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar'
import Video from './Video/Video'

class App extends Component {
    state = {

     }

    render() {
        return (
            <div>


            <h1>Our React App Using a Component</h1>
            <SearchBar />
            <Video />
            </div>
        );
    }
}

export default App;