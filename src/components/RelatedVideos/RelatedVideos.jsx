import React from 'react';

function RelatedVideos (props) { 
  return (
    <div>
    {props.related_videos.items.map(item => <RelatedItem key={item.id.videoId} item={item} select_video={props.select_video.bind(this)} />)}
    </div>
      );
    }

function RelatedItem (props) {
    const item = props.item
    return (
        <div className="card mb-3" style={{"maxWidth":"550px", "maxHeight":"100px"}} onClick={() => props.select_video(item)} >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={item.snippet.thumbnails.default.url} alt={item.snippet.title} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h6 className="card-title">{item.snippet.title}</h6>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default RelatedVideos;