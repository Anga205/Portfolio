import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './sliderStyle.css';

import { FaGolang, FaReact, FaNodeJs } from 'react-icons/fa6';
import { SiExpress } from 'react-icons/si';

import { Keyboard, Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

const Buttons = ({ project }) => (
  <div className="flex justify-between space-x-[1vh] w-full select-none pb-[2vh]">
      <a href={project.github} target="_blank" className={`text-blue-500 ${project.link ? 'w-1/2' : 'w-full'}`}>
          <button className="flex items-center justify-center space-x-[1vh] bg-white p-[1vh] rounded-[0.5vh] w-full">
              <div className='w-[3vh] h-[3vh]'>
                  <img src="github.svg" alt="Github" className="w-full h-full aspect-square rounded-full"/>
              </div>
              <span className='pl-[1vh] text-[1.7vh] font-mono'>{project.link ? 'Github' : 'View on Github'}</span>
          </button>
      </a>
      {project.link && (
          <a href={project.link} target="_blank" className='text-blue-500 w-1/2'>
              <button className="flex items-center justify-center space-x-[1vh] bg-white p-[1vh] rounded-md w-full">
                  <div className='w-[3vh] h-[3vh] aspect-square'>
                      <img src="web.png" alt="Link" className="w-full h-full aspect-square"/>
                  </div>
                  <span className='font-mono pl-[1vh] text-[1.7vh]'>Link</span>
              </button>
          </a>
      )}
  </div>
)

const Tag = ({ tag }) => {
  if (tag.toLowerCase() === 'go') {
    return (
      <div className='flex items-center bg-blue-500 p-[1vh] space-x-[0.5vh] rounded-full bg-opacity-45 h-[4vh]'>
        <div className="h-full aspect-square">
          <FaGolang className='w-full h-full text-[#00ADD8]'/>
        </div>
        <div className='font-mono text-[1.7vh]'>{tag}</div>
      </div>
    );
  } else if (tag.toLowerCase() === 'python') {
    return (
      <div className='flex items-center bg-yellow-500 p-[1vh] space-x-[0.5vh] rounded-full bg-opacity-45 h-[4vh]'>
        <div className="h-full aspect-square">
          <img src={`/${tag.toLowerCase()}.svg`} alt={tag} />
        </div>
        <div className='font-mono text-[1.7vh]'>{tag}</div>
      </div>
    );
  } else if (tag.toLowerCase() === 'mongodb') {
    return (
      <div className='flex items-center bg-green-500 p-[1vh] space-x-[0.5vh] rounded-full bg-opacity-45 h-[4vh]'>
        <div className="h-full aspect-square">
        <img src={`/${tag.toLowerCase()}.svg`} alt={tag} />
        </div>
        <div className='font-mono text-[1.7vh]'>{tag}</div>
      </div>
    );
  } else if (tag.toLowerCase() === 'sqlite') {
    return (
      <div className='flex items-center bg-gray-500 p-[1vh] space-x-[0.5vh] rounded-full bg-opacity-45 h-[4vh]'>
        <div className="h-full aspect-square">
          <img src={`/${tag.toLowerCase()}.svg`} alt={tag} />
        </div>
        <div className='font-mono text-[1.7vh]'>{tag}</div>
      </div>
    );
  } else if (tag.toLowerCase() === 'react') {
    return (
      <div className='flex items-center bg-blue-300 p-[1vh] space-x-[0.5vh] rounded-full bg-opacity-45 h-[4vh]'>
        <div className="h-full aspect-square">
          <FaReact className='w-full h-full text-[#61DAFB]'/>
        </div>
        <div className='font-mono text-[1.7vh]'>{tag}</div>
      </div>
    );
  } else if (tag.toLowerCase() === 'nodejs') {
    return (
      <div className='flex items-center bg-green-300 p-[1vh] space-x-[0.5vh] rounded-full bg-opacity-45 h-[4vh]'>
        <div className="h-full aspect-square">
          <FaNodeJs className='w-full h-full text-[#8cc84b]'/>
        </div>
        <div className='font-mono text-[1.7vh]'>{tag}</div>
      </div>
    );
  } else if (tag.toLowerCase() === 'express') {
    return (
      <div className='flex items-center bg-gray-500 p-[1vh] space-x-[0.5vh] rounded-full bg-opacity-45 h-[4vh]'>
        <div className="h-full aspect-square">
          <SiExpress className='w-full h-full text-[#000]'/>
        </div>
        <div className='font-mono text-[1.7vh]'>{tag}</div>
      </div>
    );
  } else if (tag.toLowerCase() === 'mysql') {
    return (
      <div className='flex items-center bg-blue-900 p-[1vh] space-x-[0.5vh] rounded-full bg-opacity-45 h-[4vh]'>
        <div className="h-full aspect-square">
          <img src={`/${tag.toLowerCase()}.svg`} alt={tag} />
        </div>
        <div className='font-mono text-[1.7vh]'>{tag}</div>
      </div>
    )
  }
};

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
          delay: 12000,
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
          <SwiperSlide style={{ backgroundImage: project.gradient, height: '100%' }} key={index} className='slider-slide rounded-[0.7vh] p-[0.5vh]'>
            <div className='flex w-full h-full'>
              <div className='flex flex-col w-1/2 p-[1.5vh] h-full justify-between'>
                <div/><div/><div/>
                <div>
                  <p className='text-[5vh] font-semibold w-full text-center font-sans'>{project.name}</p>
                  <hr className='border-gray-600'/>
                </div>
                <p className='text-[2vh] font-mono'>{project.description}</p>
                <div/>
                <div>
                  <Buttons project={project} />
                </div><div/>
                <p className='text-[2vh]'>Technologies:</p>
                <div className='flex justify-start space-y-[1vh] space-x-[1vh] flex-wrap'>
                  <div/>
                  {project.tags.map((tag, tagIndex) => (
                    <Tag key={tagIndex} tag={tag} />
                  ))}
                </div>
                <div/>
              </div>
              <div className='w-1/2 h-full flex justify-end items-center'>
                <div className='h-full aspect-square'>
                  <img src={project.image} alt={project.name} className='rounded-[0.2vh] w-full h-full'/>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export {Slider, Tag};