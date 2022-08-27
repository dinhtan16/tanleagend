import React from 'react'
import {
    Swiper,SwiperSlide
} from 'swiper/react'
import SwiperCore,{EffectFade,Mousewheel,Pagination,Navigation} from 'swiper'

import {Welcome,Champion,ChampionDetail,Trailer,Credit} from '../components/home-section'

import {championsData} from  '../assets/dummy'

SwiperCore.use([Mousewheel,EffectFade,Pagination,Navigation])
const swiperOptions = {
    direction :'vertical',
    slidesPerView : 1,
    mousewheel:true,
    pagination:true,
    effect:'fade',
    speed:1000,
    
}
const Home = () => {
  return (
    <div>
        <Swiper {...swiperOptions}>
            <SwiperSlide>
             {({isActive}) => (

                <Welcome isActive={isActive} />
             )}
            </SwiperSlide>
            <SwiperSlide>
            {({isActive}) => (

                <Champion isActive={isActive} />
                )}
            </SwiperSlide>
            <SwiperSlide>
            {({isActive}) => (

                <Trailer isActive={isActive} />
                )}
            </SwiperSlide>
            <SwiperSlide>
            {({isActive}) => (

                <Credit isActive={isActive} />
                )}
            </SwiperSlide>
        </Swiper>
        {
            championsData.map((item,index) => (
                <ChampionDetail key={index}
                item={item}
                id={index}
                />
            ))
        }
        <div className="scroll">
            GRAB UP/DOWN TO SEE MORE
        </div>
    </div>
  )
}

export default Home