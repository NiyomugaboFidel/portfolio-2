import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; // Import Splide CSS
import ProjectCard from './common/ProjectCard'; // Ensure you have this component
import { ProjectItems } from './data/projects';

const ProjectSlider = () => {
    return (
      <div className='w-full overflow-hidden '>
        <Splide
          options={{
            type: 'loop',
            drag:'free',
            focus: 'center',
            perPage: 3,
            perMove: 1,
            gap: '32px',
            pagination: false,
            breakpoints: {
              640: {
                perPage: 1,
                gap: '20px',
              },
              768: {
                perPage: 2,
                gap: '20px',
              },
              1024: {
                perPage: 2,
                gap: '25px',
              },
              1280: {
                perPage: 2,
                gap: '30px',
              },
              1440: {
                perPage: 3,
                gap: '32px',
              },
              1560:{
                perPage: 3,
                gap:'32px'
              },
              1920: {
                perPage: 3,
                gap: '40px',
              },
              2560: {
                perPage: 4,
                gap: '40px',
              },
              3560:{
                perPage: 5 ,
                gap:'40px'
              }
            },
          }}
          aria-label="My Projects"
        >
          {ProjectItems.map((item, index) => (
            <SplideSlide key={index}>
              <ProjectCard
               item={item}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    );
  };
  
  export default ProjectSlider;
  