import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import About from '../pages/about/about';
import Explore from '../pages/explore/explore4k';
import Video from '../pages/video/video';
import Playlists from '../pages/playlist/playlists';
import sha1 from 'crypto-js/sha1';
export default function Pl() {
    console.log(sha1("message").toString());

    const privateKey="~UniHash-767250902345~";
     let queryString = "https://4krelax.bringstream.com/Engine/apic/apic.php?action=LoginAnonymous";
      const logindata ={"emailLogin":{"email":"dk@itf-ua.org","password":"&Px5foU7J[$g2[^"}};
     let formData = new FormData();
formData.append('jsonData','{}');
formData.append('signature','376651b1b65bbdf9d286df54abea42e93bcf7d11');

     fetch(queryString, {
         mode:"cors",
         method:"POST",
         body:formData
})
  .then((response) => {

    return response.json();
  })
  .then(data => 
    {
         queryString = "//4krelax.bringstream.com/Engine/apic/apic.php?action=Multiple&openKey="+data.aOpenKey;
        let formData = new FormData();
        let jsonData =JSON.stringify({"general":1,"new":1,"favorites":1,"statistic":1,"count":10,"playlists_fields":{"id":0,"name":30,"description":50,"premium":0,"free":0,"duration":0,"pictures":[640,1920],"videos_count":0},"videos":{"count":10,"fields":{"id":0,"name":30,"duration":0,"hdr":0,"pictures":[600],"position":0}}});
        let signature = sha1(queryString + data.aPrivateKey + '{"general":1,"new":1,"favorites":1,"statistic":1,"count":10,"playlists_fields":{"id":0,"name":30,"description":50,"premium":0,"free":0,"duration":0,"pictures":[640,1920],"videos_count":0},"videos":{"count":10,"fields":{"id":0,"name":30,"duration":0,"hdr":0,"pictures":[600],"position":0}}}');
        console.log("privatekey",data.aPrivateKey);
        formData.append('jsonData',jsonData);
        formData.append('signature',signature);
        fetch(queryString, {
                mode:"cors",
                method:"POST",
                body:formData
        })
        .then((response) => {
            return response.json();
        })
        .then(data => 
            {console.log("data",data);})
            .catch(error => {
            console.log("error", error);
        });
        console.log("data",data);
    }
  )
  .catch(error => {
    console.log("error", error);
  });
     const plst = [
  {
    link: '/playlist/1',
    playlistname: 'New videos',
    videos:[
        {
            id: 1,
            link:'/video/1',
            name:'Sounds of the Pacific Ocean',
            time:'00:03:00',
            img:'https://i.vimeocdn.com/video/904471770_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279246423?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:false

        },
        {
            id: 2,
            link:'/video/2',
            name:'Mana Pools NP, Africa - Short Preview',
            time:'00:03:00',
            img:'https://i.vimeocdn.com/video/903170763_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453846?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:false
        },
        {
            id: 13,
            link:'/video/2',
            name:'Mana Pools NP, Africa - Short Preview',
            time:'00:03:00',
            img:'https://i.vimeocdn.com/video/903170763_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453846?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:false
        },
        {
            id: 12,
            link:'/video/2',
            name:'Mana Pools NP, Africa - Short Preview',
            time:'00:03:00',
            img:'https://i.vimeocdn.com/video/903170763_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453846?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:false
        },
        {
            id: 11,
            link:'/video/2',
            name:'Mana Pools NP, Africa - Short Preview',
            time:'00:03:00',
            img:'https://i.vimeocdn.com/video/903170763_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453846?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:false
        }
    ]
  },
  {
    link: '/playlist/2',
    playlistname: 'FREE 4K & 4K HDR Videos',
    videos:[
        {
            id:3,
            link:'/video/3',
            name:'Hoh Rain Forest',
            time:'00:01:03',
            img:'https://i.vimeocdn.com/video/904334858_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279244369?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=93675",
            lock:false

        },
        {
            id:4,
            link:'/video/4',
            name:'Hoh Rain Forest in Summer',
            time:'00:04:33',
            img:'https://i.vimeocdn.com/video/904331665_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279244319?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:false
        },
        {
            id: 5,
            link:'/video/1',
            name:'Sounds of the Pacific Ocean',
            time:'00:03:00',
            img:'https://i.vimeocdn.com/video/904471770_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279246423?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:false

        },{
            id: 6,
            link:'/video/1',
            name:'Sounds of the Pacific Ocean',
            time:'00:03:00',
            img:'https://i.vimeocdn.com/video/904471770_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279246423?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:false

        },{
            id: 7,
            link:'/video/1',
            name:'Sounds of the Pacific Ocean',
            time:'00:03:00',
            img:'https://i.vimeocdn.com/video/904471770_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279246423?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:false

        }
    ]
  },
  {
    link: '/playlist/3',
    playlistname: 'Aerial Footage 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: ' Tropical Beaches 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Wildlife Videos 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Gardens 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Forests & Woods 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Nature Documentaries with Narration (English) 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Nature Documentary Films 4K & 4K HDR (NO NARRATION)',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Waterfalls 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Virtual Hikes 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Oceans & Seas 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Mountains 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Relax Videos with Nature Sounds 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Part 2 - Relax Videos with Nature Sounds 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: '1-Hour Relax Videos with Nature Sounds in 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Flowers & Flower Fields 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Relax Videos with Soothing Music 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Rivers & Streams 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Lakes 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Sunsets & Sunrises 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Nighttime Relax Videos 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Short Relax Videos 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: ' Foreign Languages Films 4K HDR & 4K',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Stress Relief Videos with Voice Over 4K HDR & 4K',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Campfires 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Autumn Relax Videos 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Winter Relax Videos 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Zoo 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Aquarium Life 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: '4K 8K Screensavers-Wallpapers',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},
];
    return (
        <Router>
            <Route exact path='/'  render={(props) => (
                            <Home plst={plst} />
            )} />
            <Route exact path='/about' component={About}  />
            <Route exact path='/explore' 
                        render={(props) => (
                            <Explore plst={plst} />
            )} />
            <Route exact path='/playlist/:id' render={(props) => (
                            <Playlists {...props} plst={plst} />
            )} />
             <Route exact path='/video/:id'  render={(props) => (
                            <Video {...props} plst={plst} />
            )} />
        </Router>
    )
}