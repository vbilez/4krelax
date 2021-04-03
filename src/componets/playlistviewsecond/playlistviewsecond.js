import React from 'react';
import PlaylistCarouselSecond from '../playlistcarouselsecond/playlistcarouselsecond';

const PlaylistViewSecond = (playlists) => {
    const listItems =playlists["playlists"][0].playlists.map( ( {id,name,description,duration,premium,free,pictures,videos} ) => {
        let link = "playlist/"+id;
        return <PlaylistCarouselSecond link={link} playlistname={name} videos={videos}/>
});

    return (
            listItems
    );
}

export default PlaylistViewSecond;