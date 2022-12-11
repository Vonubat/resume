import React from 'react';
import { Establishments } from '../constants';
import LinkIcon from './../assets/link.png';
import { H2, H3, H4, H5 } from './typography';

export const WorkExperienceRSSchool = (): JSX.Element => {
  return (
    <div className="flex flex-col max-w-[450px] mx-2 my-2">
      <H2>Work Experience</H2>
      <H3>Front-end Developer Intern</H3>
      <H4 href={Establishments.rsschool}>The Rolling Scopes School</H4>
      <H5>03/2022 - 12/2022</H5>
      <H5>Achievements/Tasks:</H5>
      <ul className="marker:content-['-'] ml-5">
        <li className="pl-1">Cross-checking and code-reviewing (36 cases).</li>
        <li className="pl-1">
          Passing 48 tests on front-end development skills.
        </li>
        <li className="pl-1">
          I have personal mentor from EPAM Systems, which review and evaluate my
          projects. Also he gave me pieces of advice for improving my code and
          core knowledges.
        </li>
        <li className="pl-1">
          Solve development tasks according to technical requirements. Fraction
          of my projects:
        </li>
      </ul>
      <h4 className="font-semibold text-slate-800 flex items-center gap-1">
        Rick Morty Legacy
        <a
          href="https://react-ram-app.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-5 h-5 flex items-center"
        >
          <img src={LinkIcon} alt="LinkIcon" />
        </a>
      </h4>
      <ul className="marker:content-['-'] ml-5">
        <li className="pl-1">
          React SPA based on the television show Rick and Morty for access to
          about hundreds of characters, images, locations and episodes.
        </li>
        <li className="pl-1">
          Key skills: React (Functional & Class-Components), Hooks (including
          useReducer and Context API), Redux, RTK, RTK Query, Tailwind, React
          Testing Library.
        </li>
        <li className="pl-1">Implementation time: 6 weeks.</li>
      </ul>
      <h4 className="font-semibold text-slate-800 flex items-center content-center gap-1">
        RS lang (team project)
        <a
          href="https://vonubat.github.io/rs-lang/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-5 h-5 flex items-center"
        >
          <img src={LinkIcon} alt="LinkIcon" />
        </a>
      </h4>
      <ul className="marker:content-['-'] ml-5">
        <li className="pl-1">
          App for learning words with interval repetition technique, individual
          progress tracking and mini-games. Application use API with ability to
          create new users, users can have learning words, setting and
          statistics data.
        </li>
        <li className="pl-1">
          Key skills: TS, MongoDB, async coding, team working, code reviewing,
          resolve conflicts, Scrum, Kanban.
        </li>
        <li className="pl-1">My role: team leader.</li>
        <li className="pl-1">
          Responsibility: basic project settings, API communication,
          authorization, textbook, dictionary, minigames.
        </li>
        <li className="pl-1">Implementation time: 4 weeks.</li>
      </ul>
      <h4 className="font-semibold text-slate-800 flex items-center content-center gap-1">
        Async Race
        <a
          href="https://vonubat.github.io/async-race/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-5 h-5 flex items-center"
        >
          <img src={LinkIcon} alt="LinkIcon" />
        </a>
      </h4>
      <ul className="marker:content-['-'] ml-5">
        <li className="pl-1">
          Race Game SPA. Allows you to manage the collection of the cars,
          operate it's engines, and show races statistics. Communication with a
          server.
        </li>
        <li className="pl-1">
          Key skills: communication with a server (fetch, REST API), async
          coding / Promises, JS Animations, DOM Api, TS.
        </li>
        <li className="pl-1">Implementation time: 2 weeks.</li>
      </ul>
      <h4 className="font-semibold text-slate-800 flex items-center content-center gap-1">
        Shelter
        <a
          href="https://vonubat.github.io/shelter/pages/main/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="w-5 h-5 flex items-center"
        >
          <img src={LinkIcon} alt="LinkIcon" />
        </a>
      </h4>
      <ul className="marker:content-['-'] ml-5">
        <li className="pl-1">
          Responsive layout (SASS) and styling based on Figma model for fixed
          screen resolutions: 1280px, 768px, 320px.
        </li>
        <li className="pl-1">
          Key skills: pure JS (slider, pagination, modal window, burger-menu),
          HTML, Sass.
        </li>
        <li className="pl-1">Implementation time: 3 weeks.</li>
      </ul>
      <h4 className="font-semibold text-slate-800 flex items-center content-center gap-1">
        Repair workshop
        <a
          href="https://vonubat.github.io/kulikov-project/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-5 h-5 flex items-center"
        >
          <img src={LinkIcon} alt="LinkIcon" />
        </a>
      </h4>
      <ul className="marker:content-['-'] ml-5">
        <li className="pl-1">
          The first freelance job. Landing Page with responsive layout.
        </li>
        <li className="pl-1">Key skills: SMTP-service, JS, HTML, Sass.</li>
        <li className="pl-1">Implementation time: 2 weeks.</li>
      </ul>
    </div>
  );
};
