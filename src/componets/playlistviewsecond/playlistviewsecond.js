import React from 'react';
import PlaylistCarouselSecond from '../playlistcarouselsecond/playlistcarouselsecond';

const PlaylistViewSecond = (playlists, initial) => {
    if(playlists.playlists.playlists instanceof Object)
    {
    
   
  
    const listItems = 
    playlists.playlists.playlists.map( ( {id,name,description,duration,premium,free,pictures,videos} ) => {
    let link = "playlist/"+id;
    return <PlaylistCarouselSecond link={link} playlistname={name} videos={videos}/>
});

    return (
            listItems
    );
     }

     else {
         return (<div></div>);
     }
}

export default PlaylistViewSecond;