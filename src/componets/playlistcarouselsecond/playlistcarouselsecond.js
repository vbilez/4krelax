import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarouselVideoItems from '../owlcarouselvideoitems/owlcarouselvideoitems'
const PlaylistCarouselSecond = ({link,playlistname,videos}) => {

    const $=window.jQuery;
    return (
<div className="item-list">
        <div className="title-carousel">
                        <div>
                            <h4 className="carousel-name">
                                <a href={link}>
                                    <i className="fa fa-play-circle-o" aria-hidden="true"></i> 
                                    <span>{playlistname}</span>
                                </a>
                            </h4>
                                <span className="hoursAndCount"><span className="hideOnPhone"> hours in </span>{videos.length} videos. </span>
                                <span className="showAll"><a href={link}>Show All</a></span>
                        </div>
                        <div></div>
                    </div>
                            <OwlCarousel className='owl-carousel-c-second videos-list owl-loaded owl-drag' loop margin={10} nav  responsive={true} >
                            <OwlCarouselVideoItems items={videos.length} videos={videos} />
         
                            </OwlCarousel>
</div>
    )
}

export default PlaylistCarouselSecond;