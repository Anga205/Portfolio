import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import './styles.css';

import { EffectCube, Pagination } from 'swiper/modules';


const Update = (e) => {
    console.log(e)
}

export default function Carousel() {
const images = [
    "https://i.anga.pro/i/pcddh52z4ian.png",
    "https://i.anga.pro/i/bnejfwcjkcaj.png",
    "https://i.anga.pro/i/9ny2s0rwskvo.png",
    "https://i.anga.pro/i/zayvhl0iqtl3.png"
]

return (
    <>
        <Swiper
            effect={'cube'}
            grabCursor={true}
            cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            }}
            pagination={{ 
                clickable: true,
            }}
            modules={[EffectCube, Pagination]}
            onPaginationUpdate={Update}
            className="mySwiper"
        >
            {images.map((src, index) => (
                <SwiperSlide key={index}>
                    <div className='w-full h-full'>
                        <h1>{index}</h1>
                        <img src={src} style={{ border: '2px solid white' }}/>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </>
);
}
