import React from 'react';
import { Badge } from './UI/Badge';

function SkillsAndTools() {
  return (
    <div className="flex flex-col max-w-[450px] mx-2 my-2">
      <h2 className="font-bold leading-loose text-2xl text-slate-600 uppercase">
        Skills / Tools
      </h2>
      <div className="badge-container flex flex-wrap gap-2">
        <Badge value="JavaScript" />
        <Badge value="TypeScript" />
        <Badge value="React (Functional & Class-Components)" />
        <Badge value="Redux" />
        <Badge value="Redux Toolkit" />
        <Badge value="Node.js (Express, JSON-server)" />
        <Badge value="Git" />
        <Badge value="REST API" />
        <Badge value="JEST" />
        <Badge value="React Testing Library" />
        <Badge value="MongoDB" />
        <Badge value="Sass" />
        <Badge value="CSS" />
        <Badge value="Bootstrap" />
        <Badge value="Material-UI" />
        <Badge value="Tailwind" />
        <Badge value="HTML" />
        <Badge value="BEM" />
        <Badge value="Webpack" />
        <Badge value="ESLint" />
        <Badge value="Postman" />
        <Badge value="Swagger" />
        <Badge value="Figma" />
        <Badge value="Scrum" />
        <Badge value="Kanban (Trello)" />
      </div>
    </div>
  );
}

export default SkillsAndTools;
