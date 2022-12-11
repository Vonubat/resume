import React from 'react';
import { Establishments, RS_SCHOOL, Sections, VECTOR } from '../constants';
import { H2, H3, H4, H5 } from './typography';
import { List } from './ui';

export const WorkExperience = (): JSX.Element => {
  return (
    <div className="max-w-[450px] mx-2 my-2">
      <H2>{Sections.workExperience}</H2>
      <div className="work-experience-container flex flex-col gap-5">
        <div>
          <H3>{RS_SCHOOL.position}</H3>
          <H4 href={Establishments.rsschool}>{RS_SCHOOL.name}</H4>
          <H5>{RS_SCHOOL.period}</H5>
          <H5>Achievements/Tasks:</H5>
          <List>{RS_SCHOOL.achievementsTasks}</List>
        </div>
        <div>
          <H3>{VECTOR.position}</H3>
          <H4 href={Establishments.vector}>{VECTOR.name}</H4>
          <H5>{VECTOR.period}</H5>
          <H5>Achievements/Tasks:</H5>
          <List>{VECTOR.achievementsTasks}</List>
        </div>
      </div>
    </div>
  );
};
