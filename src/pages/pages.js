import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import About from '../pages/about/about';
import Explore from '../pages/explore/explore4k';
import Video from '../pages/video/video';
import Playlists from '../pages/playlist/playlists';
import Subscribe from '../pages/subscribe/subscribe';
import Login from '../pages/login/login';
import sha1 from 'crypto-js/sha1';
import {SITENAME} from '../componets/sitename/sitename';
import HowItWorks from '../pages/howItWorks/howItWorks';
import Policy from '../pages/policy/policy';
import Terms from '../pages/terms/terms';
import FAQ from '../pages/faq/faq';
import Business from '../pages/business/business';

export default function Pl() {

 const [playlists, setPlaylists] = React.useState([]);
    
 const isLoggedin = localStorage.getItem('loggedin') === 'true';
 const useremail = isLoggedin ? localStorage.getItem('useremail') : '';
  React.useEffect(async() => {
      const GetPlaylistsArray = async(data)=>{
        let queryString = "https://"+SITENAME+".bringstream.com/Engine/apic/apic.php?action=GetPlaylists&openKey="+data.aOpenKey;
        let action="action=GetPlaylists&openKey="+data.aOpenKey;
        let formData = new FormData();
        let jsonData =`{"general":1,"new":1,"favorites":1,"statistic":1,"count":30,"playlists_fields":{"id":0,"name":30,"description":50,"premium":0,"free":0,"duration":0,"pictures":[640,1920],"videos_count":0},"videos":{"count":10,"fields":{"id":0,"name":30,"duration":0,"hdr":0,"pictures":[600],"position":0}}}`;
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
            {
              console.log("searchdata",data); 
              setPlaylists(data);
            })
            .catch(error => {
            console.log("error", error);
        });
        console.log("datalogin",data);
  }


  const GetLoginAnonymous = async()=>{

          const privateKey="~UniHash-767250902345~";
    let action = "action=LoginAnonymous";
    let endpoint = "https://"+SITENAME+".bringstream.com/Engine/apic/apic.php?";
    let queryString = "https://"+SITENAME+".bringstream.com/Engine/apic/apic.php?"+action;
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

    const GetLogin = async(email,pass)=>{

          const privateKey="~UniHash-767250902345~";
    let action = "action=LoginWithPassword";
    let endpoint = "https://"+SITENAME+".bringstream.com/Engine/apic/apic.php?";
    let queryString = "https://"+SITENAME+".bringstream.com/Engine/apic/apic.php?"+action;
      //const logindata ={"emailLogin":{"email":"dk@itf-ua.org","password":"&Px5foU7J[$g2[^"}};
    let formData = new FormData();
    let jsonData ='{"emailLogin":{"email":"dk@itf-ua.org"}}';
    let signature= sha1(action+privateKey+jsonData)
formData.append('jsonData',jsonData);
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
  if(isLoggedin){
      GetLogin();
      }
      else 
      {
        GetLoginAnonymous();
      }
  },[]);

    return (
        <Router>
            <Route exact path='/'  render={(props) => (
                            <Home  plst={playlists}/>
            )} />
            <Route exact path='/about' render={(props) => (
                            <About  plst={playlists} />
            )}   />
            <Route exact path='/explore' 
                        render={(props) => (
                            <Explore  plst={playlists} isLoggedin={isLoggedin} />
            )} />
            <Route exact path='/playlist/:id' render={(props) => (
                            <Playlists {...props} plst={playlists} />
            )} />
            <Route exact path='/video/:id'  render={(props) => (
                            <Video {...props} plst={playlists} />
            )} />
            <Route exact path='/subscription'  render={(props) => (
                            <Subscribe {...props}  />
            )} />
            <Route exact path='/login'  render={(props) => (
                            <Login {...props}  />
            )} />
            <Route exact path='/howItWorks'  render={(props) => (
                            <HowItWorks {...props}  />
            )} />
            <Route exact path='/policy'  render={(props) => (
                            <Policy {...props}  />
            )} />
            <Route exact path='/terms'  render={(props) => (
                            <Terms {...props}  />
            )} />
            <Route exact path='/faq'  render={(props) => (
                            <FAQ {...props}  />
            )} />
            <Route exact path='/business'  render={(props) => (
                            <Business {...props}  />
            )} />
        </Router>
    )
}