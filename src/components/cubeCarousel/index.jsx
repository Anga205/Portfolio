import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import './cubeStyle.css';

import { Autoplay, EffectCube, Pagination } from 'swiper/modules';

const Buttons = ({ project }) => (
    <div className="flex justify-between space-x-3 w-full select-none pb-4">
        <a href={project.github} target="_blank" className={`text-blue-500 ${project.link ? 'w-1/2' : 'w-full'}`}>
            <button className="flex items-center justify-center space-x-2 bg-white p-2 rounded-md w-full">
                <div className='w-6 h-6'>
                    <img src="github.png" alt="Github" className="w-full h-full rounded-full"/>
                </div>
                <span className='pl-2'>{project.link ? 'Github' : 'View on Github'}</span>
            </button>
        </a>
        {project.link && (
            <a href={project.link} target="_blank" className='text-blue-500 w-1/2'>
                <button className="flex items-center justify-center space-x-2 bg-white p-2 rounded-md w-full">
                    <div className='w-6 h-6 aspect-square'>
                        <img src="web.png" alt="Link" className="w-full h-full aspect-square"/>
                    </div>
                    <span className='pl-3'>Link</span>
                </button>
            </a>
        )}
    </div>
);

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
            loop={true}
            autoplay={{
              delay: 12000,
              disableOnInteraction: true,
            }}
            pagination={{ 
                clickable: true, 
            }}
            modules={[Autoplay, EffectCube, Pagination]}
            className='cube'
        >
            {projects.map((project, index) => (
                <SwiperSlide key={index} className='cube-slide'>
                    <div style={{ backgroundImage: project.gradient }} className='select-none flex flex-col justify-between w-full h-full p-4 rounded-md border-spacing-4 border-gray-700 border-2 overflow-hidden'>
                        <div>
                            <h1 className="w-full text-center text-4xl font-bold">
                                {project.name}
                            </h1>
                            <hr className='m-4'/>
                            <div className="aspect-square w-full">
                                <img src={project.image} className='border-gray-700 border-2 rounded-lg'/>
                            </div>
                            <h3 className='pt-2'>{project.description}</h3>
                        </div>
                        <Buttons project={project} />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </>
);
}

export default Carousel