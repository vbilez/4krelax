import React from 'react';
import SmallSlider from '../smallslider/smallslider';

const PlaylistViewFourth = (playlists) => {
    const listItems =playlists.playlists.map( ( {link, playlistname,videos} ) => {

    return <SmallSlider link={link} playlistname={playlistname} videos={videos}/>
});

    return (
            listItems
    );
}

export default PlaylistViewFourth;