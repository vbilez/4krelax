import React from 'react';
import {EXPANDED_SITENAME, EXPANDED_SITENAME3} from '../../componets/sitename/sitename';

const HowItWorks = () => {

    return (
        <React.Fragment>
            <div id="slides" style={{"position": "relative", "overflow": "hidden", "width": "100%", "height": "452px"}} />
        <div class="slides-control" style={{"position": "relative", "height": "100%", "width": "1519px", "left": "-1519px"}}>
            <ul class="slides-container" style={{"margin": "0px", "padding": "0px", "list-style": "none", "position": "relative", "height": "100%", "display": "block"}}>
    
                <li style={{"display": "block", "left": "1519px", "position": "absolute", "overflow": "hidden", "height": "100%", "width": "1519px", "top": "0px", "z-index": "2", "opacity": "1"}}>
                <img src="img/africa-bg.jpg" alt="africa video presentacion" />

        <div class="content-slides content-slides-video" style={{"background-image": "url('img/africa-bg.jpg')", "background-size": "cover"}}>
        <div class="container">
        <div class="aligner slides-video-s">
        <div class="aligner-video">
                <iframe src="https://player.vimeo.com/video/265787071?title=0&amp;byline=0&amp;portrait=0" width="853" height="480" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
        <div class="box-inf-v">
                    <a class="box-i-star" href="subscription">GET ONE MONTH FREE</a>
                    <a class="box-i-more" href="business">SOLUTION FOR YOUR BUSINESS</a>
        </div>
                
        </div>
        </div>
        </div>
        </div>
        </li>


            </ul>
        </div>

        {/* sub text */}

        <div class="h-sub-texts">
    <div class="h-col-2">
        <h5>Get access to all {EXPANDED_SITENAME3} content</h5>
        <p>- 4K &amp; 4K HDR quality relaxation videos</p>
        <p>- Access 4K content without limitations</p>
        <p>- More than 1000 hours of nature relaxation videos</p>
        <p>- Content is updated each week</p>
    </div>
<div class="h-col-2">
        <h5>Watch 4K content on your device</h5>

        <p>- One Subscription for all Your Devices</p>
        <p>- Available on multiple devices: Smart TV, laptop, tablet, mobile.</p>
        <p>- Download and install the {EXPANDED_SITENAME} app from Play Market or AppStore, Roku, Amazon or Samsung Smart TV</p>
        <p>- Click on the image of the video you want to watch.</p>
        <p>- The video will be loaded and you can start watching it immediately.</p>
    </div>
</div>
    
        </React.Fragment>
    )
}

export default HowItWorks;