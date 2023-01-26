import React from 'react';

type MyProps = {
  children: string;
};

export const H3 = ({ children }: MyProps): JSX.Element => {
  return (
    <h3 className="font-semibold text-xl text-slate-800 leading-none">
      {children}
    </h3>
  );
};
