import React from 'react';

function SearchResults(props){
    return (
        <tr>
            <td>{props.item.id.videoId}</td>
        </tr>
    )
}

export default SearchResults;