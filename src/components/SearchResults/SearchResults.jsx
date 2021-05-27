import React from 'react';

function SearchResults(props){
    return (
        <tr>
            <td><img src={props.item.snippet.thumbnails.default.url} height={props.item.snippet.thumbnails.default.height} width={props.item.snippet.thumbnails.default.width} /></td>
            <td>{props.item.snippet.title}</td>
            <td><button type='button' onClick={() => props.select_video(props.item.id.videoId)}>test</button></td>
        </tr>
    )
}

export default SearchResults;