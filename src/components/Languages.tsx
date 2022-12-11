import React from 'react';
import { H2 } from './typography';

export const Languages = (): JSX.Element => {
  return (
    <div className="flex flex-col max-w-[450px] mx-2 my-2">
      <H2>Languages</H2>
      <div className="flex justify-between">
        <span>English - B1</span>
        <span>Russian - Native Speaker</span>
      </div>
    </div>
  );
};
