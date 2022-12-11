import React from 'react';
import Avatar from '../assets/avatar.jpg';

export const Header = (): JSX.Element => {
  return (
    <header className="flex justify-center flex-wrap items-center mt-5 max-w-[1024px] mx-auto">
      <img
        src={Avatar}
        className="rounded-full w-32 shadow-lg mt-3"
        alt="Avatar"
      />
      <div className="summary mx-5 w-2/3">
        <h1 className="font-medium leading-tight text-4xl text-slate-800 whitespace-nowrap">
          Egor Tabunov
        </h1>
        <h2 className="font-medium leading-tight text-xl text-gray-500">
          Front-end Developer
        </h2>
        <h3 className="text-base leading-none mt-1">
          Passionate front-end developer with experience using JavaScript,
          TypeScript and React framework. My core strengths are well-developed
          analytical and interpersonal skills, ability to deeply understand the
          project logic and processes in a short time
        </h3>
      </div>
    </header>
  );
};
