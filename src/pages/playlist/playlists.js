  import React from 'react'
  import { Icon, InlineIcon } from '@iconify/react';
  import playCircleO from '@iconify-icons/fa/play-circle-o';
  import "./playlists.css";
  import "../../componets/header/header.css";
  import sha1 from 'crypto-js/sha1';
  const Playlists = (playlists) => {
    console.log(playlists.plst);
    let myplaylist;
    async function GetPlaylist(){
    const privateKey="~UniHash-767250902345~";
      let action = "action=LoginAnonymous";
      let endpoint = "https://4krelax.bringstream.com/Engine/apic/apic.php?";
      let queryString = "https://4krelax.bringstream.com/Engine/apic/apic.php?"+action;
        //const logindata ={"emailLogin":{"email":"dk@itf-ua.org","password":"&Px5foU7J[$g2[^"}};
      let formData = new FormData();
      let signature= sha1(action+privateKey+'{}')
  formData.append('jsonData','{}');
  formData.append('signature',signature);

      fetch(queryString, {
          mode:"cors",
          method:"POST",
          body:formData
  })
    .then((response) => {
      
      return response.json();
    })
    .then(data => 
      {
          queryString = "https://4krelax.bringstream.com/Engine/apic/apic.php?action=GetPlaylists&openKey="+data.aOpenKey;
          action="action=GetPlaylists&openKey="+data.aOpenKey;
          let formData = new FormData();
          let plid =playlists.match.params.id;
          let jsonData =`{"where":"id = ${plid}","general":1,"new":1,"favorites":1,"statistic":1,"count":10,"playlists_fields":{"id":0,"name":30,"description":50,"premium":0,"free":0,"duration":0,"pictures":[640,1920],"videos_count":0},"videos":{"count":10,"fields":{"id":0,"name":30,"duration":0,"hdr":0,"pictures":[600],"position":0}}}`;
          let signature = sha1(action + data.aPrivateKey + jsonData);
          console.log("privatekey",data.aPrivateKey);
          formData.append('jsonData',jsonData);
          formData.append('signature',signature);
          myplaylist= fetch(queryString, {
                  mode:"cors",
                  method:"POST",
                  body:formData
          })
          .then((response) => {

              return response.json();
          })
          .then(data => 
              {})
              .catch(error => {
              console.log("error", error);
          });
          console.log("data",data);

      }


      
    )
    .catch(error => {
      console.log("error", error);
    });
  }

      // if(playlists.plst!=null&&Array.isArray(playlists.plst))
      // {
      //     if(typeof playlists.plst[playlists.match.params.id-1] === 'object')
      //     {
      //       myplaylist=playlists.plst[playlists.match.params.id-1];
      //     }
        
      // }

      playlists.plst[0].playlists.forEach(item=>{
          if(playlists.match.params.id==item.id)
            {myplaylist=item;}
      });
        console.log(myplaylist);
      if (myplaylist==null ) return(<div>123</div>);
      console.log(myplaylist);
      return (
        <section className="playlists-s">
    <div className="container">
          <div className="row">

        <div className="col">
          <div className="title-carousel">
          <div>
            <h1>
            <a href="#">
              <Icon icon={playCircleO} />
              <span>{myplaylist.name}</span>
            </a>
          </h1>
              <div className="playlist-desc">{myplaylist.description}</div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="row" >



  {
    myplaylist.videos.map((item) => {
      let itemlink ="video/"+item.id;
        let date = new Date(0);
          date.setSeconds(item.duration); // specify value for SECONDS here

        let itemtime = date.toISOString().substr(11, 8);
    return (<div style={{margin:"10px"}} className="col-12 col-sm-6 col-md-6 col-lg-4" >
      <div className="item item-pl">
        <a href={itemlink}>
        <div className="c-item-style item-style-play">
            <div className="marks"><div className="free"></div></div>        <img src={item.pictures[600]} alt={item.name}/> 
        </div>
        <div className="c-item-info  row justify-content-between">
          <div className="col-8" ><p className="cir-st1">{item.name}</p></div>
          <div className="col-4 c-item-info-st2"><p className="cir-st2">{itemtime}</p></div>
        </div>
      </a>
    </div>
  </div>);
    })
  }






    
    

  </div>
  </div>
  </section>
      )
  }

  export default Playlists;