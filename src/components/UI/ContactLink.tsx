import React from 'react';

type MyProps = {
  src: string;
  href: string;
  children: string;
};

const ANCHOR_PROPS = {
  target: '_blank',
  rel: 'noopener noreferrer',
  className:
    'underline underline-offset-4 decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out',
};

export const ContactLink = ({ src, href, children }: MyProps): JSX.Element => {
  return (
    <div className="flex flex-nowrap items-center gap-2">
      <img src={src} alt="Icon" className="w-5 h-5" />
      <a href={href} {...ANCHOR_PROPS}>
        {children}
      </a>
    </div>
  );
};
