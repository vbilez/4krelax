import React from 'react';
import SmallSlider from '../smallslider/smallslider';

const PlaylistViewFourth = (playlists) => {

    const listItems =playlists["playlists"][0].playlists.slice(0, 1).map( ( {id,name,description,duration,premium,free,pictures,videos} ) => {
    let link = "playlist/"+id;
    return <SmallSlider link={link} playlistname={name} videos={videos}/>
});

    return (
            listItems
    );
}

export default PlaylistViewFourth;