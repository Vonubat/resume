import React from 'react';
import { H2, H3, H4, H5 } from './typography';

export const Education = (): JSX.Element => {
  return (
    <div className="flex flex-col max-w-[450px] mx-2 my-2">
      <H2>Education</H2>
      <H3>
        Belarusian National Technical University. Information Technologies and
        Robotics Faculty
      </H3>
      <H4>Automation of Technological Processes and Production</H4>
      <H5>09/2010 - 06/2016</H5>
      <H5>Details:</H5>
      <ul className="marker:content-['-'] ml-5">
        <li className="pl-1">Degree: Master of Engineering.</li>
        <li className="pl-1">Grade Point Average: 8.5 out of 10.</li>
      </ul>
    </div>
  );
};
