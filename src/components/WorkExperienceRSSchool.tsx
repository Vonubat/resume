import React from 'react';
import { Establishments, PROJECTS, RS_SCHOOL, Sections } from '../constants';
import { H2, H3, H4, H5 } from './typography';
import { List } from './ui';

export const WorkExperienceRSSchool = (): JSX.Element => {
  const { position, name, period, achievementsTasks } = RS_SCHOOL;
  const { rickAndMorty, rsLang, asyncRace, shelter, repairWorkshop } = PROJECTS;
  return (
    <div className="flex flex-col max-w-[450px] mx-2 my-2">
      <H2>{Sections.workExperience}</H2>
      <H3>{position}</H3>
      <H4 href={Establishments.rsschool}>{name}</H4>
      <H5>{period}</H5>
      <H5>Achievements/Tasks:</H5>
      <List>{achievementsTasks}</List>

      <H4 href={rickAndMorty.link} project={true}>
        {rickAndMorty.name}
      </H4>
      <List>{rickAndMorty.features}</List>

      <H4 href={rsLang.link} project={true}>
        {rsLang.name}
      </H4>
      <List>{rsLang.features}</List>

      <H4 href={asyncRace.link} project={true}>
        {asyncRace.name}
      </H4>
      <List>{asyncRace.features}</List>

      <H4 href={shelter.link} project={true}>
        {shelter.name}
      </H4>
      <List>{shelter.features}</List>

      <H4 href={repairWorkshop.link} project={true}>
        {repairWorkshop.name}
      </H4>
      <List>{repairWorkshop.features}</List>
    </div>
  );
};
