import React from 'react';
import { Establishments } from '../constants';
import { H2, H3, H4, H5 } from './typography';

export const WorkExperienceVector = (): JSX.Element => {
  return (
    <div className="flex flex-col max-w-[450px] mx-2 my-2">
      <H2>Work Experience</H2>
      <H3>Engineering Project Manager</H3>
      <H4 href={Establishments.vector}>Vector of Technologies</H4>
      <H5>04/2015 - 03/2022</H5>
      <H5>Achievements/Tasks:</H5>
      <ul className="marker:content-['-'] ml-5">
        <li className="pl-1">
          Technical expertise in industrial equipment and processes: variable
          frequency drives, servo systems, machine controllers, industrial
          robots, sensor systems, machine vision solutions.
        </li>
        <li className="pl-1">Estimation of a budget.</li>
        <li className="pl-1">Time-management.</li>
        <li className="pl-1">Monitoring progress.</li>
        <li className="pl-1">
          Quality control and client's satisfaction measurement.
        </li>
        <li className="pl-1">Management of issues and risks.</li>
      </ul>
    </div>
  );
};
