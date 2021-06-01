import React from 'react';

function RelatedVideos (props) {
  console.log("relatedvideos recieved", props.related_videos)  
  return (
    <div>
    {props.related_videos.items.map(item => (
        <div className="card mb-3" style={{"maxWidth":"550px", "maxHeight":"100px"}} >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={item.snippet.thumbnails.default.url} alt={item.snippet.title} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.snippet.title}</h5>
                    </div>
                </div>
            </div>
        </div>    
            ))}
    </div>
      );
    }

export default RelatedVideos;