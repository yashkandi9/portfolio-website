import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useEffect, useState, useContext } from "react";
import { UserContext } from '../constants/UserContextProvider'

const Education = () => {
  const { data } = useContext(UserContext)

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Eucation.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
      {data?.user.timeline && data.user.timeline.filter(data => data.forEducation === true).length > 0 && (
        <VerticalTimeline key={0}>
          {data?.user.timeline.filter(data => data.forEducation === true).map(filteredData => (

            <VerticalTimelineElement key={filteredData._id}
              contentStyle={{
                background: "#1d1836",
                color: "#fff",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            >
              <div>
                <h3 className='text-white text-[24px] font-bold'>{filteredData.jobTitle}</h3>
                <p
                  className='text-secondary text-[16px] font-semibold'
                  style={{ margin: 0 }}
                >
                  {filteredData.company_name}
                </p>
                <p className='text-secondary text-[16px] font-semibold'
                  style={{ margin: 0 }}>Start Date -
                  {filteredData.startDate} <br />
                  End Date - {filteredData.endDate}
                </p>
              </div>

              <ul className='mt-5 list-disc ml-5 space-y-2'>
                {filteredData.bulletPoints.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className='text-white-100 text-[14px] pl-1 tracking-wider'
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      )}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "edu");