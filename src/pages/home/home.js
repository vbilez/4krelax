import React, { useState } from 'react';

import PlaylistViewThird from '../../componets/playlistviewthird/playlistviewthird';
import PlaylistViewFourth from '../../componets/playlistviewfourth/playlistviewfourth';
import NewestUploads from '../../componets/newestuploads/newestuploads';
import PlaylistCarousel from '../../componets/playlistcarousel/playlistcarousel';
import PlaylistView from '../../componets/playlistview/playlistview';
import PlaylistViewSecond from '../../componets/playlistviewsecond/playlistviewsecond';
import Slickplaylists from '../../componets/slickplaylists/slickplaylists';
const Home = (props) => {
    const $=window.jQuery;
    var [filterplst, setFilterplst] = useState([]);
filterplst=[props.plst[0],props.plst[1],props.plst[2]];
var [threeplst, setThreeplst] = useState([]);
threeplst =[props.plst[0],props.plst[1],props.plst[2]];
const [filterplstsc, setFilterplstsc] = useState(filterplst);
const [isSearch, setIsSearch] = useState(false);
var filteredplaylists=[];
    return (
        <div>
            <header className="top_header ha-waypoint ha-header-small header35">

         <div id="slides" style={{"position":"relative","overflow":"hidden","width":"100%","height":"937px"}}>
             <div className="slides-control" style={{"position":"relative","height":"100%","width":"100%"}}><ul className="slides-container" style={{"margin":"0px","padding":"0px","listStyle":"none","position":"relative","height":"100%","display":"block"}}>

                 <li style={{"display":"block","left":"1021px","position":"absolute","overflow":"hidden","height":"100%","width":"1021px","top":"0px","zIndex":"2","opacity":"1"}}>
                     <img src="img/w-1.jpg" alt="4k nature relax tv slider" style={{"backfaceVisibility":"hidden","position":"absolute","left":"-616.5px","top":"0px","zIndex":"-1","maxWidth":"none","height":"937px","width":"2254.44px"}}/>
                    
                     <div className="content-slides">
                         <div className="container-custom">
                             <div className="row">
                                 <div className="col-sm-12 col-md-6">
                                     <div className="container-animation cn-text">
                                         <h3>Love the Earth – Relax with Nature!</h3>
                                         <strong>Turn on your TVs and stream relax videos in PREMIUM 4K &amp; 4K HDR quality.</strong>
                                         <div className="cn-text-style">
                                              <p>Take a deep breath, escape to beautiful natural destinations and experience nature like never before with a new app from Pro Art inc. An incredible collection of 4K &amp; 4K HDR nature relax videos with more than 1000 hours of sensational nature relax ad-free videos bring natural wonders closer!</p>
                                         </div>
                                    </div>
                               </div>
                               <div className=" col-sm-12 col-md-6">
                                   <div id="embed_container" className=" embed_container container-animation cn-video">
								<div className="video-frame2"><iframe title="sometitle" className="black_back" type="text/html" src="https://player.vimeo.com/video/422874793" id="video" width="490" height="274" frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe></div>
                                       
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </li>


     </ul></div>
</div>
</header>


<section className="help ha-waypoint" data-animate-down="ha-header-hide" data-animate-up="ha-header-small">
     <div className="s-tab tab-1">
          <div className="tab-manu-style">
               <div className="container-custom">
                    <div className="row">
                         <div className="" style={{"width":"50%"}}>
                              <ul className="tabs">
                                   <li className="active" data="about"><i className="fa fa-commenting-o" aria-hidden="true"></i> About</li>
                                   <li data="content" className=""><i className="fa fa-clone" aria-hidden="true"></i> Content</li>
                              </ul>      
                         </div>
                         <div className="">
                              <a className="bottom-free" href="subscription">
                                   <span>Start 30-Day Free Trial!!</span>
                                   <span>more than 1000 hours videos</span>
                              </a>
                         </div>

                    </div>
               </div>
          </div>
          <ul className="tab__content tab-content-1" style={{"height":"1434px"}}>
               <li className="active" style={{"display":"list-item"}}>
                    <div className="container-custom">
                         <div className="row">
                              <div className=" col-md-6 col-sm-12 col-xs-12">
                                   <div className="content__wrapper cw-style">
                                        <h4>4K Nature Relax TV is one of the first services to stream 4K &amp; 4K HDR content.</h4>
                                        <p>Pro Art inc. presents a new app that takes you closer to Nature. Open a virtual window into nature and go on a journey to the most marvelous natural wonders and breathtaking places of the world! Everything is possible with 4K Nature Relax TV! Hours and hours of exciting and stunning nature documentaries as well as 4K nature relax videos will bring peace to your mind and harmony into your life. Be with Nature! Stay with Us!</p>
                                        <a className="cw-botton" href="about">Read more</a>
                                   </div>            
                              </div> 
                              <div className=" col-md-6 col-sm-12 col-xs-12"> 
                                   <div className="content__wrapper">
                                        <ul className="more-inf">
                                             <li><h4>One Subscription for all Your Devices</h4></li>
                                             <li><p>Access to the 4K Nature Relax TV app for phones, tablets &amp; TVs</p></li>
                                             <li><p>Over-the-Top (OTT) / Video-on-Demand (VOD) </p></li>
                                             <li><p>Newly added content every week</p></li>
                                             <li><p>Access of more than 1000 hours videos in 4K &amp; 4K HDR quality.</p></li>
                                             <li><p>Ease your mind and restore yourself together with 4K Nature Relax TV.</p></li>
                                             
                                        </ul>
                                   </div>            
                              </div> 
                         </div>
                    </div>
                 <section className="free-preview" style={{"backgroundImage":"url('https://i.vimeocdn.com/video/904334858_640x360.jpg?r=pad')","display":"block"}}>
    <div className="free-preview-bg">
        <div className="fp-slider">
          
            <PlaylistViewFourth playlists={[props.plst[0]]}/>
        </div>
        <div className="fp-text">
                        <h5>FREE PREVIEW - <span id="free_preview_name">Hoh Rain Forest</span></h5>
            <p><span id="free_preview_duration"> 0:01:03</span> | <span id="free_preview_description">Free 4K Short Preview
Producer: Roman Khomlyak, Pro Art inc.</span></p>
            <a href="/video-hoh-rain-forest-279244369-1" className="button" id="watch_free_preview"><i className="fa fa-play-circle-o fa-lg" aria-hidden="true"></i> Watch Free Preview</a>
        </div>
    </div>
</section>

<section className="carousel-block" style={{"display":"block"}}>
        <div className="col-md-11 col-sm-10">
            <PlaylistViewThird playlists={[props.plst[0]]}/>
      </div>
    
    
</section>               </li>
               <li className="" style={{"display":"none"}}>
<div className="content__wrapper">
               <div style={{paddingLeft:"50px !important",paddingRight:"50px !important"}}>

<div className="mm justify-content-center">
<div className=" search-div col-md-11 mw " align="center">
            <span>
                <img src="/img/search.svg" alt=""/>
                <input type="text" id="search_video_s" name="search_video" placeholder="Search video" onChange={(event)=>{
if(event.target.value!='' && event.target.value!=null){
    console.log(filterplst);
                      let searchString = event.target.value;
                      console.log(searchString);
                      for(var i=0;i<threeplst.length;i++)
                      {

                          var newArray = threeplst[i].videos.filter(function (el) {
                            return el.name == searchString;
                            });
                            filterplst[i].videos=newArray;

                      }
       console.log(filterplst);
                    setIsSearch(true);

                    }
                    else {
                        setIsSearch(false);
                        //setFilterplst(props.plst);
                        }
                
       }
       }
       /> 
            </span>
        </div>
</div>

<Slickplaylists playlists={props.plst}/>
<div >
{isSearch ? (
    
<div className=" playlists-scrollbox">
<PlaylistViewSecond playlists={filterplst}/>
        </div>
  
):(

  
<div className=" playlists-scrollbox">
<PlaylistView playlists={threeplst}/>
        </div>
    
)}
</div>


</div>
    </div>                
<div id="hidden_playlists" style={{"display":"none"}}>
    </div>
    <div class="col-12 bottom-show">
                <a href="/explore">Show More</a>
            </div>
<script>
    $(function () {
        setTimeout(function () {

            var hp = $('#hidden_playlists .item-list');
            var pp = $('.playlists-scrollbox');
            pp.append(hp);
//    $.each(hp, function(i,v){
//        pp.append(v);
//    });
}, 1000)
    });
</script>               </li>
          </ul>
     </div>
</section>
<section className="main-sign-up">
     <div className="signup-text">
          <h5>Love the Earth – Relax with Nature!</h5>
          <p>Behold the beauty of nature! <b>Relax and restore yourself together with 4K Nature Relax TV.</b> Experience the majestic landscapes, enjoy the stunning views of the mountains, explore the diverse wildlife, listen to the soothing sounds of the rushing waterfalls and calm lakes, enjoy birds singing in the deep forests and more. <b>4K Relax TV brings peace and restores your inner peace and harmony in your life!</b></p>
          <a href="subscription" className="button">Sign Up Now</a>
     </div>

</section>
<div className="under-footer">
<div className="more-inform my-2 my-lg-0">
<p className="footer-follow"></p><h6>Available on multiple devices.</h6><p></p>
     <div className="social">
        

          <a href="https://play.google.com/store/apps/details?id=xyz.gameoff.relaxation" target="_blank" rel="nofollow"><img src="/img/platforms/android.png" alt="android app"/></a>
          <a href="https://itunes.apple.com/us/app/4k-nature-relax-tv/id1403683336?mt=8" target="_blank" rel="nofollow"><img src="/img/platforms/iphone.png" alt="iphone app"/></a>
          <a href="https://channelstore.roku.com/en-gb/details/268607/4k-nature-relax-tv" target="_blank" rel="nofollow"><img src="/img/platforms/roku.png" alt="roku app"/></a>
          <a href="#" rel="nofollow"><img src="/img/platforms/samsung-smart-tv.png" alt="roku app"/></a>
<br/><br/>
          <a href="https://play.google.com/store/apps/details?id=xyz.gameoff.relaxation" target="_blank" rel="nofollow"><img src="/img/platforms/android-tv.png" alt="android tv"/></a>
          <a href="https://apps.apple.com/us/app/4k-nature-relax-tv/id1403683336#?platform=appleTV" target="_blank" rel="nofollow"><img src="/img/platforms/apple-tv.png" alt="apple tv"/></a>
          <a href="https://www.amazon.com/Pro-Art-inc-Nature-Relax/dp/B074MC1G9X" target="_blank" rel="nofollow"><img src="/img/platforms/fire-tv.png" alt="amazon fire tv"/></a>
          

     </div>
</div>
    </div>
        </div>
    )
}

export default Home;