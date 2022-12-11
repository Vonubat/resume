import React from 'react';
import { SKILLS_AND_TOOLS } from '../constants';
import { H2 } from './Typography';
import { Badge } from './UI';

export const SkillsAndTools = (): JSX.Element => {
  return (
    <div className="flex flex-col max-w-[450px] mx-2 my-2">
      <H2>Skills / Tools</H2>
      <div className="badge-container flex flex-wrap gap-2">
        {SKILLS_AND_TOOLS.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
    </div>
  );
};
