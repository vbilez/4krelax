import React from 'react';
import PlaylistCarousel from '../playlistcarousel/playlistcarousel';

const PlaylistView = (playlists) => {
    console.log(playlists["playlists"][0].playlists);
    const listItems =playlists["playlists"][0].playlists.map( ( {id,name,description,duration,premium,free,pictures,videos} ) => {
    let link = "playlist/"+id;
    return <PlaylistCarousel link={link} playlistname={name} videos={videos}/>
});

    return (
            listItems
    );
}

export default PlaylistView;

//new comment