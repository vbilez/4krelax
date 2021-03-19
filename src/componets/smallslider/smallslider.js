import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarouselVideoItemsSmall from '../owlcarouselvideoitemssmall/owlcarouselvideoitemssmall'
const SmallSlider = ({link,playlistname,videos}) => {

    const $=window.jQuery;
    return (
<div className="item-list-adv">
        
                            <OwlCarousel className='owl-carousel-c-fourth videos-list-adv owl-loaded owl-drag' loop margin={10} nav  responsive={true} >
                            <OwlCarouselVideoItemsSmall items={videos.length} videos={videos} />
         
                            </OwlCarousel>
</div>
    )
}

export default SmallSlider;