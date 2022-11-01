import React from 'react';

function Education() {
  return (
    <div className="flex flex-col max-w-[450px] mx-2 my-2">
      <h2 className="font-bold leading-loose text-2xl text-slate-600 uppercase">
        Education
      </h2>
      <h3 className="font-semibold leading-none text-xl text-slate-800">
        Belarusian National Technical University. Information Technologies and
        Robotics Faculty
      </h3>
      <h4 className=" text-xl leading-none text-slate-800 flex items-center gap-1">
        Automation of Technological Processes and Production
      </h4>
      <h5 className="font-light italic leading-normal text-gray-500">
        09/2010 - 06/2016
      </h5>
      <h5 className="font-light italic leading-thin text-gray-500">Details:</h5>
      <ul className="marker:content-['-'] ml-5">
        <li className="pl-1">Degree: Master of Engineering.</li>
        <li className="pl-1">Grade Point Average: 8.5 out of 10.</li>
      </ul>
    </div>
  );
}

export default Education;
