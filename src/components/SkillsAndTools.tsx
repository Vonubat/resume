import React from 'react';
import { SKILLS_AND_TOOLS } from '../constants';
import { Badge } from './UI/Badge';

export const SkillsAndTools = (): JSX.Element => {
  return (
    <div className="flex flex-col max-w-[450px] mx-2 my-2">
      <h2 className="font-bold leading-loose text-2xl text-slate-600 uppercase">
        Skills / Tools
      </h2>
      <div className="badge-container flex flex-wrap gap-2">
        {SKILLS_AND_TOOLS.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
    </div>
  );
};
