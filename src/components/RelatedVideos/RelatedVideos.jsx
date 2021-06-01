import React from 'react';

function RelatedVideos (props) {
  console.log(props)  
  return (
        <div className="section">
          {props.related_videos.items.map(item => (
              <tr>
                <td>{item.snippet.thumbnails.default.url}</td>
                <td>{item.snippet.title}</td>
            </tr>
          ))}
        </div>
      );
    }

export default RelatedVideos;