import React from 'react';
import LinkIcon from '../../assets/link.png';

type MyProps = {
  children: string;
  href?: string;
  project?: boolean;
};

export const H4 = ({ children, href, project }: MyProps): JSX.Element => {
  const className = `${
    project ? 'font-semibold' : 'text-xl'
  } text-slate-800 flex items-center gap-1`;

  return (
    <h4 className={className}>
      <>
        {children}
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-5 h-5 flex items-center"
          >
            <img src={LinkIcon} alt="LinkIcon" />
          </a>
        )}
      </>
    </h4>
  );
};
