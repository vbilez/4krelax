import React from 'react';

const OwlCarouselVideoItems = (props) => {
   console.log(props.videos);
   return <React.Fragment>{props.videos.map((item) => {
       var itemstyle = true ? 'item-style-lock':'item-style-play';
       let itemlink = "video/"+item.id;
       let date = new Date(0);
        date.setSeconds(item.duration); // specify value for SECONDS here

       let itemtime = date.toISOString().substr(11, 8);
    return  <div key={item.id} className="item">
                                <a href={itemlink}>
                                    <div className={"c-item-style " + (itemstyle)}>
                                        <div className="marks"><div className="new"></div></div>
                                        <img src={item.pictures['600']} alt={item.name}/> 
                                    </div>
                                    <div className="c-item-info  row justify-content-between">
                                        <div className="col-8"><p className="cir-st1">{item.name}</p></div>
                                        <div className="col-4 c-item-info--st2 pri"><p className="cir-st2">{itemtime}</p></div>
                                    </div>
                                </a>
                            </div>
  })}</React.Fragment>
}

export default OwlCarouselVideoItems;

