import React from 'react';

function SearchResults(props){
    return (
        <tr>
            <td>{props.item.id.videoId}</td>
            <td>{props.item.snippet.title }</td>
        </tr>
    )
}

export default SearchResults;