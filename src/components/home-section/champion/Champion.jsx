import React from "react";
import "./champion.scss";
import {Swiper, SwiperSlide} from 'swiper/react'

import SwiperCore, { Autoplay } from 'swiper';


import ChampionCard from "./ChampionCard";
import HomeSection from "../HomeSection";


import {bg2} from '../../../assets/images'
import {championsData} from '../../../assets/dummy'

const Champion = (props) => {
    SwiperCore.use([Autoplay]);

  return (
    <HomeSection
      className={`champion ${props.isActive ? "active" : ""}`}
      contentClassName="overlay bg-image"
      bgImage={bg2}
    >
        <div className="container relative">
            <div className="champion-list">
                <h5 style={{textAlign:'center'}}>GRAB RIGHT TO VIEW MORE</h5>
            <Swiper
                // modules={[Autoplay]}
                slidesPerView={4}
                spaceBetween={5}
                grabCursor={true}
                nested={true}
                // autoplay={{delay:3000}}
            >
                {
                    championsData.map((item,i) => (
                        <SwiperSlide key={i}>
                            <ChampionCard  item={item} id={i}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            </div>
        </div>
    </HomeSection>
  );
};

export default Champion;
