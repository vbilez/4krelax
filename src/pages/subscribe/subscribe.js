import React from 'react';

const Subscribe = () => {

    return (
    <React.Fragment>
    <section className="subscribe-section">
        <div className="subscruptionForm formWhiteOnBlack">
            <div id="regtabs">
                <h5 className="t1 tabLink h5active" data="personalform">INDIVIDUAL</h5>
                <h5 class="t2 tabLink" data="businessSignupForm">
                <span>BUSINESS<strong>NEW</strong>
                </span> 
                </h5>
        </div>
            <form id="payment-form" class="formWhiteOnBlack formTiled" external="1">
        <div class="personalform tab1 subscriptiontab" style="display: block;">
                <div class="div-p">More than 1000 hours videos in 4K &amp; 4K HDR quality</div>
                <div class="div-p">One Subscription for all Your Devices</div>
                <div class="div-p">Newly added content every week</div>
                    <p class="checklabel select-price-text chlb-active" plan="month_uhd">
                        <a class="before" href="#a"></a>
                        <a class="tofrm" href="#a">Monthly 4K/UHD subscription</a>
                        <a href="#a" class="price-text">$8.99 USD</a>
                        <a href="#a" class="green-textbig">30-Days Free </a>
                        <a href="#a" class="green-text">after free trial ends billed monthly</a>
                    </p>
                    <p class="checklabel select-price-text" plan="year_uhd">
                        <a class="before" href="#a"></a>
                        <a class="tofrm" href="#a">Annual 4K/UHD subscription</a>
                        <a href="#a" class="price-text">$89.99 USD</a>
                        <a href="#a" class="green-textbig">30-Days Free </a>
                        <a href="#a" class="green-text">after free trial ends billed yearly</a>
                    </p>
                    <p class="checklabel select-price-text" plan="month_hd">
                        <a class="before" href="#a"></a>
                        <a class="tofrm" href="#a">Monthly HD subscription</a>
                        <a href="#a" class="price-text">$4.99 USD</a>
                        <a href="#a" class="green-textbig">30-Days Free </a>
                        <a href="#a" class="green-text">after free trial ends billed monthly</a>
                    </p>
                    <p class="checklabel select-price-text" plan="year_hd">
    `                   <a class="before" href="#a"></a>
                        <a class="tofrm" href="#a">Annual HD subscription</a>
                        <a href="#a" class="price-text">$49.99 USD</a>
                        <a href="#a" class="green-textbig">30-Days Free </a>
                        <a href="#a" class="green-text">after free trial ends billed yearly</a>
                    </p>
        <div class="div-p">At the end of your 30-days free trial period, you will be charged according to the recurring subscription plan with the option to unsubscribe at any time. If you cancel the subscription before your trial ends, you won’t be charged.</div>
        <div class="div-p">*Concurrent multi-device function is not allowed (only 1 TV at a time)</div>
        </div>
d
        <div class="personalform tab2 subscriptiontab dn" style="display: block;">
                <p class="green-text">More than 1000 hours of videos in 4K &amp; 4K HDR quality</p>
                <p class="green-text">For Small Business Partners: Doctors Offices, Hospitals, Retreats, Spas, Stress Management Programs, Nursing Homes, </p>
                <p class="green-text">Schools, Retail and Digital Signage, Screensaver, Ambiance, Study Aid, Meditation aid, Meditation Background, etc.</p>
                <p class="green-text">Help your visitors and clients feel calm and relaxed!</p>
                <p class="checklabel select-price-text" plan="month_uhd_business_1tv">
                        <a class="before" href="#a"></a>

                        <a href="#a">Monthly 4K/UHD subscription</a>
                        <a href="#a" class="price-text">$99.00 USD</a>
                        <a href="#a" class="green-textbig">7-Days Free </a>
                        <a href="#a" class="green-text">after free trial ends billed monthly</a>
                </p>
                <p class="checklabel select-price-text" plan="year_uhd_business_1tv">
                        <a class="before" href="#a"></a>
                        <a href="#a">Annual 4K/UHD subscription</a>
                        <a href="#a" class="price-text">$999.00 USD</a>
                        <a href="#a" class="green-textbig">7-Days Free </a>
                        <a href="#a" class="green-text">after free trial ends billed yearly</a>
                    </p>
                    <p class="checklabel select-price-text" plan="month_hd_business_1tv">
                        <a class="before" href="#a"></a>
                        <a href="#a">Monthly HD subscription</a>
                        <a href="#a" class="price-text">$49.00 USD</a>
                        <a href="#a" class="green-textbig">7-Days Free </a>
                        <a href="#a" class="green-text">after free trial ends billed monthly</a>
                    </p>
                    <p class="checklabel select-price-text" plan="year_hd_business_1tv">
                        <a class="before" href="#a"></a>
                        <a href="#a">Annual HD subscription</a>
                        <a href="#a" class="price-text">$499.00 USD</a>
                        <a href="#a" class="green-textbig">7-Days Free </a>
                        <a href="#a" class="green-text">after free trial ends billed yearly</a>
                    </p>
        <div class="div-p">At the end of your 7 day free trial, you will be charge as a recurring monthly subscription,
                    with the option to unsubscribe at any time. If you cancel before your trial ends, you won’t be charged.</div>
        <div class="div-p">* Concurrent multi-device function is not allowed (only 1 TV at a time)</div>
        <div class="div-p">* Watching time limitation is 8 hours per day.</div>
        <div class="div-p">* The price is indicated for businesses with up to 5 employees. Contact us for a <a href="license">custom license</a> if you are a large business company or want to add number of screens to your license.</div>
        </div>
        </form>
        </div>
    </section>
        </React.Fragment>
    )
}

export default Subscribe;
