import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useEffect, useState, useContext } from "react";
import { UserContext } from '../constants/UserContextProvider'

const About = () => {

  const { data } = useContext(UserContext)

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >{data?.user.about.description}
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Services.</h2>
        </motion.div>
        <div className='mt-20 flex flex-wrap gap-10'>

        </div>
        {data?.user.services.map((service, index) => (
          <motion.div key={service._id} variants={fadeIn("right", "spring", index * 0.5, 0.75)} className='w-250px green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
            <Tilt className='xs:w-[250px] w-full'>
              <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
                <img
                  src={data?.user.services[index].image.url}
                  alt='web-development'
                  className='w-full h-full object-contain'
                />
                <h3 className='text-white text-[20px] font-bold text-center'>
                  {data?.user.services[index].name}
                </h3>
              </div>
            </Tilt>
          </motion.div>
        ))}

      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
