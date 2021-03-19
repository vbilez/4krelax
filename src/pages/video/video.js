import React from 'react'

const Video = (props) => {

var myvideo;
        props.plst.forEach(element => {
            element.videos.forEach(video => {
            if(video.id==props.match.params.id)
            {
                myvideo=video;
            }
        });
        });
        var source;
        var title;
        source=myvideo.src;
        title=myvideo.name;
    return (
        
        <div>
       <div id="video_container">
        <iframe className="black_back" src={source} width="100%" height="532.125" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen="" title={title} __idm_id__="819894273" data-ready="true"></iframe>
    </div>
    <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
    )
}

export default Video;