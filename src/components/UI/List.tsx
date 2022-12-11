import React from 'react';

type MyProps = {
  children: string[];
};

export const List = ({ children }: MyProps): JSX.Element => {
  return (
    <ul className="marker:content-['-'] ml-5">
      {children.map((item) => (
        <li key={item} className="pl-1">
          {item}
        </li>
      ))}
    </ul>
  );
};
