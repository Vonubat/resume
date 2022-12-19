export const SKILLS_AND_TOOLS: string[] = [
  'JavaScript',
  'TypeScript',
  'React (Class-Components & Hooks)',
  'Redux',
  'Redux Toolkit',
  'Node.js (Express, JSON-server)',
  'Git',
  'REST API',
  'Axios',
  'WebSockets',
  'JEST',
  'React Testing Library',
  'MongoDB',
  'SASS',
  'CSS',
  'Bootstrap',
  'Material-UI',
  'Tailwind',
  'HTML',
  'BEM',
  'Internationalization',
  'Webpack',
  'ESLint',
  'Postman',
  'Swagger',
  'Figma',
  'Scrum',
  'Kanban (Trello)',
];

export enum ContactHref {
  telegram = 'https://t.me/mortally_happy',
  linkedin = 'https://www.linkedin.com/in/egor-tabunov/',
  email = 'mailto:vonubat@gmail.com',
  mobile = 'tel:+375-29-277-57-43',
  skype = 'skype:homeanagar?chat',
  github = 'https://github.com/Vonubat',
  location = 'https://goo.gl/maps/Dyu6EhVKdz56ZNV37',
}

export enum Establishments {
  rsschool = 'https://rs.school/',
  vector = 'https://vec-tech.by/',
}

export enum Sections {
  workExperience = 'Work Experience',
  projects = 'Projects',
  skillsAndTools = 'Skills / Tools',
  education = 'Education',
  languages = 'Languages',
}

export const RS_SCHOOL = {
  name: 'The Rolling Scopes School',
  position: 'Front-end Developer Intern',
  period: '03/2022 - 12/2022',
  achievementsTasks: [
    'Cross-checking and code-reviewing (36 cases).',
    'Passing 48 tests on front-end development skills.',
    'I have personal mentor from EPAM Systems, which review and evaluate my projects. Also he gave me pieces of advice for improving my code and core knowledges.',
    'Solve development tasks according to technical requirements.',
  ],
};

export const VECTOR = {
  name: 'Vector of Technologies',
  position: 'Engineering Project Manager',
  period: '04/2015 - 03/2022',
  achievementsTasks: [
    'Technical expertise in industrial equipment and processes: variable frequency drives, servo systems, machine controllers, industrial robots, sensor systems, machine vision solutions.',
    'Estimation of a budget.',
    'Time-management.',
    'Monitoring progress.',
    `Quality control and client's satisfaction measurement`,
    `Management of issues and risks.`,
  ],
};

export const HEADER = {
  name: 'Egor Tabunov',
  position: 'Front-end Developer',
  description:
    'Passionate front-end developer with 1-year experience using JavaScript, TypeScript and React framework. My core strengths are well-developed analytical and interpersonal skills, ability to deeply understand the project logic and processes in a short time',
};

export const EDUCATION = {
  name: 'Belarusian National Technical University. Information Technologies and Robotics Faculty',
  speciality: 'Automation of Technological Processes and Production',
  period: '09/2010 - 06/2016',
  achievementsTasks: [
    'Degree: Master of Engineering.',
    'Grade Point Average: 8.5 out of 10.',
  ],
};

export const PROJECTS = {
  projectManagementSystem: {
    name: 'Project Management System App (team project)',
    link: 'https://project-management-system-app.netlify.app/',
    features: [
      `Kanban Board to manage your team's workflow. This an application that helps a team or group of developers achieve their goals in real time. In this application you can manage your column, tasks using Drag-n-Drop, also can specify additional info in task description and assign users`,
      'Key skills: React, Redux Toolkit, Material UI, WebSockets, Drag-n-Drop, Internationalization, Routing, MongoDB, async coding, team working, code reviewing, resolve conflicts, Scrum, Kanban.',
      'My role: team leader.',
      'Responsibility: basic project settings, API communication, columns, tasks, welcome page, video-tutorials, tasks assigning to another users, WebSockets',
      'Implementation time: 5 weeks.',
    ],
  },
  rickAndMorty: {
    name: 'Rick Morty Legacy',
    link: 'https://react-ram-app.netlify.app/',
    features: [
      'React SPA based on the television show Rick and Morty for access to about hundreds of characters, images, locations and episodes.',
      'Key skills: React (Functional & Class-Components), Hooks (including useReducer and Context API), Redux, RTK, RTK Query, Tailwind, React Testing Library.',
      'Implementation time: 6 weeks.',
    ],
  },
  rsLang: {
    name: 'RS lang (team project)',
    link: 'https://vonubat.github.io/rs-lang/',
    features: [
      'App for learning words with interval repetition technique, individual progress tracking and mini-games. Application use API with ability to create new users, users can have learning words, setting and statistics data.',
      'Key skills: TS, MongoDB, async coding, team working, code reviewing, resolve conflicts, Scrum, Kanban.',
      'My role: team leader.',
      'Responsibility: basic project settings, API communication, authorization, textbook, dictionary, minigames.',
      'Implementation time: 4 weeks.',
    ],
  },
  asyncRace: {
    name: 'Async Race',
    link: 'https://vonubat.github.io/async-race/',
    features: [
      `Race Game SPA. Allows you to manage the collection of the cars, operate it's engines, and show races statistics. Communication with a server.`,
      'Key skills: communication with a server (fetch, REST API), async coding / Promises, JS Animations, DOM Api, TS.',
      'Implementation time: 2 weeks.',
    ],
  },
  shelter: {
    name: 'Shelter',
    link: 'https://vonubat.github.io/shelter/pages/main/index.html',
    features: [
      'Responsive layout (SASS) and styling based on Figma model for fixed screen resolutions: 1280px, 768px, 320px.',
      'Key skills: pure JS (slider, pagination, modal window, burger-menu), HTML, Sass.',
      'Implementation time: 3 weeks.',
    ],
  },
  repairWorkshop: {
    name: 'Repair workshop',
    link: 'http://storyart.by/',
    features: [
      'The first freelance job. Landing Page with responsive layout.',
      'Key skills: SMTP-service, JS, HTML, Sass.',
      'Implementation time: 2 weeks.',
    ],
  },
};
