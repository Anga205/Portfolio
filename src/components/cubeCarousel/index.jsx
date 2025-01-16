import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import './styles.css';

import { EffectCube, Pagination } from 'swiper/modules';


const Update = (e) => {
    console.log(e)
}

const Carousel = ({ projects }) => {

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
            {projects.map((project, index) => (
                <SwiperSlide key={index}>
                    <div style={{ 
                        backgroundColor: project.background, 
                        border: '4px solid white',
                    }} className='w-full h-full p-4'>
                        <h1>{project.name}</h1>
                        <img src={project.image}/>
                        <h3>{project.description}</h3>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </>
);
}

export default Carousel