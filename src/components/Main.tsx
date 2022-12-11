import React from 'react';
import Education from './Education';
import Languages from './Languages';
import { SkillsAndTools } from './SkillsAndTools';
import WorkExperienceRSSchool from './WorkExperienceRSSchool';
import WorkExperienceVector from './WorkExperienceVector';

function Main() {
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
}

export default Main;
