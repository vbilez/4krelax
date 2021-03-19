import React from 'react';
import PlaylistCarouselSecond from '../playlistcarouselsecond/playlistcarouselsecond';

const PlaylistViewSecond = (playlists) => {
    const listItems =playlists.playlists.map( ( {link, playlistname,videos} ) => {

    return <PlaylistCarouselSecond link={link} playlistname={playlistname} videos={videos}/>
});

    return (
            listItems
    );
}

export default PlaylistViewSecond;