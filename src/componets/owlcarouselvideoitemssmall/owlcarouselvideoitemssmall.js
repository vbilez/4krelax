import React from 'react';

const OwlCarouselVideoItemsSmall = (props) => {
   function handleClick(name,link,img,ev){
       console.log(ev);
       document.getElementById("free_preview_name").innerHTML=name;
       document.getElementById("watch_free_preview").setAttribute("href",link);
      document.getElementsByClassName("free-preview")[0].setAttribute("style",
      "background-image: url('"+img+"'); display: block;"
      );
       console.log(name);
   };
   return <React.Fragment>{props.videos.map((item) => {
       var itemstyle = item.lock ? 'item-style-lock':'item-style-play';
    return  <div key={item.id} className="item" onClick={(e) => handleClick(item.name,item.link,item.img, e)}>
                              
                                    <div className={"c-item-style " + (itemstyle)}>
                                        
                                        <img src={item.img} alt={item.name}/> 
                                    </div>
                                   
                             
                            </div>
  })}</React.Fragment>
}

export default OwlCarouselVideoItemsSmall;

