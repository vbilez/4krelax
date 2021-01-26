import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import PlaylistCarousel from '../../componets/playlistcarousel/playlistcarousel';
import PlaylistView from '../../componets/playlistview/playlistview';
import Slickplaylists from '../../componets/slickplaylists/slickplaylists';
const Explore = (props) => {
    const $=window.jQuery;
   
    return (
        <div style={{paddingLeft:"0 !important",paddingRight:"0 !important"}}>
<OwlCarousel items={1} className='my-carousel owl-theme  owl-carousel owl-loaded owl-drag' loop margin={10} nav  >
    <div className="my-item" style={{"backgroundImage":"url('https://i.vimeocdn.com/video/904334858_1920x1080.jpg?r=pad')"}}>
        <div className="overlay-item"></div>
        <h2>FREE 4K &amp; 4K HDR Videos</h2>
        <p>This collection features free 4K Nature Videos. The longer versions of these clips can be found in our collections.</p>
        <a href="/playlist-free-4k-4k-hdr-videos-1" className="box-i-star ">Watch now</a>
    </div>
    <div className="my-item" style={{"backgroundImage":"url('https://i.vimeocdn.com/video/821569414_1920x1080.jpg?r=pad')"}}>
        <div className="overlay-item"></div>
        <h2>Aerial Footage 4K &amp; 4K HDR</h2>
        <p>Wonderful 4K/ 4K HDR Aerial Relax Videos that show the beauty of our planet from a birds eye view. Enjoy this wonderful perspective.</p>
        <a href="/playlist-aerial-footage-4k-4k-hdr-14" className="box-i-star">Watch now</a>
    </div>

    <div className="my-item" style={{"backgroundImage":"url('https://i.vimeocdn.com/video/767862019_1920x1080.jpg?r=pad')"}}>
        <div className="overlay-item"></div>
        <h2>Tropical Beaches 4K &amp; 4K HDR</h2>
        <p>Best tropical beaches are collected in this playlist. Take a virtual trip to real tropical paradise.</p>
        <a href="/playlist-tropical-beaches-4k-4k-hdr-7" className="box-i-star ">Watch now</a>
    </div>
    <div className="my-item" style={{"backgroundImage":"url('https://i.vimeocdn.com/video/974332252_1920x1080.jpg?r=pad')"}}>
        <div className="overlay-item"></div>
        <h2>Wildlife Videos 4K &amp; 4K HDR</h2>
        <p>Enjoy diverse and abundant wildlife from different parts of the world in fantastic 4K and 4K HDR quality. Visit Africa, North America, Europe and explore wildlife of the world.</p>
        <a href="/playlist-wildlife-videos-4k-4k-hdr-27" className="box-i-star ">Watch now</a>
    </div>
</OwlCarousel>
<Slickplaylists playlists={props.plst}/>
    <div style={{paddingLeft:"25px",paddingRight:15}}>
<div class="col-md-11 col-sm-10 playlists-scrollbox">
        <PlaylistView playlists={props.plst}/>
        </div>
    </div>
</div>
    )
}

export default Explore;