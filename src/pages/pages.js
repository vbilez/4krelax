import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import About from '../pages/about/about';
import Explore from '../pages/explore/explore4k';
import Video from '../pages/video/video';
import Playlists from '../pages/playlist/playlists';

export default function() {
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
}
];
    return (
        <Router>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/explore' 
                        render={(props) => (
                            <Explore plst={plst} />
            )} />
            <Route exact path='/playlist' component={Playlists} />
             <Route exact path='/video/:id'  render={(props) => (
                            <Video {...props} plst={plst} />
            )} />
        </Router>
    )
}