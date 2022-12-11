import React from 'react';
import { Sections, SKILLS_AND_TOOLS } from '../constants';
import { H2 } from './typography';
import { Badge } from './ui';

export const SkillsAndTools = (): JSX.Element => {
  return (
    <div className="flex flex-col max-w-[450px] mx-2 my-2">
      <H2>{Sections.skillsAndTools}</H2>
      <div className="badge-container flex flex-wrap gap-2">
        {SKILLS_AND_TOOLS.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
    </div>
  );
};
