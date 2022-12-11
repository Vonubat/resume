import React from 'react';

type MyProps = {
  children: string;
};

export const H5 = ({ children }: MyProps): JSX.Element => {
  return (
    <h5 className="font-light italic leading-normal text-gray-500">
      {children}
    </h5>
  );
};
