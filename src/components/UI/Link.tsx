import React from 'react';

type MyProps = {
  href: string;
  children: string;
  src?: string;
};

const ANCHOR_PROPS = {
  target: '_blank',
  rel: 'noopener noreferrer',
  className:
    'underline underline-offset-4 decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out',
};

export const Link = ({ href, children, src }: MyProps): JSX.Element => {
  return (
    <div className="flex flex-nowrap items-center gap-2">
      {src && <img src={src} alt="Icon" className="w-5 h-5" />}
      <a href={href} {...ANCHOR_PROPS}>
        {children}
      </a>
    </div>
  );
};
