import React from 'react';

function SearchResults(props){
    return (
        <div>
        {props.search_results.items.map(item => (
            <div className="card mb-3" style={{"maxWidth":"950px"}}  >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} onClick={() => props.select_video(item)} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{item.snippet.title}</h5>
                            <p className="card-text">{item.snippet.description}</p>
                        </div>
                    </div>
                </div>
            </div>    
                ))}
        </div>
    )
}

export default SearchResults;