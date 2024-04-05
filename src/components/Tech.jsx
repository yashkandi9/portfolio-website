import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { useEffect, useState, useContext } from "react";
import {UserContext} from '../constants/UserContextProvider'

const Tech = () => {
  const {data} = useContext(UserContext)

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {data?.user.skills.filter(data => data.enabled == true).map(filteredData => (
        <div className='w-28 h-28' key={filteredData._id}>
          <p>{filteredData.name} - {filteredData.percentage}%</p>
          <img className="w-14 h-14" src="filteredData.image.url" alt="img" />
          {/* <BallCanvas icon={technologies.icon} /> */}
        </div>
      ))}
      
    </div>
  );
};

export default SectionWrapper(Tech, "");
