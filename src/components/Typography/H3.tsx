import React from 'react';

type MyProps = {
  children: string;
};

export const H3 = ({ children }: MyProps): JSX.Element => {
  return (
    <h3 className="font-semibold leading-none text-xl text-slate-800">
      {children}
    </h3>
  );
};
