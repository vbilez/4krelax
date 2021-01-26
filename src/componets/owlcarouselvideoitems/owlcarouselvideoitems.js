import React from 'react';

const OwlCarouselVideoItems = (props) => {
   
   return <React.Fragment>{props.videos.map((item) => {
       var itemstyle = item.lock ? 'item-style-lock':'item-style-play';
    return  <div className="item">
                                <a href={item.link}>
                                    <div className={"c-item-style " + (itemstyle)}>
                                        <div className="marks"><div className="new"></div></div>
                                        <img src={item.img} alt={item.name}/> 
                                    </div>
                                    <div className="c-item-info  row justify-content-between">
                                        <div className="col-8"><p className="cir-st1">{item.name}</p></div>
                                        <div className="col-4 c-item-info--st2 pri"><p className="cir-st2">{item.time}</p></div>
                                    </div>
                                </a>
                            </div>
  })}</React.Fragment>
}

export default OwlCarouselVideoItems;

