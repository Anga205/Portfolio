import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './sliderStyle.css';
import Tilt from 'react-parallax-tilt';

import { Keyboard, Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

const Buttons = ({ project }) => (
  <div className="flex justify-between space-x-3 w-full select-none pb-4">
      <a href={project.github} target="_blank" className={`text-blue-500 ${project.link ? 'w-1/2' : 'w-full'}`}>
          <button className="flex items-center justify-center space-x-2 bg-white p-2 rounded-md w-full">
              <div className='w-6 h-6'>
                  <img src="github.png" alt="Github" className="w-full h-full"/>
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
)

const Slider = ({ projects }) => {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 50,
          modifier: 5,
          slideShadows: true,
        }}
        keyboard={{
          enabled: true,
        }}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination, Keyboard]}
        className="slider"
        style={{ height: '100vh' }}
      >
        {projects.map((project, index) => (
          <SwiperSlide style={{ backgroundImage: project.gradient, height: '100%' }} key={index} className='slider-slide'>
            <div className='flex w-full h-full'>
              <div className='flex flex-col w-1/2 p-4 h-full justify-between'>
                <div/><div/><div/>
                <div>
                  <p className='text-[5vh] font-semibold w-full text-center font-mono'>{project.name}</p>
                  <hr className='border-gray-600'/>
                </div>
                <p className='text-[2vh] font-mono'>{project.description}</p>
                <div/>
                <div>
                  <Buttons project={project} />
                </div><div/>
                <div className='flex justify-center'>
                  <p>hello</p>
                  <p>hello</p>
                </div>
                <div/>
              </div>
              <div className='w-1/2 aspect-square p-4'>
                <img src={project.image} alt={project.name} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Slider;