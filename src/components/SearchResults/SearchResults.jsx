import React from 'react';

function SearchResults(props){
    return (
        <div>
            <table>
                <tbody>
                {props.search_results.items.map(item => (
                <tr>
                    <td><img src={item.snippet.thumbnails.default.url} height={item.snippet.thumbnails.default.height} width={item.snippet.thumbnails.default.width} /></td>
                    <td>{item.snippet.title}</td>
                    <td><button type='button' onClick={() => props.select_video(item)}>test</button></td>
                </tr>
                ))}
                </tbody>
            </table>
        </div>

    )
}

export default SearchResults;