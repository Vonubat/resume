import React from 'react';
import { Establishments, Sections, VECTOR } from '../constants';
import { H2, H3, H4, H5 } from './typography';
import { List } from './ui';

export const WorkExperienceVector = (): JSX.Element => {
  const { position, name, period, achievementsTasks } = VECTOR;
  return (
    <div className="flex flex-col max-w-[450px] mx-2 my-2">
      <H2>{Sections.workExperience}</H2>
      <H3>{position}</H3>
      <H4 href={Establishments.vector}>{name}</H4>
      <H5>{period}</H5>
      <H5>Achievements/Tasks:</H5>
      <List>{achievementsTasks}</List>
    </div>
  );
};
