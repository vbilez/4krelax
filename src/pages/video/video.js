import React, { useState, useEffect } from 'react';
import sha1 from 'crypto-js/sha1';
const Video = (props) => {
//let videoinfo;
const [videoinfo, setVideoInfo] = useState({});
const [videoid, setVideoId] = useState(props.match.params.id);

const GetVideoData = async(data)=>{

    let queryString = "https://4krelax.bringstream.com/Engine/apic/apic.php?action=GetVideoInfo&openKey="+data.aOpenKey;
        let action="action=GetVideoInfo&openKey="+data.aOpenKey;
        let formData = new FormData();
        let jsonData =`{"id":${videoid},"fields":{"name":30,"duration":0,"pictures":[640,1920],"hdr":0}}`;
        let signature = sha1(action + data.aPrivateKey + jsonData);
        console.log("privatekey",data.aPrivateKey);
        formData.append('jsonData',jsonData);
        formData.append('signature',signature);
        await fetch(queryString, {
                mode:"cors",
                method:"POST",
                body:formData
        })
        .then((response) => {
            return response.json();
        })
        .then(data => 
            {console.log("data",data); setVideoInfo(data);return data;})
            .catch(error => {
            console.log("error", error);
        });
}
const GetVideoInfo = async()=>{


      const privateKey="~UniHash-767250902345~";
      let action = "action=LoginAnonymous";
      let endpoint = "https://4krelax.bringstream.com/Engine/apic/apic.php?";
      let queryString = "https://4krelax.bringstream.com/Engine/apic/apic.php?"+action;
      //const logindata ={"emailLogin":{"email":"dk@itf-ua.org","password":"&Px5foU7J[$g2[^"}};
      let formData = new FormData();
      let signature= sha1(action+privateKey+'{}')
      formData.append('jsonData','{}');
      formData.append('signature',signature);

      await fetch(queryString, {
        mode:"cors",
        method:"POST",
        body:formData
})
  .then((response) => {
    
    return response.json();
  })
  .then(data => 
    {

        GetVideoData(data);
        console.log("data",data);
        return data;
    }


    
  )
  .catch(error => {
    console.log("error", error);
  });
}
  useEffect(() => {
    setVideoInfo(GetVideoInfo());
  },videoid);


var myvideo;
console.log(props);
        props.plst[0].playlists.forEach(element => {
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