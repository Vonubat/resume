import React from 'react';
import SkillsAndTools from './SkillsAndTools';
import WorkExperienceRSSchool from './WorkExperienceRSSchool';
import WorkExperienceVector from './WorkExperienceVector';

function Main() {
  return (
    <main className="max-w-[1024px] mx-auto mt-3 flex flex-wrap justify-between">
      <section className="left">
        <WorkExperienceRSSchool />
      </section>
      <section className="right">
        <WorkExperienceVector />
        <SkillsAndTools />
      </section>
    </main>
  );
}

export default Main;
