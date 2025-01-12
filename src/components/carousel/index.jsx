import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import './styles.css';

import { EffectCube, Pagination } from 'swiper/modules';

export default function Carousel() {
const images = [
    "/angadrive.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg"
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
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper"
        >
            {images.map((src, index) => (
                <SwiperSlide key={index}>
                    <img src={src} style={{ border: '2px solid white' }} />
                </SwiperSlide>
            ))}
        </Swiper>
    </>
);
}
