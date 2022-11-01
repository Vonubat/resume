import React from 'react';
import LinkIcon from './../assets/link.png';

function WorkExperienceVector() {
  return (
    <div className="flex flex-col max-w-[450px] mx-2 my-2">
      <h2 className="font-bold leading-loose text-2xl text-slate-600">
        Work Experience
      </h2>
      <h3 className="font-semibold leading-none text-xl text-slate-800">
        Engineering Project Manager
      </h3>
      <h4 className=" text-xl text-slate-800 flex items-center gap-1">
        Vector of Technologies
        <a
          href="https://vec-tech.by/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-5 h-5 flex items-center"
        >
          <img src={LinkIcon} alt="LinkIcon" />
        </a>
      </h4>
      <h5 className="font-light italic leading-normal text-gray-500">
        04/2015 - 03/2022
      </h5>
      <h5 className="font-light italic leading-thin text-gray-500">
        Achievements/Tasks:
      </h5>
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
}

export default WorkExperienceVector;
