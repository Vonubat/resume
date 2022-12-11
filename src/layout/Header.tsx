import React from 'react';
import Avatar from '../assets/avatar.jpg';
import { HEADER } from '../constants';

export const Header = (): JSX.Element => {
  const { position, name, description } = HEADER;
  return (
    <header className="flex justify-center flex-wrap items-center mt-5 max-w-[1024px] mx-auto">
      <img
        src={Avatar}
        className="rounded-full w-32 shadow-lg mt-3"
        alt="Avatar"
      />
      <div className="summary mx-5 w-2/3">
        <h1 className="font-medium leading-tight text-4xl text-slate-800 whitespace-nowrap">
          {name}
        </h1>
        <h2 className="font-medium leading-tight text-xl text-gray-500">
          {position}
        </h2>
        <h3 className="text-base leading-none mt-1">{description}</h3>
      </div>
    </header>
  );
};
