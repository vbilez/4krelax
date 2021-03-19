import React from 'react'
import { Icon, InlineIcon } from '@iconify/react';
import playCircleO from '@iconify-icons/fa/play-circle-o';
import "./playlists.css";
import "../../componets/header/header.css";
const Playlists = (playlists) => {
  console.log(playlists.plst);
var myplaylist;
    if(playlists.plst!=null&&Array.isArray(playlists.plst))
    {
        if(typeof playlists.plst[playlists.match.params.id-1] === 'object')
        {
          myplaylist=playlists.plst[playlists.match.params.id-1];
        }
      
    }
    if (myplaylist==null ) return(<div></div>);
    return (
       <section className="playlists-s">
  <div className="container">
	      <div className="row">

      <div className="col">
        <div className="title-carousel">
         <div>
          <h1>
           <a href="#">
             <Icon icon={playCircleO} />
             <span>{myplaylist.playlistname}</span>
           </a>
         </h1>
             <div className="playlist-desc">{myplaylist.desc}</div>
       </div>
     </div>
   </div>
 </div>
 
 <div className="row" >



{
  myplaylist.videos.map((item) => {
  return (<div style={{margin:"10px"}} className="col-12 col-sm-6 col-md-6 col-lg-4" >
    <div className="item item-pl">
      <a href={item.link}>
       <div className="c-item-style item-style-play">
           <div className="marks"><div className="free"></div></div>        <img src={item.img} alt={item.name}/> 
      </div>
      <div className="c-item-info  row justify-content-between">
        <div className="col-8" ><p className="cir-st1">{item.name}</p></div>
        <div className="col-4 c-item-info-st2"><p className="cir-st2">{item.time}</p></div>
      </div>
    </a>
  </div>
</div>);
  })
}






   
   

</div>
</div>
</section>
    )
}

export default Playlists;