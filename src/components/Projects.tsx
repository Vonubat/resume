import React from 'react';
import { PROJECTS, Sections } from '../constants';
import { H2, H4 } from './typography';
import { List } from './ui';

export const Projects = (): JSX.Element => {
  const { rickAndMorty, rsLang, asyncRace, shelter, repairWorkshop } = PROJECTS;
  return (
    <div className="flex flex-col max-w-[450px] mx-2 my-2">
      <H2>{Sections.projects}</H2>

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
