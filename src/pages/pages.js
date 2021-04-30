import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import About from '../pages/about/about';
import Explore from '../pages/explore/explore4k';
import Video from '../pages/video/video';
import Playlists from '../pages/playlist/playlists';
import sha1 from 'crypto-js/sha1';
export default function Pl() {
   /*
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
        let jsonData ='{"where":"id = 1","general":1,"new":1,"favorites":1,"statistic":1,"count":10,"playlists_fields":{"id":0,"name":30,"description":50,"premium":0,"free":0,"duration":0,"pictures":[640,1920],"videos_count":0},"videos":{"count":10,"fields":{"id":0,"name":30,"duration":0,"hdr":0,"pictures":[600],"position":0}}}';
        let signature = sha1(action + data.aPrivateKey + jsonData);
        console.log("privatekey",data.aPrivateKey);
        formData.append('jsonData',jsonData);
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
            {console.log("data",data);})
            .catch(error => {
            console.log("error", error);
        });
        console.log("data",data);

        queryString = "https://4krelax.bringstream.com/Engine/apic/apic.php?action=GetVideoInfo&openKey="+data.aOpenKey;
        action="action=GetVideoInfo&openKey="+data.aOpenKey;
         formData = new FormData();
         jsonData ='{"id":122235239,"fields":{"name":30,"duration":0,"pictures":[640,1920],"hdr":0}}';
         signature = sha1(action + data.aPrivateKey + jsonData);
        console.log("privatekey",data.aPrivateKey);
        formData.append('jsonData',jsonData);
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
            {console.log("data",data);})
            .catch(error => {
            console.log("error", error);
        });
        console.log("data",data);
    }


    
  )
  .catch(error => {
    console.log("error", error);
  });

*/

const plst=
[
{
     "total_playlists": 29,
     "total_videos": 896,
     "total_duration": 5304485,
     "playlists": [
          {
               "id": 1,
               "name": "FREE 4K Videos",
               "description": "This collection features free 4K Nature Videos....",
               "premium": 1,
               "free": 1,
               "duration": 8299,
               "pictures": {
                    "640": "https://i.vimeocdn.com/video/903166493_640x360.jpg?r=pad",
                    "1920": "https://i.vimeocdn.com/video/903166493_1920x1080.jpg?r=pad"
               },
               "videos_count": 50,
               "videos": [
                    {
                         "id": 115516575,
                         "name": "Mount Rainier 1,2,3- Short ...",
                         "duration": 137,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/903166493_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 122235239,
                         "name": "Film in 4k  Mount Rainier N...",
                         "duration": 137,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/511069974_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 151594002,
                         "name": "Breathtaking Painted Hills,...",
                         "duration": 78,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/820614753_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 181771518,
                         "name": "Trailer Relaxation Channel",
                         "duration": 239,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/903167644_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 198538597,
                         "name": "Yellowstone National Park",
                         "duration": 140,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/611553447_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 205682183,
                         "name": "Winter in the Carpathians",
                         "duration": 199,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/620518118_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 215488587,
                         "name": "Journey to Egypt",
                         "duration": 87,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/924220278_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 226863040,
                         "name": "Grand Canyon - Short Preview",
                         "duration": 182,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/903176590_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 228560705,
                         "name": "Flowers & Water - Short Pre...",
                         "duration": 178,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/903168203_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 239288568,
                         "name": "Skagit Valley Tulip Festiva...",
                         "duration": 189,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/903168780_640x360.jpg?r=pad"
                         }
                    }
               ]
          },
          {
               "id": 2,
               "name": "1-Hour Relax Videos with Na...",
               "description": "Enjoy 1-hour relax videos with nature sounds th...",
               "premium": 0,
               "free": 0,
               "duration": 598019,
               "pictures": {
                    "640": "https://i.vimeocdn.com/video/822234503_640x360.jpg?r=pad",
                    "1920": "https://i.vimeocdn.com/video/822234503_1920x1080.jpg?r=pad"
               },
               "videos_count": 160,
               "videos": [
                    {
                         "id": 173528111,
                         "name": "Hole in the Wall Trail, USA",
                         "duration": 3769,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/822234503_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 174369185,
                         "name": "Japanese Garden. Fall",
                         "duration": 3580,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/821232882_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 197785269,
                         "name": "Smith Rock State Park",
                         "duration": 3614,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/694141391_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 211625383,
                         "name": "Hoh River, Early Morning, O...",
                         "duration": 3715,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/691352383_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 230248059,
                         "name": "Duck Pond",
                         "duration": 3612,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/693510861_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 230248127,
                         "name": "Emma Matilda Lake, Grand Te...",
                         "duration": 5477,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/693510544_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 230428260,
                         "name": "Snowy River",
                         "duration": 3925,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/823564688_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 248773104,
                         "name": "Autumn Flames",
                         "duration": 3736,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/674396605_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 248773250,
                         "name": "Sunny Morning",
                         "duration": 3617,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/699581335_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 250158477,
                         "name": "Sunset at Steptoe Butte Sta...",
                         "duration": 3648,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/676175128_640x360.jpg?r=pad"
                         }
                    }
               ]
          },
          {
               "id": 3,
               "name": "4K 8K Screensavers-Wallpapers",
               "description": "4K & 8K Screensavers that will transform your b...",
               "premium": 0,
               "free": 0,
               "duration": 82589,
               "pictures": {
                    "640": "https://i.vimeocdn.com/video/576874236_640x360.jpg?r=pad",
                    "1920": "https://i.vimeocdn.com/video/576874236_1920x1080.jpg?r=pad"
               },
               "videos_count": 11,
               "videos": [
                    {
                         "id": 307517410,
                         "name": "Amazing Landscape Photograp...",
                         "duration": 18027,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/747506106_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 307517433,
                         "name": "Amazing Nature of Washingto...",
                         "duration": 18072,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/747593755_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 307517446,
                         "name": "8K Wallpapers/Screensavers ...",
                         "duration": 519,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/747490538_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 307517465,
                         "name": "Redwood -1",
                         "duration": 10640,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/820885219_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 332211466,
                         "name": "Amazing Forest Screensavers...",
                         "duration": 11074,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/777863808_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 332211474,
                         "name": "Incredible Beauty of Croati...",
                         "duration": 10853,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/822566589_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 436753557,
                         "name": "Zion National Park - TV Scr...",
                         "duration": 3132,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/947749463_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 460031447,
                         "name": "The Beauty of Oregon Waterf...",
                         "duration": 3600,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/974466022_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 460031796,
                         "name": "African Nature and Wildlife...",
                         "duration": 2173,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/974460642_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 460031807,
                         "name": "Zion National Park - 4K TV ...",
                         "duration": 3132,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/974460195_640x360.jpg?r=pad"
                         }
                    }
               ]
          },
          {
               "id": 4,
               "name": "Aquarium Life 4K & 4K HDR",
               "description": "Gorgeous aquariums from all over the world in 4...",
               "premium": 1,
               "free": 0,
               "duration": 14062,
               "pictures": {
                    "640": "https://i.vimeocdn.com/video/724151913_640x360.jpg?r=pad",
                    "1920": "https://i.vimeocdn.com/video/724151913_1920x1080.jpg?r=pad"
               },
               "videos_count": 4,
               "videos": [
                    {
                         "id": 259043615,
                         "name": "Aquarium Life",
                         "duration": 1866,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/724151913_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 293933359,
                         "name": "Waikiki Aquarium, Oahu, Haw...",
                         "duration": 2235,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/730715082_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 298993265,
                         "name": "Seattle Aquarium",
                         "duration": 6357,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/737577252_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 458891380,
                         "name": "Relaxing Dance of Jellyfish...",
                         "duration": 3604,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/959035603_640x360.jpg?r=pad"
                         }
                    }
               ]
          },
          {
               "id": 5,
               "name": "Zoo 4K & 4K HDR",
               "description": "The most famous zoos of the world in premium 4K...",
               "premium": 0,
               "free": 0,
               "duration": 13465,
               "pictures": {
                    "640": "https://i.vimeocdn.com/video/708971052_640x360.jpg?r=pad",
                    "1920": "https://i.vimeocdn.com/video/708971052_1920x1080.jpg?r=pad"
               },
               "videos_count": 6,
               "videos": [
                    {
                         "id": 115516575,
                         "name": "Mount Rainier 1,2,3- Short ...",
                         "duration": 137,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/903166493_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 276056176,
                         "name": "Parrots",
                         "duration": 2171,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/708971052_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 285435421,
                         "name": "Kiev Zoo, Ukraine - Relax V...",
                         "duration": 1245,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/727694938_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 298993365,
                         "name": "Zoo Ljubliana",
                         "duration": 5334,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/820915733_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 301613337,
                         "name": "Zoo, Warsaw, Poland",
                         "duration": 2438,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/820923283_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 301613346,
                         "name": "Zoo in Wroclaw, Poland",
                         "duration": 2140,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/745452903_640x360.jpg?r=pad"
                         }
                    }
               ]
          },
          {
               "id": 6,
               "name": "Gardens 4K & 4K HDR",
               "description": "Turn your TV into a real window to nature and c...",
               "premium": 0,
               "free": 0,
               "duration": 21668,
               "pictures": {
                    "640": "https://i.vimeocdn.com/video/821232882_640x360.jpg?r=pad",
                    "1920": "https://i.vimeocdn.com/video/821232882_1920x1080.jpg?r=pad"
               },
               "videos_count": 8,
               "videos": [
                    {
                         "id": 174369185,
                         "name": "Japanese Garden. Fall",
                         "duration": 3580,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/821232882_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 280532204,
                         "name": "Arboretum Volčji Potok, Slo...",
                         "duration": 1776,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/728175858_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 280532243,
                         "name": "Parco Giardino Sigurtà, Italy",
                         "duration": 1815,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/728173130_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 285435369,
                         "name": "Kiev Botanical Garden, Spring",
                         "duration": 1308,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/727713537_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 320745780,
                         "name": "Lyon Arboretum, Oahu, Hawaii",
                         "duration": 2029,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/824830062_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 323180426,
                         "name": "Japanese Garden-2",
                         "duration": 3593,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/805814982_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 339845886,
                         "name": "Arboretum Oleksandriya in W...",
                         "duration": 3600,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/823562403_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 382169038,
                         "name": "Garden of Eden - Nature Sou...",
                         "duration": 3967,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/843198607_640x360.jpg?r=pad"
                         }
                    }
               ]
          },
          {
               "id": 7,
               "name": "Tropical Beaches 4K & 4K HD...",
               "description": "Best tropical beaches are collected in this pla...",
               "premium": 0,
               "free": 0,
               "duration": 349195,
               "pictures": {
                    "640": "https://i.vimeocdn.com/video/723468180_640x360.jpg?r=pad",
                    "1920": "https://i.vimeocdn.com/video/723468180_1920x1080.jpg?r=pad"
               },
               "videos_count": 44,
               "videos": [
                    {
                         "id": 293929335,
                         "name": "Oahu Beaches- 3",
                         "duration": 14455,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/730801160_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 293929557,
                         "name": "Oahu Beaches, Hawaii - Epis...",
                         "duration": 18000,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/732220321_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 303460819,
                         "name": "Oahu Beaches, Hawaii -1",
                         "duration": 10890,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/822195725_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 303460829,
                         "name": "Oahu Beaches, Hawaii - 2",
                         "duration": 14124,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/767862019_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 314468095,
                         "name": "Ala Moana Beach and Waikiki...",
                         "duration": 1365,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/758903622_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 314468101,
                         "name": "Ala Moana Beach Park, Hawaii",
                         "duration": 707,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/760590917_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 314468306,
                         "name": "Hawaii - Oahu Beaches. Part 1",
                         "duration": 10890,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/900691658_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 318234969,
                         "name": "Pacific Ocean beach with Pa...",
                         "duration": 17989,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/763251863_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 318820973,
                         "name": "Hawaii Oahu Beach. Part 1",
                         "duration": 12598,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/761232539_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 318821105,
                         "name": "Hawaii. Oahu Beaches. Part 2",
                         "duration": 25255,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/761373993_640x360.jpg?r=pad"
                         }
                    }
               ]
          },
          {
               "id": 8,
               "name": "Foreign Languages Films 4K ...",
               "description": "...",
               "premium": 0,
               "free": 0,
               "duration": 51493,
               "pictures": {
                    "640": "https://i.vimeocdn.com/video/827164164_640x360.jpg?r=pad",
                    "1920": "https://i.vimeocdn.com/video/827164164_1920x1080.jpg?r=pad"
               },
               "videos_count": 20,
               "videos": [
                    {
                         "id": 141408966,
                         "name": "(Russian) Beautiful Washing...",
                         "duration": 3178,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/827164164_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 307517488,
                         "name": "(Ukrainian) Amazing Nature:...",
                         "duration": 3231,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/822562428_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 307517506,
                         "name": "(Russian) Amazing Nature: I...",
                         "duration": 3184,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/822562342_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 336757919,
                         "name": "(Russian) Beautiful Washing...",
                         "duration": 2613,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/820933275_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 336757926,
                         "name": "(Ukrainian) Beautiful Washi...",
                         "duration": 2613,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/820933167_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 336758018,
                         "name": "(Russian) Death Valley - 4K...",
                         "duration": 3354,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/820597469_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 336758151,
                         "name": "(Russian) Grand Canyon - 4K...",
                         "duration": 3249,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/820601014_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 336758306,
                         "name": "(Russian) Breathtaking Pain...",
                         "duration": 2295,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/820615559_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 336758336,
                         "name": "(Russian) Redwood National ...",
                         "duration": 2749,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/820884927_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 336758394,
                         "name": "(Ukrainian) Death Valley - ...",
                         "duration": 3354,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/820597606_640x360.jpg?r=pad"
                         }
                    }
               ]
          },
          {
               "id": 9,
               "name": "Nature Documentaries with N...",
               "description": "Enjoy the beauty and magnificence of the top wo...",
               "premium": 0,
               "free": 0,
               "pictures": {
                    "640": "https://i.vimeocdn.com/video/820556492_640x360.jpg?r=pad",
                    "1920": "https://i.vimeocdn.com/video/820556492_1920x1080.jpg?r=pad"
               },
               "videos_count": 0,
               "videos": []
          },
          {
               "id": 10,
               "name": "Nature Documentary Films 4K...",
               "description": "Amazing documentary films that will take you to...",
               "premium": 0,
               "free": 0,
               "duration": 155923,
               "pictures": {
                    "640": "https://i.vimeocdn.com/video/821226526_640x360.jpg?r=pad",
                    "1920": "https://i.vimeocdn.com/video/821226526_1920x1080.jpg?r=pad"
               },
               "videos_count": 43,
               "videos": [
                    {
                         "id": 115527713,
                         "name": "Mount Rainier - 1",
                         "duration": 2932,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/821226526_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 117623291,
                         "name": "Mount Rainier - 2",
                         "duration": 2729,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/821252731_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 118467918,
                         "name": "Mount Rainier - 3",
                         "duration": 2182,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/824498497_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 208810150,
                         "name": "Zion NP. Autumn",
                         "duration": 5030,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/624235760_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 215485568,
                         "name": "Journey to Egypt",
                         "duration": 3018,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/632213216_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 257905983,
                         "name": "Autumn in the Carpathians",
                         "duration": 3435,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/822489249_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 257905987,
                         "name": "Autumn in the Carpathians 2",
                         "duration": 3353,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/805757402_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 257906134,
                         "name": "Beautiful Washington. Part 7",
                         "duration": 3563,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/685944893_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 257906168,
                         "name": "Beautiful Washington. Part 6",
                         "duration": 6544,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/821241703_640x360.jpg?r=pad"
                         }
                    },
                    {
                         "id": 257906233,
                         "name": "Beautiful Washington. Part 8",
                         "duration": 3396,
                         "hdr": 0,
                         "pictures": {
                              "600": "https://i.vimeocdn.com/video/699576018_640x360.jpg?r=pad"
                         }
                    }
               ]
          }
     ]
}];
     const plstz = [
  {
    link: '/playlist/1',
    playlistname: 'New videos',
    videos:[
        {
            id: 1,
            link:'/video/1',
            name:'Sounds of the Pacific Ocean',
            time:'00:03:00',
            img:'https://i.vimeocdn.com/video/904471770_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279246423?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:false

        },
        {
            id: 2,
            link:'/video/2',
            name:'Mana Pools NP, Africa - Short Preview',
            time:'00:03:00',
            img:'https://i.vimeocdn.com/video/903170763_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453846?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:false
        },
        {
            id: 13,
            link:'/video/2',
            name:'Mana Pools NP, Africa - Short Preview',
            time:'00:03:00',
            img:'https://i.vimeocdn.com/video/903170763_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453846?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:false
        },
        {
            id: 12,
            link:'/video/2',
            name:'Mana Pools NP, Africa - Short Preview',
            time:'00:03:00',
            img:'https://i.vimeocdn.com/video/903170763_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453846?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:false
        },
        {
            id: 11,
            link:'/video/2',
            name:'Mana Pools NP, Africa - Short Preview',
            time:'00:03:00',
            img:'https://i.vimeocdn.com/video/903170763_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453846?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:false
        }
    ]
  },
  {
    link: '/playlist/2',
    playlistname: 'FREE 4K & 4K HDR Videos',
    videos:[
        {
            id:3,
            link:'/video/3',
            name:'Hoh Rain Forest',
            time:'00:01:03',
            img:'https://i.vimeocdn.com/video/904334858_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279244369?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=93675",
            lock:false

        },
        {
            id:4,
            link:'/video/4',
            name:'Hoh Rain Forest in Summer',
            time:'00:04:33',
            img:'https://i.vimeocdn.com/video/904331665_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279244319?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:false
        },
        {
            id: 5,
            link:'/video/1',
            name:'Sounds of the Pacific Ocean',
            time:'00:03:00',
            img:'https://i.vimeocdn.com/video/904471770_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279246423?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:false

        },{
            id: 6,
            link:'/video/1',
            name:'Sounds of the Pacific Ocean',
            time:'00:03:00',
            img:'https://i.vimeocdn.com/video/904471770_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279246423?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:false

        },{
            id: 7,
            link:'/video/1',
            name:'Sounds of the Pacific Ocean',
            time:'00:03:00',
            img:'https://i.vimeocdn.com/video/904471770_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279246423?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:false

        }
    ]
  },
  {
    link: '/playlist/3',
    playlistname: 'Aerial Footage 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: ' Tropical Beaches 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Wildlife Videos 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Gardens 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Forests & Woods 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Nature Documentaries with Narration (English) 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Nature Documentary Films 4K & 4K HDR (NO NARRATION)',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Waterfalls 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Virtual Hikes 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Oceans & Seas 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Mountains 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Relax Videos with Nature Sounds 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Part 2 - Relax Videos with Nature Sounds 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: '1-Hour Relax Videos with Nature Sounds in 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Flowers & Flower Fields 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Relax Videos with Soothing Music 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Rivers & Streams 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Lakes 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Sunsets & Sunrises 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Nighttime Relax Videos 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Short Relax Videos 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: ' Foreign Languages Films 4K HDR & 4K',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Stress Relief Videos with Voice Over 4K HDR & 4K',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Campfires 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Autumn Relax Videos 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Winter Relax Videos 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Zoo 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: 'Aquarium Life 4K & 4K HDR',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},{
    link: '/playlist/3',
    playlistname: '4K 8K Screensavers-Wallpapers',
    videos:[
        {
            id:5,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:6,
            link:'/video/6',
            name:'NATURE WALK',
            time:'00:04:22',
            img:'https://i.vimeocdn.com/video/903165113_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279100065?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true
        },
        {
            id:8,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:9,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        },
        {
            id:10,
            link:'/video/5',
            name:'Bryce Canyon- Short Preview',
            time:'00:02:36',
            img:'https://i.vimeocdn.com/video/821569414_640x360.jpg?r=pad',
            src:"https://player.vimeo.com/video/279453831?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=93675",
            lock:true

        }
    ]
},
];
    return (
        <Router>
            <Route exact path='/'  render={(props) => (
                            <Home plst={plst} />
            )} />
            <Route exact path='/about' component={About}  />
            <Route exact path='/explore' 
                        render={(props) => (
                            <Explore plst={plst} />
            )} />
            <Route exact path='/playlist/:id' render={(props) => (
                            <Playlists {...props} plst={plst} />
            )} />
             <Route exact path='/video/:id'  render={(props) => (
                            <Video {...props} plst={plst} />
            )} />
        </Router>
    )
}