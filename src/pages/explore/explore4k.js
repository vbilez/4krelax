import React, { useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import OwlCarouselMain from '../../componets/owlcarouselmain/owlcarouselmain';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import PlaylistCarousel from '../../componets/playlistcarousel/playlistcarousel';
import PlaylistView from '../../componets/playlistview/playlistview';
import PlaylistViewSecond from '../../componets/playlistviewsecond/playlistviewsecond';
import Slickplaylists from '../../componets/slickplaylists/slickplaylists';
import "./explore4k.css";
import sha1 from 'crypto-js/sha1';
const Explore = (props) => {
    const $=window.jQuery;
var [filterplst, setFilterplst] = useState([]);
const people = [
"Siri",
"Alexa",
"Google",
"Facebook",
"Twitter",
"Linkedin",
"Sinkedin"
];
const [searchTerm, setSearchTerm] = React.useState("");
const [searchResults, setSearchResults] = React.useState([]);
const handleChange = event => {
    setSearchTerm(event.target.value);
};





React.useEffect(async() => {
/* const results = people.filter(person =>
    person.toLowerCase().includes(searchTerm)
    );
    */
    const GetPlaylistsArray = async(data)=>{
        let queryString = "https://4krelax.bringstream.com/Engine/apic/apic.php?action=GetPlaylists&openKey="+data.aOpenKey;
        let   action="action=GetPlaylists&openKey="+data.aOpenKey;
        let formData = new FormData();
        let jsonData =`{"where":"LOWER(name) like :c","params":{"c":`+`"%${searchTerm}%"`+`},"general":1,"new":1,"favorites":1,"statistic":1,"count":10,"playlists_fields":{"id":0,"name":30,"description":50,"premium":0,"free":0,"duration":0,"pictures":[640,1920],"videos_count":0},"videos":{"count":10,"fields":{"id":0,"name":30,"duration":0,"hdr":0,"pictures":[600],"position":0}}}`;
        let signature = sha1(action + data.aPrivateKey + jsonData);
        console.log("privatekey",data.aPrivateKey);
        formData.append('jsonData',jsonData);
        formData.append('signature',signature);
        await fetch(queryString, {
                mode:"cors",
                method:"POST",
                body:formData
        })
        .then((response) => {
            return  response.json();
        })
        .then(data => 
            {console.log("searchdata",data); setSearchResults(data);$('.owl-carousel-c-second').owlCarousel({nav:true,
        center:true,
        items:4,
        loop: true,
        slideBy:2,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: true,
            },
            600: {
                items: 2,
                nav: true,
                loop: true,
            },
            1000: {
                items: 3,
                nav: true,
                loop: true,
            },
            1200: {
                items: 4,
                nav: true,
                loop: true,
            }
        }}  );})
            .catch(error => {
            console.log("error", error);
        });
        console.log("datalogin",data);
}
    const GetLoginAnonymous = async()=>{

        const privateKey="~UniHash-767250902345~";
        let action = "action=LoginAnonymous";
        let endpoint = "https://4krelax.bringstream.com/Engine/apic/apic.php?";
        let queryString = "https://4krelax.bringstream.com/Engine/apic/apic.php?"+action;
      //const logindata ={"emailLogin":{"email":"dk@itf-ua.org","password":"&Px5foU7J[$g2[^"}};
        let formData = new FormData();
        let signature= sha1(action+privateKey+'{}')
formData.append('jsonData','{}');
formData.append('signature',signature);

    await fetch(queryString, {
        mode:"cors",
        method:"POST",
        body:formData
})
    .then((response) => {
    
    return response.json();
    })
    .then(data => 
    { GetPlaylistsArray(data); ;
        }


    
    )
    .catch(error => {
    console.log("error", error);
    });
    }



    GetLoginAnonymous();
    $('.owl-carousel-c-second').owlCarousel({nav:true,
        center:true,
        items:4,
        loop: true,
        slideBy:2,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: true,
            },
            600: {
                items: 2,
                nav: true,
                loop: true,
            },
            1000: {
                items: 3,
                nav: true,
                loop: true,
            },
            1200: {
                items: 4,
                nav: true,
                loop: true,
            }
        }}  );
}, [searchTerm]);
filterplst=props.plst;
const [filterplstsc, setFilterplstsc] = useState(filterplst);
const [isSearch, setIsSearch] = useState(true);
var filteredplaylists=[];
    return (
        <React.Fragment> 
        <div style={{paddingLeft:"50px !important",paddingRight:"50px !important"}}>
<OwlCarouselMain/>
<div className="descr">
    <p>Largest collection of 4K &amp; 4K HDR videos for relaxation! <span>1.476</span> hours &amp; <span>899</span> videos for your home and business! <span>New content is added REGULARLY!</span></p>
</div>
<div className="mm justify-content-center">
<div className=" search-div col-md-11 mw " align="center">
            <span>
                <img src="/img/search.svg" alt=""/>
                <input type="text" id="search_video" name="search_video" placeholder="Search video" value={searchTerm} onChange={
                    /*(event)=>{
                    
if(event.target.value!='' && event.target.value!=null){
    console.log(filterplst);
                    let searchString = event.target.value;
                    console.log(searchString);
                    for(var i=0;i<props.plst.length;i++)
                    {

                        var newArray = props.plst[i].videos.filter(function (el) {
                            return el.name == searchString;
                            });
                            filterplst[i].videos=newArray;

                    }
    console.log(filterplst);
                    setIsSearch(true);

                    }
                    else {
                        setIsSearch(false);
                        //setFilterplst(props.plst);
                        }
                
    }
       */
    handleChange
    }
    /> 
            </span>
        </div>
</div>

<Slickplaylists playlists={props.plst}/>
<div >
{isSearch ? (
    
<div className=" playlists-scrollbox">
<PlaylistViewSecond playlists={searchResults} start={props.plst} initial={true}/>
        </div>

):(


<div className=" playlists-scrollbox">
<PlaylistView playlists={searchResults}/>
        </div>
    
)}
</div>


</div>
<section className="main-sign-up">
    <div className="signup-text">
        <h5>Love the Earth – Relax with Nature!</h5>
        <p>Behold the beauty of nature! <b>Relax and restore yourself together with 4K Nature Relax TV.</b> Experience the majestic landscapes, enjoy the stunning views of the mountains, explore the diverse wildlife, listen to the soothing sounds of the rushing waterfalls and calm lakes, enjoy birds singing in the deep forests and more. <b>4K Relax TV brings peace and restores your inner peace and harmony in your life!</b></p>
        <a href="subscription" className="button">Sign Up Now</a>
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

export default Explore;