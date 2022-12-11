import React from 'react';
import {
  SkillsAndTools,
  Education,
  Languages,
  WorkExperienceRSSchool,
  WorkExperienceVector,
} from '../components';

export const Main = (): JSX.Element => {
  return (
    <main className="max-w-[1024px] mx-auto mt-3 flex flex-wrap justify-around lg:justify-between">
      <section className="left">
        <WorkExperienceRSSchool />
      </section>
      <section className="right flex flex-col gap-10">
        <WorkExperienceVector />
        <SkillsAndTools />
        <Education />
        <Languages />
      </section>
    </main>
  );
};
