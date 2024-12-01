import React from 'react';

interface SkillsPropTypes {
  skills: string[];
}

export const Skills = ({ skills }: SkillsPropTypes) => {
  return (
    <>
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-3 py-1 text-base font-black leading-6 text-gray-700 rounded-md border border-gray-200">
          {skill}
        </span>
      ))}
    </>
  );
};

export default Skills;
