import React from 'react';

type MyProps = {
  children: string;
};

export const H2 = ({ children }: MyProps): JSX.Element => {
  return (
    <h2 className="font-bold leading-loose text-2xl text-slate-600 uppercase">
      {children}
    </h2>
  );
};
