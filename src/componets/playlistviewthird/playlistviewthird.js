import React from 'react';
import NewestUploads from '../newestuploads/newestuploads';

const PlaylistViewThird = (playlists) => {
    const listItems =playlists["playlists"][0].playlists.map( ( {id,name,description,duration,premium,free,pictures,videos} ) => {
        let link = "playlist/"+id;
        return <NewestUploads link={link} playlistname={name} videos={videos}/>
});

    return (
            listItems
    );
}

export default PlaylistViewThird;