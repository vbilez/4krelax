import React from 'react';
import PlaylistCarousel from '../playlistcarousel/playlistcarousel';

const PlaylistView = (playlists) => {
    const listItems =playlists.playlists.map( ( {link, playlistname,videos} ) => {

    return <PlaylistCarousel link={link} playlistname={playlistname} videos={videos}/>
});

    return (
            listItems
    );
}

export default PlaylistView;