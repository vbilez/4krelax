import React from 'react';

const Slickplaylists= (props) => {
   return(
 <section className="playlists-s">
  <div className="container">
	      <div className="row">
       <div className="play-list-names col-md-12 col-sm-12 slick-slider">
       {props.playlists.map((item)=>{

    
            return <div className="item " style={{"width":"100%","display":"inline-block"}}>
                <a href={item.link} tabIndex="-1">{item.playlistname}</a>
            </div>
           })}
       </div>
       </div>
       </div>
       </section>
   );
}

export default Slickplaylists;