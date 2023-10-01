import React,{ useContext } from 'react';
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projecti } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
    name,
    image,
  }) => {
    return (
      <div className='p-9' >
        <div 
          className='bg-tertiary p-5 rounded-xl sm:w-[300px] w-full'
          styles={{boxShadow: "0px 0px 30px #ffffff"}}>
          <div className='relative w-full h-[200px]'>
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl'
            />
  
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              
            </div>
          </div>
  
          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          </div>

        </div>
      </div>
    );
  };
  
  const Sponsors = () => {
    return (
      <>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} `}>Our Backers
</p>
          <h2 className={`${styles.sectionHeadText}`}>Sponsors.</h2>
        </motion.div>
    
        <div className='mt-10'>
        <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
          {projecti.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} /> 
          ))}
          </Marquee>
        </div>
      </>
    );
  };
  
  export default SectionWrapper(Sponsors, "sponsors");
  