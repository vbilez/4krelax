import React from 'react';
import NewestUploads from '../newestuploads/newestuploads';

const PlaylistViewThird = (playlists) => {
    const listItems =playlists.playlists.map( ( {link, playlistname,videos} ) => {

    return <NewestUploads link={link} playlistname={playlistname} videos={videos}/>
});

    return (
            listItems
    );
}

export default PlaylistViewThird;