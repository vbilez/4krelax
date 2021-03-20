import React from 'react'

const About = () => {
     const data = {};
     const privateKey="~UniHash-767250902345~";
     const queryString = "https://site.bringstream.com/Engine/api/apic.php?action=HelloWorld";
     fetch(queryString, {
  credentials: 'include',
  method:"POST",
  body:JSON.stringify(data),
  signature:"e211da9e25556c879eb2f7ded07e179b7e3b9fe5"
})
  .then(response => {
   // if (!response.ok) throw Error(response.statusText);
    return response.json();
  })
  .then(data => console.log("data", data))
  .catch(error => {
    console.log("error", error);
  });
    return (
        <React.Fragment>
            <section className="about">
<div className="container-custom">

<h2>About Us</h2>

<br/>
<p className="lighterfont"><strong>4K Nature Relax TV - a new creation of ProArtInc</strong>, presenting an incredible collection of <strong>4K &amp; 4K HDR nature relaxation videos</strong>. More than <strong>1000 hours</strong> of sensational nature relax ad-free videos will carry you away to an incredible virtual journey to the world’s most beautiful, breathtaking places, giving you a chance either to immerse yourself into new countries and places you always dreamed to visit, but have never had a chance to, or just to relax after an intense, bustling day to the nature views and sounds.</p>
<p className="lighterfont">Our abundant collection includes a wide-range of video formats and styles, featuring various locations throughout the world. And 4K &amp; 4K HDR quality will help you to feel like amidst a real forest or walking near an amazing alpine lake.</p>
<p className="lighterfont">We are also offering Apps for all kinds of devices so that you can get a subscription and use our App for the platform convenient for you.</p>
<p className="lighterfont">Videos offered by <strong>4K Nature Relax TV</strong> are not just an entertainment, but a unique therapy as well. Fantastic scenery combined with soothing music is the best stress healer, helping your mind to get some rest from hustle and bustle of the modern world and to feel calm and peaceful. Furthermore, our team's passion to share the beauty of our world with others helps to chose the most magic and worthy places for shooting videos.</p>

   <div class="box2-inf-v">
                    <a className="box2-i-star" href="subscription">Free 30 days trial!</a>
                    <a className="box2-i-more" href="how">How it Works</a>
                  </div>

</div>
</section>
<section class="about-sign-up">
     <div class="signup-text">
          <h5>Love the Earth – Relax with Nature!</h5>
          <p>Behold the beauty of nature! <b>Relax and restore yourself together with 4K Nature Relax TV.</b> Experience the majestic landscapes, enjoy the stunning views of the mountains, explore the diverse wildlife, listen to the soothing sounds of the rushing waterfalls and calm lakes, enjoy birds singing in the deep forests and more. <b>4K Nature Relax TV brings peace and restores your inner peace and harmony in your life!</b></p>
          <a href="subscription" class="button">Sign Up Now</a>
     </div>

</section>
<div className="under-footer">
<div className="more-inform my-2 my-lg-0">
<p className="footer-follow"></p><h6>Available on multiple devices.</h6><p></p>
     <div className="social">
        

          <a href="https://play.google.com/store/apps/details?id=xyz.gameoff.relaxation" target="_blank" rel="nofollow"><img src="/img/platforms/android.png" alt="android app"/></a>
          <a href="https://itunes.apple.com/us/app/4k-nature-relax-tv/id1403683336?mt=8" target="_blank" rel="nofollow"><img src="/img/platforms/iphone.png" alt="iphone app"/></a>
          <a href="https://channelstore.roku.com/en-gb/details/268607/4k-nature-relax-tv" target="_blank" rel="nofollow"><img src="/img/platforms/roku.png" alt="roku app"/></a>
          <a href="#" rel="nofollow"><img src="/img/platforms/samsung-smart-tv.png" alt="roku app"/></a>
<br/><br/>
          <a href="https://play.google.com/store/apps/details?id=xyz.gameoff.relaxation" target="_blank" rel="nofollow"><img src="/img/platforms/android-tv.png" alt="android tv"/></a>
          <a href="https://apps.apple.com/us/app/4k-nature-relax-tv/id1403683336#?platform=appleTV" target="_blank" rel="nofollow"><img src="/img/platforms/apple-tv.png" alt="apple tv"/></a>
          <a href="https://www.amazon.com/Pro-Art-inc-Nature-Relax/dp/B074MC1G9X" target="_blank" rel="nofollow"><img src="/img/platforms/fire-tv.png" alt="amazon fire tv"/></a>
          

     </div>
</div>
    </div>
        </React.Fragment> 
    )
}

export default About;