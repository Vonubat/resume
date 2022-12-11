import React from 'react';

type MyProps = {
  children: string;
};

export const Badge = ({ children }: MyProps): JSX.Element => {
  return (
    <span className="inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-800 text-white rounded">
      {children}
    </span>
  );
};
