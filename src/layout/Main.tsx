import React from 'react';
import {
  SkillsAndTools,
  Education,
  Languages,
  Projects,
  WorkExperience,
} from '../components';

export const Main = (): JSX.Element => {
  return (
    <main className="max-w-[1024px] mx-auto mt-3 flex flex-wrap justify-around lg:justify-between">
      <section className="left flex flex-col gap-5">
        <SkillsAndTools />
        <WorkExperience />
        <Education />
        <Languages />
      </section>
      <section className="right flex flex-col gap-5">
        <Projects />
      </section>
    </main>
  );
};
