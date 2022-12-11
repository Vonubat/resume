import React from 'react';
import { EDUCATION, Sections } from '../constants';
import { H2, H3, H4, H5 } from './typography';
import { List } from './ui';

export const Education = (): JSX.Element => {
  const { name, speciality, period, achievementsTasks } = EDUCATION;
  return (
    <div className="flex flex-col max-w-[450px] mx-2 my-2">
      <H2>{Sections.education}</H2>
      <H3>{name}</H3>
      <H4>{speciality}</H4>
      <H5>{period}</H5>
      <H5>Details:</H5>
      <List>{achievementsTasks}</List>
    </div>
  );
};
