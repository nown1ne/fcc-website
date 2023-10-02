import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import vec from "../assets/vec.png"
import { styles } from "../styles";
import styled from './hero.module.css'
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
    <div className={styled.maindiv}>
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Finance and Consulting Club is a student-run society. The club organizes tons of events such as workshops, quizzes, speaker sessions, 
        and competitions, helping students cultivate and 
        polish their skills. The club also empowers students by allowing them to work on projects in collaboration with top clubs of other colleges, hence grooming them before they enter the real professional world.
        <br></br>The vision of the Finance and Consulting Club is to cultivate interest among the students in the financial sector as well as to promote it as a viable career option post their engineering degree. FCC will enable students the oppurtunity to explore the world of Finance, Business consulting, and Analytics.
      </motion.p>
      </div>
      <img className={styled.abtim} style={{height:'450px'}} src={vec}/>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
